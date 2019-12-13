import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISolders } from 'app/shared/model/solders.model';

type EntityResponseType = HttpResponse<ISolders>;
type EntityArrayResponseType = HttpResponse<ISolders[]>;

@Injectable({ providedIn: 'root' })
export class SoldersService {
  public resourceUrl = SERVER_API_URL + 'api/solders';

  constructor(protected http: HttpClient) {}

  create(solders: ISolders): Observable<EntityResponseType> {
    return this.http.post<ISolders>(this.resourceUrl, solders, { observe: 'response' });
  }

  update(solders: ISolders): Observable<EntityResponseType> {
    return this.http.put<ISolders>(this.resourceUrl, solders, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISolders>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISolders[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
