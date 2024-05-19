import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Manga } from "../app/Models/Manga";

@Injectable({providedIn: 'root'})
export class MangaService {
    private baseUrl='http://localhost:8082/api/manga';
    constructor(private http:HttpClient) {}
    getAllManga(): Observable<Manga[]> {
        return this.http.get<Manga[]>(this.baseUrl);
      }
      getMangaById(id: number): Observable<Manga> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Manga>(url);
      }
    
      createManga(manga: Manga): Observable<Manga> {
        return this.http.post<Manga>(this.baseUrl, manga);
      }
      updateManga(manga: Manga):Observable<Manga> {
        const url = `${this.baseUrl}/${manga.number}`;
        return this.http.put<Manga>(url, manga);
      }
    
      deleteManga(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
      }
      
      //------
      private selectedManga: Manga | null = null;

      setSelectedManga(manga: Manga): void {
        this.selectedManga = manga;
      }

      getSelectedManga(): Manga | null {
        return this.selectedManga;
      }

}