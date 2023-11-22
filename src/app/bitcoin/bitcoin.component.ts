// src/app/bitcoin.component.ts
import { Component, OnInit } from '@angular/core';
import { CoinDeskService } from '../coindesk.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  data: any;
  errMessage: string = '';

  constructor(private coinDeskService: CoinDeskService) {}

  ngOnInit() {
    this.coinDeskService.getCoinDeskData().subscribe(
      (data) => {
        this.data = data;
      },
      (err) => {
        this.errMessage = err;
      }
    );
  }
}
