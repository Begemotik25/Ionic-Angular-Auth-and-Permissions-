import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DishFood {
  name: string;
  type: string;
  weight: number;
  ingredients: string;
  numb: number;
}

export interface Dishes {
  name: string;
  foodPr: number;
  weight: number;
  foodNumb: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataGetterService {
  private userName = '';

  private users = ['admin', 'reader', 'writer'];

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  private foods: DishFood[] = [
    {
      name: 'Caeser',
      weight: 100,
      type: 'Salads',
      ingredients:
        'Grilled chicken fillet, cherry tomato, parmesan, romaine lettuce, Hungarian bacon, ciabatta chips, caesar sauce',
      numb: 44,
    },
    {
      name: 'Assorted meat delicacies',
      weight: 205,
      type: 'Cold snacks',
      ingredients:
        'Salami, prosciutto, kappa, kalamata olives, brizolo, microgreen, grissini',
      numb: 33,
    },
  ];

  private dishes: Dishes[] = [
    { name: 'first dish', foodPr: 50, weight: 300, foodNumb: 33 },
    { name: 'second dish', foodPr: 180, weight: 300, foodNumb: 44 },
    { name: '3 dish', foodPr: 145, weight: 321, foodNumb: 44 },
    { name: '4 dish', foodPr: 235, weight: 445, foodNumb: 33 },
  ];

  getDishes(foodNumber: number): Observable<any[]> {
    return of(this.dishes.filter((elem) => elem.foodNumb === foodNumber));
  }

  constructor() {}

  getFoods(): Observable<DishFood[]> {
    return of(this.foods);
  }

  addFood(food: DishFood) {
    this.foods.push(food);
  }

  deleteFood(index) {
    this.foods.splice(index, 1);
  }

  getDishess(): Observable<Dishes[]> {
    return of(this.dishes);
  }

  addDish(dish: Dishes) {
    this.dishes.push(dish);
  }

  deleteDish(index) {
    this.dishes.splice(index, 1);
  }
}
