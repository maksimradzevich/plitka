import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clients } from 'app/shared/model/clients.model';
import { ClientsService } from './clients.service';
import { ClientsComponent } from './clients.component';
import { ClientsDetailComponent } from './clients-detail.component';
import { ClientsUpdateComponent } from './clients-update.component';
import { IClients } from 'app/shared/model/clients.model';

@Injectable({ providedIn: 'root' })
export class ClientsResolve implements Resolve<IClients> {
  constructor(private service: ClientsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IClients> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((clients: HttpResponse<Clients>) => clients.body));
    }
    return of(new Clients());
  }
}

export const clientsRoute: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.clients.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ClientsDetailComponent,
    resolve: {
      clients: ClientsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.clients.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ClientsUpdateComponent,
    resolve: {
      clients: ClientsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.clients.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ClientsUpdateComponent,
    resolve: {
      clients: ClientsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'plitkashopApp.clients.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
