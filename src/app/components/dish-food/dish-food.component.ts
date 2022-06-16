import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DishFood } from '../../service/data-getter.service';

@Component({
  selector: 'app-dish-food',
  templateUrl: './dish-food.component.html',
  styleUrls: ['./dish-food.component.scss'],
})
export class DishFoodComponent implements OnInit {
  @Input() dishFood: DishFood;
  @Input() isNew: boolean;
  @Output() addFood = new EventEmitter();
  @Output() cancelAddingFood = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit() {
    if (this.isNew) {
      this.dishFood = {
        name: '',
        type: '',
        weight: null,
        ingredients: '',
        numb: null,
      };
      this.title = 'New food';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addFood.emit(this.dishFood);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingFood.emit();
    }
  }
}
