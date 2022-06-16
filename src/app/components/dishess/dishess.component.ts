import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dishes } from '../../service/data-getter.service';

@Component({
  selector: 'app-dishess',
  templateUrl: './dishess.component.html',
  styleUrls: ['./dishess.component.scss'],
})
export class DishessComponent implements OnInit {
  @Input() dishess: Dishes;
  @Input() isNew_one: boolean;
  @Output() addDish = new EventEmitter();
  @Output() cancelAddingDish = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit() {
    if (this.isNew_one) {
      this.dishess = {
        name: '',
        foodPr: null,
        weight: null,
        foodNumb: null,
      };
      this.title = 'New dish';
    }
  }

  addNew() {
    if (this.isNew_one) {
      this.addDish.emit(this.dishess);
    }
  }

  cancelAdding() {
    if (this.isNew_one) {
      this.cancelAddingDish.emit();
    }
  }
}
