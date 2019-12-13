import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dostavka } from 'app/shared/model/dostavka.model';
import { DostavkaService } from './dostavka.service';
import { DostavkaComponent } from './dostavka.component';
import { DostavkaDetailComponent } from './dostavka-detail.component';
import { DostavkaUpdateComponent } from './dostavka-update.component';
import { IDostavka } from 'app/shared/model/dostavka.model';

@Injectable({ providedIn: 'root' })
export class DostavkaResolve implements Resolve<IDostavka> {
  constructor(private service: DostavkaService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDostavka> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((dostavka: HttpResponse<Dostavka>) => dostavka.body));
    }
    return of(new Dostavka());
  }
}

export const dostavkaRoute: Routes = [
  {
    path: '',
    component: DostavkaComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.dostavka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: DostavkaDetailComponent,
    resolve: {
      dostavka: DostavkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.dostavka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: DostavkaUpdateComponent,
    resolve: {
      dostavka: DostavkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.dostavka.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: DostavkaUpdateComponent,
    resolve: {
      dostavka: DostavkaResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.dostavka.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
