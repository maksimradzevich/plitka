import { Moment } from 'moment';

export interface IDostavka {
  id?: number;
  date?: Moment;
  name?: string;
  count?: number;
  price?: number;
  buyerPhone?: string;
  buyerAddress?: string;
  buyerFio?: string;
}

export class Dostavka implements IDostavka {
  constructor(
    public id?: number,
    public date?: Moment,
    public name?: string,
    public count?: number,
    public price?: number,
    public buyerPhone?: string,
    public buyerAddress?: string,
    public buyerFio?: string
  ) {}
}
