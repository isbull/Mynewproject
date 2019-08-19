import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/images.service';

@Component({
  selector: 'app-secundary',
  templateUrl: './secundary.component.html',
  styleUrls: ['./secundary.component.scss']
})
export class SecundaryComponent implements OnInit {
  imagesList;
  displayedColumns: string[] = ['name', 'url'];

  constructor(private imagenSerrvice: ImagesService) { }

  ngOnInit() {
    this.imagenSerrvice.getImageList().subscribe(images => { this.imagesList = images; });
  }

}
