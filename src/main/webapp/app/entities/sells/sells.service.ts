import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISells } from 'app/shared/model/sells.model';

type EntityResponseType = HttpResponse<ISells>;
type EntityArrayResponseType = HttpResponse<ISells[]>;

@Injectable({ providedIn: 'root' })
export class SellsService {
  public resourceUrl = SERVER_API_URL + 'api/sells';

  constructor(protected http: HttpClient) {}

  create(sells: ISells): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sells);
    return this.http
      .post<ISells>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(sells: ISells): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sells);
    return this.http
      .put<ISells>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISells>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISells[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(sells: ISells): ISells {
    const copy: ISells = Object.assign({}, sells, {
      date: sells.date != null && sells.date.isValid() ? sells.date.format(DATE_FORMAT) : null
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
      res.body.forEach((sells: ISells) => {
        sells.date = sells.date != null ? moment(sells.date) : null;
      });
    }
    return res;
  }
}
