import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IOtzyvi } from 'app/shared/model/otzyvi.model';

type EntityResponseType = HttpResponse<IOtzyvi>;
type EntityArrayResponseType = HttpResponse<IOtzyvi[]>;

@Injectable({ providedIn: 'root' })
export class OtzyviService {
  public resourceUrl = SERVER_API_URL + 'api/otzyvis';

  constructor(protected http: HttpClient) {}

  create(otzyvi: IOtzyvi): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(otzyvi);
    return this.http
      .post<IOtzyvi>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(otzyvi: IOtzyvi): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(otzyvi);
    return this.http
      .put<IOtzyvi>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IOtzyvi>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IOtzyvi[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(otzyvi: IOtzyvi): IOtzyvi {
    const copy: IOtzyvi = Object.assign({}, otzyvi, {
      date: otzyvi.date != null && otzyvi.date.isValid() ? otzyvi.date.format(DATE_FORMAT) : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date != null ? moment(res.body.date) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((otzyvi: IOtzyvi) => {
        otzyvi.date = otzyvi.date != null ? moment(otzyvi.date) : null;
      });
    }
    return res;
  }
}
