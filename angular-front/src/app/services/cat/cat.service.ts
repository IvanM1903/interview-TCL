import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catDto } from 'src/assets/dto/cat-dto';
import { catSimpleDto } from 'src/assets/dto/cat-simple-dto';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  catAPI = "https://api.thecatapi.com/v1/breeds";

  randomCatAPI = "https://api.thecatapi.com/v1/images/search";

  getAllCatsBreeds(): Observable<catDto[]> {
    return this.http.get<catDto[]>(this.catAPI);
  }

  getCatImageFromUrl(url: string): Observable<Blob> {
    return this.http.get(url, {responseType: 'blob' });
  }

  getRandomCat(): Observable<catSimpleDto[]> {
    return this.http.get<catSimpleDto[]>(this.randomCatAPI);
  }

  getCatByBreed(breed_id: string): Observable<catSimpleDto[]>{
    return this.http.get<catSimpleDto[]>(this.randomCatAPI+'?breed_ids='+`${breed_id}`);
  }

}
