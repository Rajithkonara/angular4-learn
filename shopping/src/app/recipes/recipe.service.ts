import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
   
  recipeSelected = new EventEmitter<Recipe>();   
  
  private recipes: Recipe[] = [
    new Recipe('A Test', 
    'This is a testing', 
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),        
    ]),
    new Recipe('Butter Cuttle Fish', 
    'Righ Now ............',
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),        
    ])
    ];

    /**
     * return new Array
     */
    getRecipes () {
        return this.recipes.slice();
    }
}