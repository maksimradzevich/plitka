import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IImports } from 'app/shared/model/imports.model';

@Component({
  selector: 'jhi-imports-detail',
  templateUrl: './imports-detail.component.html'
})
export class ImportsDetailComponent implements OnInit {
  imports: IImports;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ imports }) => {
      this.imports = imports;
    });
  }

  previousState() {
    window.history.back();
  }
}
