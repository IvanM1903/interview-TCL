import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CatService } from 'src/app/services/cat/cat.service';
import { catDto } from 'src/assets/dto/cat-dto';
import { catSimpleDto } from 'src/assets/dto/cat-simple-dto';


@Component({
  selector: 'app-kittens-image',
  templateUrl: './kittens-image.component.html',
  styleUrls: ['./kittens-image.component.css']
})
export class KittensImageComponent implements OnInit {

  faSpinner = faSpinner;
  isRandomLoading: boolean = false;
  isBreedLoading: boolean = false;

  catBreedSelected: string = "";
  catsListAllBreeds: catDto[] = [];
  randomCat: catSimpleDto = new catSimpleDto;
  breedCat: catSimpleDto = new catSimpleDto;

  constructor(private catService: CatService) {
    this.getAllCats();
  }

  ngOnInit(): void {
  }

  getAllCats() {
    this.catService.getAllCatsBreeds().subscribe(
      (cats: catDto[]) => {
        cats.map(cat => this.catsListAllBreeds.push(cat));
      },
      error => { },
      () => { }
    );
  }

  getCatImage() {
    this.isRandomLoading = true;
    this.catService.getRandomCat().subscribe(
      (cats: catSimpleDto[]) => {
        this.randomCat = { ...cats[0] };
      },
      error => { },
      () => {
        this.isRandomLoading = false;
      }
    );
  }

  getCatByBreedSelected() {
    this.isBreedLoading = true;
    console.log(this.catBreedSelected);

    this.catService.getCatByBreed(this.catBreedSelected).subscribe(
      (cats: catSimpleDto[]) => {
        this.breedCat = { ...cats[0] };
        console.log(this.breedCat);

      },
      error => { },
      () => {
        this.isBreedLoading = false;
      }
    )
  }

}
