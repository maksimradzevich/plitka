import { Moment } from 'moment';

export interface IOtzyvi {
  id?: number;
  clientFio?: string;
  text?: string;
  itemName?: string;
  date?: Moment;
}

export class Otzyvi implements IOtzyvi {
  constructor(public id?: number, public clientFio?: string, public text?: string, public itemName?: string, public date?: Moment) {}
}
