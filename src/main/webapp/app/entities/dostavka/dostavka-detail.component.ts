import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDostavka } from 'app/shared/model/dostavka.model';

@Component({
  selector: 'jhi-dostavka-detail',
  templateUrl: './dostavka-detail.component.html'
})
export class DostavkaDetailComponent implements OnInit {
  dostavka: IDostavka;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ dostavka }) => {
      this.dostavka = dostavka;
    });
  }

  previousState() {
    window.history.back();
  }
}
