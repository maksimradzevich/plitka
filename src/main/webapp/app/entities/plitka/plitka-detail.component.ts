import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPlitka } from 'app/shared/model/plitka.model';

@Component({
  selector: 'jhi-plitka-detail',
  templateUrl: './plitka-detail.component.html'
})
export class PlitkaDetailComponent implements OnInit {
  plitka: IPlitka;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ plitka }) => {
      this.plitka = plitka;
    });
  }

  previousState() {
    window.history.back();
  }
}
