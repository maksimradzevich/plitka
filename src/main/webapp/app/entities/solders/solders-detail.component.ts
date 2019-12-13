import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISolders } from 'app/shared/model/solders.model';

@Component({
  selector: 'jhi-solders-detail',
  templateUrl: './solders-detail.component.html'
})
export class SoldersDetailComponent implements OnInit {
  solders: ISolders;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ solders }) => {
      this.solders = solders;
    });
  }

  previousState() {
    window.history.back();
  }
}
