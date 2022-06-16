import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminPageRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  declarations: [AdminPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminPageModule {}
