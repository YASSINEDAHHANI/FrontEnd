import { Component, OnInit } from '@angular/core';
import { Manga } from '../Models/Manga';
import { MangaService } from '../../service/Manga.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaList: Manga[] = [];
  pagedMangaList: Manga[] = [];
  editMangaData: Manga | null = null;
  pageSize = 5;
  currentPage = 0;
  totalManga = 0;

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.loadManga();
  }

  loadManga(): void {
    this.mangaService.getAllManga().subscribe(
      (data) => {
        this.mangaList = data;
        this.totalManga = data.length;
        this.updatePagedMangaList();
      },
      (error) => {
        console.error('Error loading manga', error);
      }
    );
  }

  deleteManga(id: number): void {
    this.mangaService.deleteManga(id).subscribe(
      () => {
        this.mangaList = this.mangaList.filter(manga => manga.number !== id);
        this.totalManga--;
        this.updatePagedMangaList();
      },
      (error) => {
        console.error('Error deleting manga', error);
      }
    );
  }

  initiateEditManga(manga: Manga): void {
    this.editMangaData = { ...manga }; // Make a copy to edit
  }

  updateManga(): void {
    if (this.editMangaData) {
      this.mangaService.updateManga(this.editMangaData).subscribe(
        (data) => {
          const index = this.mangaList.findIndex(manga => manga.number === this.editMangaData!.number);
          this.mangaList[index] = data;
          this.editMangaData = null; // Reset the edit manga object
          this.updatePagedMangaList();
        },
        (error) => {
          console.error('Error updating manga', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.editMangaData = null; // Reset the edit manga object
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedMangaList();
  }

  updatePagedMangaList(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedMangaList = this.mangaList.slice(start, end);
  }
}
