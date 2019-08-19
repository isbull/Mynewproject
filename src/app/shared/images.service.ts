import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  getImageList() {
   return this.http.get('https://picsum.photos/v2/list').pipe(map((images: Array<object>) => {
      return images.map(image => ({ url: image.url, name: image.author }));
    }));
  }
}
