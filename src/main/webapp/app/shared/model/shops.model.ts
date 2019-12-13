export interface IShops {
  id?: number;
  address?: string;
  time?: string;
  name?: string;
  phone?: string;
}

export class Shops implements IShops {
  constructor(public id?: number, public address?: string, public time?: string, public name?: string, public phone?: string) {}
}
