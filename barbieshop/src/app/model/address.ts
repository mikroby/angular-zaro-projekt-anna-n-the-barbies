export class Address {
  [key: string]: any;
  zip: string = '';
  country: string = '';
  city: string = '';
  street: string = '';
  notes?: string = '';

  /*constructor(zip: string, country: string, city: string, street: string, notes: string) {
    this.zip = zip;
    this.country = country;
    this.city = city;
    this.street = street;
    this.notes = notes;
  }*/

  getFullAddress(): string {
    return `${this.zip} ${this.country} ${this.city} ${this.street} ${this.notes}`
  }
}


// "zip": "623795",
// //         "country": "Russia",
// //         "city": "Pokrovskoye",
// //         "street": "52632 Trailsway Plaza",
// //         "notes": "middleware"
