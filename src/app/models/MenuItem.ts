import {Ingredients} from "./Ingredients";
import {Category} from "./Category";

export interface MenuItem{
  id: string,
  name:string,
  category: Category
  description: string,
  price: number
  ingredients: Ingredients[]
}
