export interface IAdmins {
  id?: number;
  fio?: string;
  phone?: string;
  shopAddress?: string;
}

export class Admins implements IAdmins {
  constructor(public id?: number, public fio?: string, public phone?: string, public shopAddress?: string) {}
}
