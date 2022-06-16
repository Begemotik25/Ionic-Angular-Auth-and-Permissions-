import { Component } from '@angular/core';
import { DataGetterService, DishFood } from '../service/data-getter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataExchangerService } from '../service/data-exchanger.service';
//import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foods: DishFood[];

  showNew = false;
  showEdit = -1;
  public username: string;

  extraData: string;
  constructor(
    private dataGetter: DataGetterService,
    private router: Router,
    private route: ActivatedRoute,
    private dataExchanger: DataExchangerService
  ) {
    this.dataExchanger.getData().subscribe((data) => (this.extraData = data));
    this.extraData = this.route.snapshot.paramMap.get('from-data-sender');
    this.dataGetter.getFoods().subscribe((data) => {
      this.foods = data;
    });
    this.username = this.dataGetter.getUser();
  }

  admin() {
    if (this.username != 'admin') {
      this.router.navigate(['/home']);
    } else {
      (" You don't have permission !");
    }
  }
  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteFood(index);
  }

  addFood(food) {
    this.dataGetter.addFood(food);
    this.showNew = false;
  }

  sendData() {
    this.dataExchanger.publishData(this.extraData);
    this.router.navigate(['/data-sender']);
  }
}
