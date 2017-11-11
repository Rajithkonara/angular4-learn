import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
   
  constructor (private shoppingListService: ShoppingListService) {}
  
  private recipes: Recipe[] = [
    new Recipe('A Test', 
    'This is a testing', 
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),        
    ]),
    new Recipe('Chines Roll', 
    'Righ Now ............',
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
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

    getRecipe (index: number) {
        return this.recipes[index];
    }

    addIngradientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());        
    }
}