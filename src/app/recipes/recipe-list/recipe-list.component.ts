import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple text', 'https://www.cscassets.com/recipes/wide_cknew/wide_24702.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
