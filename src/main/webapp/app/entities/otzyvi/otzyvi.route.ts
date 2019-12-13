import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Otzyvi } from 'app/shared/model/otzyvi.model';
import { OtzyviService } from './otzyvi.service';
import { OtzyviComponent } from './otzyvi.component';
import { OtzyviDetailComponent } from './otzyvi-detail.component';
import { OtzyviUpdateComponent } from './otzyvi-update.component';
import { IOtzyvi } from 'app/shared/model/otzyvi.model';

@Injectable({ providedIn: 'root' })
export class OtzyviResolve implements Resolve<IOtzyvi> {
  constructor(private service: OtzyviService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IOtzyvi> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((otzyvi: HttpResponse<Otzyvi>) => otzyvi.body));
    }
    return of(new Otzyvi());
  }
}

export const otzyviRoute: Routes = [
  {
    path: '',
    component: OtzyviComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.otzyvi.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: OtzyviDetailComponent,
    resolve: {
      otzyvi: OtzyviResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.otzyvi.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: OtzyviUpdateComponent,
    resolve: {
      otzyvi: OtzyviResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.otzyvi.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: OtzyviUpdateComponent,
    resolve: {
      otzyvi: OtzyviResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.otzyvi.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
