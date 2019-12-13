export interface IClients {
  id?: number;
  fio?: string;
  phone?: string;
  address?: string;
  totalPrice?: number;
}

export class Clients implements IClients {
  constructor(public id?: number, public fio?: string, public phone?: string, public address?: string, public totalPrice?: number) {}
}
