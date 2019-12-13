import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOtzyvi } from 'app/shared/model/otzyvi.model';

@Component({
  selector: 'jhi-otzyvi-detail',
  templateUrl: './otzyvi-detail.component.html'
})
export class OtzyviDetailComponent implements OnInit {
  otzyvi: IOtzyvi;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ otzyvi }) => {
      this.otzyvi = otzyvi;
    });
  }

  previousState() {
    window.history.back();
  }
}
