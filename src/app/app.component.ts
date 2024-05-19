import { Component,OnInit  } from '@angular/core';
import { Manga } from './Models/Manga';
import { MangaService } from '../service/Manga.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="MangaFront";
  
}

