import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPlitka } from 'app/shared/model/plitka.model';

type EntityResponseType = HttpResponse<IPlitka>;
type EntityArrayResponseType = HttpResponse<IPlitka[]>;

@Injectable({ providedIn: 'root' })
export class PlitkaService {
  public resourceUrl = SERVER_API_URL + 'api/plitkas';

  constructor(protected http: HttpClient) {}

  create(plitka: IPlitka): Observable<EntityResponseType> {
    return this.http.post<IPlitka>(this.resourceUrl, plitka, { observe: 'response' });
  }

  update(plitka: IPlitka): Observable<EntityResponseType> {
    return this.http.put<IPlitka>(this.resourceUrl, plitka, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPlitka>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPlitka[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
