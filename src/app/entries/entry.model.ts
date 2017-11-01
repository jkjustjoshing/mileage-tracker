export interface EntryDbModel {
  date: number;
  odometer: number;
  gallons: number;
  totalPrice: number;
}

export interface EntryInput {
  date: {
    day: number,
    year: number,
    month: number
  };
  odometer: number;
  gallons: number;
  totalPrice: number;
}

export class Entry {
  date: Date;
  odometer: number;
  gallons: number;
  totalPrice: number;

  constructor ({date, odometer, gallons, totalPrice}: EntryDbModel | EntryInput = <EntryDbModel> {}) {
    if (typeof date === 'number') {
      this.date = new Date(date);
    } else {
      this.date = new Date(date.year, date.month - 1, date.day);
    }
    this.odometer = odometer;
    this.gallons = gallons;
    this.totalPrice = totalPrice;
  }

  isEmpty() {
    return !this.date || !this.odometer || !this.gallons || !this.totalPrice;
  }

  serialize(): EntryDbModel {
    return {
      date: this.date.getTime(),
      odometer: this.odometer,
      gallons: this.gallons,
      totalPrice: this.totalPrice
    };
  }
}
