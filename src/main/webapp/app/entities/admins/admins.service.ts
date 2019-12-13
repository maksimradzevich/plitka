import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAdmins } from 'app/shared/model/admins.model';

type EntityResponseType = HttpResponse<IAdmins>;
type EntityArrayResponseType = HttpResponse<IAdmins[]>;

@Injectable({ providedIn: 'root' })
export class AdminsService {
  public resourceUrl = SERVER_API_URL + 'api/admins';

  constructor(protected http: HttpClient) {}

  create(admins: IAdmins): Observable<EntityResponseType> {
    return this.http.post<IAdmins>(this.resourceUrl, admins, { observe: 'response' });
  }

  update(admins: IAdmins): Observable<EntityResponseType> {
    return this.http.put<IAdmins>(this.resourceUrl, admins, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAdmins>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAdmins[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
