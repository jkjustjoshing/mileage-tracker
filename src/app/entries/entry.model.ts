export interface EntryDbModel {
  date: number;
  odometer: number;
  gallons: number;
  totalPrice: number;
  $key?: string;
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

function isEntryDbModel (entry: any): entry is EntryDbModel {
  return Boolean(entry && entry.$key);
}

export class Entry {
  date: Date;
  odometer: number;
  gallons: number;
  totalPrice: number;
  $key?: string;

  constructor (data: EntryDbModel | EntryInput = <EntryDbModel> {}) {
    const {date, odometer, gallons, totalPrice} = data;

    if (typeof date === 'number') {
      this.date = new Date(date);
    } else if (date instanceof Date) {
      this.date = date;
    } else {
      this.date = new Date(date.year, date.month - 1, date.day);
    }
    this.odometer = odometer;
    this.gallons = gallons;
    this.totalPrice = totalPrice;

    if (isEntryDbModel(data)) {
      this.$key = data.$key;
    }
  }

  isEmpty() {
    return !this.date || !this.odometer || !this.gallons || !this.totalPrice;
  }

  serialize(): EntryDbModel {
    return {
      date: this.date.getTime(),
      odometer: this.odometer,
      gallons: this.gallons,
      totalPrice: this.totalPrice,
      ...(this.$key ? { $key: this.$key } : {}) // only have a $key property if it exists
    };
  }
}
