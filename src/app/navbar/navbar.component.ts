import {  EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { AppStateService } from '../app-state.service';
import { Manga } from '../Models/Manga';
import { MangaService } from '../../service/Manga.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(public appstate: AppStateService,private mangaService: MangaService){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}