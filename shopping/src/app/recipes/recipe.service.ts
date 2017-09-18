import { Recipe } from './recipe.model';

export class RecipeService {
  
 private recipes: Recipe[] = [
    new Recipe('A Test', 'This is a testing', 
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('Butter Cuttle Fish', 'Righ Now ............',
        'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')

    ];

    /**
     * return new Array
     */
    getRecipes () {
        return this.recipes.slice();
    }
}