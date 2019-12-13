import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISells } from 'app/shared/model/sells.model';

@Component({
  selector: 'jhi-sells-detail',
  templateUrl: './sells-detail.component.html'
})
export class SellsDetailComponent implements OnInit {
  sells: ISells;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ sells }) => {
      this.sells = sells;
    });
  }

  previousState() {
    window.history.back();
  }
}
