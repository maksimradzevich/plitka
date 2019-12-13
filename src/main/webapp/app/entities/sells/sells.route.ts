import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sells } from 'app/shared/model/sells.model';
import { SellsService } from './sells.service';
import { SellsComponent } from './sells.component';
import { SellsDetailComponent } from './sells-detail.component';
import { SellsUpdateComponent } from './sells-update.component';
import { ISells } from 'app/shared/model/sells.model';

@Injectable({ providedIn: 'root' })
export class SellsResolve implements Resolve<ISells> {
  constructor(private service: SellsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISells> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((sells: HttpResponse<Sells>) => sells.body));
    }
    return of(new Sells());
  }
}

export const sellsRoute: Routes = [
  {
    path: '',
    component: SellsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.sells.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: SellsDetailComponent,
    resolve: {
      sells: SellsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.sells.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: SellsUpdateComponent,
    resolve: {
      sells: SellsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.sells.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: SellsUpdateComponent,
    resolve: {
      sells: SellsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.sells.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
