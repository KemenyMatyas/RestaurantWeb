import {MenuType} from "./enums/MenuType";
import {MenuCategory} from "./enums/MenuCategory";
import {Ingredients} from "./Ingredients";

export interface MenuItem{
  name:string,
  menuType: MenuType,
  menuCategory: MenuCategory
  description: string,
  price: number
  ingredients: Ingredients[]
}
