import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media-cdn.tripadvisor.com/media/photo-s/1a/42/d4/1c/our-wood-fired-cob-pizza.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media-cdn.tripadvisor.com/media/photo-s/1a/42/d4/1c/our-wood-fired-cob-pizza.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
