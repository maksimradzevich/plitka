import { Moment } from 'moment';

export interface ISells {
  id?: number;
  date?: Moment;
  count?: number;
  totalPrice?: number;
  clientCounts?: number;
}

export class Sells implements ISells {
  constructor(public id?: number, public date?: Moment, public count?: number, public totalPrice?: number, public clientCounts?: number) {}
}
