import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test', 'This is a testing', 
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('A Test', 'This is a testing',
     'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')

  ];

  constructor() { }

  ngOnInit() {
  }

}
