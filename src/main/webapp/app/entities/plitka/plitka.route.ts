import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plitka } from 'app/shared/model/plitka.model';
import { PlitkaService } from './plitka.service';
import { PlitkaComponent } from './plitka.component';
import { PlitkaDetailComponent } from './plitka-detail.component';
import { PlitkaUpdateComponent } from './plitka-update.component';
import { IPlitka } from 'app/shared/model/plitka.model';

@Injectable({ providedIn: 'root' })
export class PlitkaResolve implements Resolve<IPlitka> {
  constructor(private service: PlitkaService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPlitka> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((plitka: HttpResponse<Plitka>) => plitka.body));
    }
    return of(new Plitka());
  }
}

export const plitkaRoute: Routes = [
  {
    path: '',
    component: PlitkaComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.plitka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: PlitkaDetailComponent,
    resolve: {
      plitka: PlitkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.plitka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: PlitkaUpdateComponent,
    resolve: {
      plitka: PlitkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.plitka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: PlitkaUpdateComponent,
    resolve: {
      plitka: PlitkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.plitka.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
