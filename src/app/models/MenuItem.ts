import {Ingredients} from "./Ingredients";
import {Category} from "./Category";
import {BaseEntity} from "./BaseEntity";

export interface MenuItem  extends BaseEntity{
  name:string,
  category: Category
  description: string,
  price: number
  ingredients: Ingredients[]
}
