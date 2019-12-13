import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAdmins } from 'app/shared/model/admins.model';

@Component({
  selector: 'jhi-admins-detail',
  templateUrl: './admins-detail.component.html'
})
export class AdminsDetailComponent implements OnInit {
  admins: IAdmins;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ admins }) => {
      this.admins = admins;
    });
  }

  previousState() {
    window.history.back();
  }
}
