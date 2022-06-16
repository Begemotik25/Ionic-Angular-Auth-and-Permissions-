import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesPageRoutingModule } from './dishes-routing.module';

import { DishesPage } from './dishes.page';
import { DishessComponent } from '../components/dishess/dishess.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DishesPageRoutingModule],
  declarations: [DishesPage, DishessComponent],
})
export class DishesPageModule {}
