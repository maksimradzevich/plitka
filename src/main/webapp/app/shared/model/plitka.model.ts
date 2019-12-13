export interface IPlitka {
  id?: number;
  name?: string;
  price?: number;
  color?: string;
  material?: string;
  size?: string;
  shopAddress?: string;
  count?: number;
}

export class Plitka implements IPlitka {
  constructor(
    public id?: number,
    public name?: string,
    public price?: number,
    public color?: string,
    public material?: string,
    public size?: string,
    public shopAddress?: string,
    public count?: number
  ) {}
}
