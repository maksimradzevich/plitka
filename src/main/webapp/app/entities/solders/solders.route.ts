import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solders } from 'app/shared/model/solders.model';
import { SoldersService } from './solders.service';
import { SoldersComponent } from './solders.component';
import { SoldersDetailComponent } from './solders-detail.component';
import { SoldersUpdateComponent } from './solders-update.component';
import { ISolders } from 'app/shared/model/solders.model';

@Injectable({ providedIn: 'root' })
export class SoldersResolve implements Resolve<ISolders> {
  constructor(private service: SoldersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISolders> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((solders: HttpResponse<Solders>) => solders.body));
    }
    return of(new Solders());
  }
}

export const soldersRoute: Routes = [
  {
    path: '',
    component: SoldersComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.solders.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: SoldersDetailComponent,
    resolve: {
      solders: SoldersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.solders.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: SoldersUpdateComponent,
    resolve: {
      solders: SoldersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.solders.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: SoldersUpdateComponent,
    resolve: {
      solders: SoldersResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.solders.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
