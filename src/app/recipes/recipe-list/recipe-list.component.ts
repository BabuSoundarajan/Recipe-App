import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('This is sample recipe', 'This is a test recipe',
    'https://pixnio.com/free-images/2017/03/26/2017-03-26-11-25-40-725x483.jpg'),
    new Recipe('This is sample recipe', 'This is a test recipe',
    'https://pixnio.com/free-images/2017/03/26/2017-03-26-11-25-40-725x483.jpg'),
    new Recipe('This is sample recipe', 'This is a test recipe',
    'https://pixnio.com/free-images/2017/03/26/2017-03-26-11-25-40-725x483.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
