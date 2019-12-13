import { Moment } from 'moment';

export interface IImports {
  id?: number;
  date?: Moment;
  name?: string;
  count?: number;
  price?: number;
}

export class Imports implements IImports {
  constructor(public id?: number, public date?: Moment, public name?: string, public count?: number, public price?: number) {}
}
