export class EntityNewSwitch {
  constructor(
    public name: string,
    public houseCode: string,
    public deviceCode: string,
    public triStateOn: string,
    public triStateOff: string,
    public urlOn: string,
    public urlOff: string,
    public hz: string,
    public dataOn: string,
    public dataOff: string,
  ) { }
}
