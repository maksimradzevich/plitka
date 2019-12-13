import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admins } from 'app/shared/model/admins.model';
import { AdminsService } from './admins.service';
import { AdminsComponent } from './admins.component';
import { AdminsDetailComponent } from './admins-detail.component';
import { AdminsUpdateComponent } from './admins-update.component';
import { IAdmins } from 'app/shared/model/admins.model';

@Injectable({ providedIn: 'root' })
export class AdminsResolve implements Resolve<IAdmins> {
  constructor(private service: AdminsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAdmins> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((admins: HttpResponse<Admins>) => admins.body));
    }
    return of(new Admins());
  }
}

export const adminsRoute: Routes = [
  {
    path: '',
    component: AdminsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.admins.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AdminsDetailComponent,
    resolve: {
      admins: AdminsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.admins.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AdminsUpdateComponent,
    resolve: {
      admins: AdminsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.admins.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AdminsUpdateComponent,
    resolve: {
      admins: AdminsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.admins.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
