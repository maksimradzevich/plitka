import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IShops } from 'app/shared/model/shops.model';

@Component({
  selector: 'jhi-shops-detail',
  templateUrl: './shops-detail.component.html'
})
export class ShopsDetailComponent implements OnInit {
  shops: IShops;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ shops }) => {
      this.shops = shops;
    });
  }

  previousState() {
    window.history.back();
  }
}
