import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
   
    ingredientsChange = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Guwawa', 6),
      ];

    getIngredients () {
        return this.ingredients.slice();
    }

    addIngredients (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }
    
}