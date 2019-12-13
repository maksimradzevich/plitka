import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Imports } from 'app/shared/model/imports.model';
import { ImportsService } from './imports.service';
import { ImportsComponent } from './imports.component';
import { ImportsDetailComponent } from './imports-detail.component';
import { ImportsUpdateComponent } from './imports-update.component';
import { IImports } from 'app/shared/model/imports.model';

@Injectable({ providedIn: 'root' })
export class ImportsResolve implements Resolve<IImports> {
  constructor(private service: ImportsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IImports> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((imports: HttpResponse<Imports>) => imports.body));
    }
    return of(new Imports());
  }
}

export const importsRoute: Routes = [
  {
    path: '',
    component: ImportsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.imports.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ImportsDetailComponent,
    resolve: {
      imports: ImportsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.imports.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ImportsUpdateComponent,
    resolve: {
      imports: ImportsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.imports.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ImportsUpdateComponent,
    resolve: {
      imports: ImportsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.imports.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
