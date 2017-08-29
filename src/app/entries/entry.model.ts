export class Entry {
  date: string;
  odometer: number;
  gallons: number;
  totalPrice: number;

  constructor ({date, odometer, gallons, totalPrice}: Entry = <Entry> {}) {
    this.date = date;
    this.odometer = odometer;
    this.gallons = gallons;
    this.totalPrice = totalPrice;
  }

  isEmpty() {
    return !this.date || !this.odometer || !this.gallons || !this.totalPrice;
  }
}
