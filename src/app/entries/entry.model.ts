export class Entry {
  date: string;
  odometer: number;
  gallons: number;

  constructor ({date, odometer, gallons}: Entry = <Entry> {}) {
    this.date = date;
    this.odometer = odometer;
    this.gallons = gallons;
  }

  isEmpty() {
    return !this.date || !this.odometer || !this.gallons;
  }
}
