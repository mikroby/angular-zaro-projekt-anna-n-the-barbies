import { Address } from './address';

export class Customer {
  [key: string]: any;
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = new Address();
  active: boolean = true;

}

export const hunActiveKeys = ['Aktív', 'Inaktív'];

// id, firstName, lastName, email, address: Address, active

// "id": 6,
// "firstName": "Neddie",
// "lastName": "Fant",
// "email": "nfant5@sourceforge.net",
// "address": [
//     {
//         "zip": "623795",
//         "country": "Russia",
//         "city": "Pokrovskoye",
//         "street": "52632 Trailsway Plaza",
//         "notes": "middleware"
//     }
// ],
// "active": true
