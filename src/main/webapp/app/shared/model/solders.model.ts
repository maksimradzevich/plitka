export interface ISolders {
  id?: number;
  fio?: string;
  phone?: string;
  address?: string;
  shop?: string;
  plitkaCount?: string;
}

export class Solders implements ISolders {
  constructor(
    public id?: number,
    public fio?: string,
    public phone?: string,
    public address?: string,
    public shop?: string,
    public plitkaCount?: string
  ) {}
}
