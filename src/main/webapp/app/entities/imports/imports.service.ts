import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IImports } from 'app/shared/model/imports.model';

type EntityResponseType = HttpResponse<IImports>;
type EntityArrayResponseType = HttpResponse<IImports[]>;

@Injectable({ providedIn: 'root' })
export class ImportsService {
  public resourceUrl = SERVER_API_URL + 'api/imports';

  constructor(protected http: HttpClient) {}

  create(imports: IImports): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(imports);
    return this.http
      .post<IImports>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(imports: IImports): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(imports);
    return this.http
      .put<IImports>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IImports>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IImports[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(imports: IImports): IImports {
    const copy: IImports = Object.assign({}, imports, {
      date: imports.date != null && imports.date.isValid() ? imports.date.format(DATE_FORMAT) : null
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
      res.body.forEach((imports: IImports) => {
        imports.date = imports.date != null ? moment(imports.date) : null;
      });
    }
    return res;
  }
}
