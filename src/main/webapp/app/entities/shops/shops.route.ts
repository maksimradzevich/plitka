import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Shops } from 'app/shared/model/shops.model';
import { ShopsService } from './shops.service';
import { ShopsComponent } from './shops.component';
import { ShopsDetailComponent } from './shops-detail.component';
import { ShopsUpdateComponent } from './shops-update.component';
import { IShops } from 'app/shared/model/shops.model';

@Injectable({ providedIn: 'root' })
export class ShopsResolve implements Resolve<IShops> {
  constructor(private service: ShopsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IShops> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((shops: HttpResponse<Shops>) => shops.body));
    }
    return of(new Shops());
  }
}

export const shopsRoute: Routes = [
  {
    path: '',
    component: ShopsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.shops.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ShopsDetailComponent,
    resolve: {
      shops: ShopsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.shops.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ShopsUpdateComponent,
    resolve: {
      shops: ShopsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.shops.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ShopsUpdateComponent,
    resolve: {
      shops: ShopsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.shops.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
