import { Component, OnInit } from '@angular/core';
import { DataExchangerService } from '../service/data-exchanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-sender',
  templateUrl: './data-sender.page.html',
  styleUrls: ['./data-sender.page.scss'],
})
export class DataSenderPage implements OnInit {
  textData: string;

  constructor(
    private router: Router,
    private dataExchanger: DataExchangerService
  ) {
    this.dataExchanger.getData().subscribe((data) => (this.textData = data));
  }

  ngOnInit() {}

  sendDataToHome() {
    this.dataExchanger.publishData(this.textData);
    this.router.navigate(['/home']);
  }
}
