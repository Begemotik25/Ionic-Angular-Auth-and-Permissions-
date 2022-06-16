import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetterService } from '../service/data-getter.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userName: string;

  constructor(
    private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  login() {
    if (this.dataGetter.userExists(this.userName)) {
      this.dataGetter.setUser(this.userName);
      this.router.navigate(['/home']);
    } else {
      this.userNotExistAlert();
    }
  }

  async userNotExistAlert() {
    const alert = await this.alertController.create({
      header: 'Attention !',
      subHeader: 'Authentication error !',
      message: `User ${this.userName} not found ! 
                                Invalid username(`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
