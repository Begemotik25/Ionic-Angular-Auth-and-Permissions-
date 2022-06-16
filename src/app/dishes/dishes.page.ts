import { Component, OnInit } from '@angular/core';
import { DataGetterService, Dishes } from '../service/data-getter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {
  fdnumb: number;
  dishes: any[];

  dishess: Dishes[];
  showNew_one = false;
  showEditOne = -1;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute
  ) {
    this.dataGetter.getDishess().subscribe((data) => {
      this.dishess = data;
    });
  }

  ngOnInit() {
    this.fdnumb = +this.route.snapshot.paramMap.get('fdnumb');
    this.dataGetter.getDishes(this.fdnumb).subscribe((data) => {
      this.dishes = data;
    });
  }

  add() {
    this.showNew_one = true;
  }

  delete(index: number) {
    this.dataGetter.deleteDish(index);
  }

  addDish(dish) {
    this.dataGetter.addDish(dish);
    this.showNew_one = false;
  }
}
