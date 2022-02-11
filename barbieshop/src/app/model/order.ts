export class Order {
  [key: string]: any;
  id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: string = 'new';
}

export class StatusKey {
  keys: string[] = ['new', 'shipped', 'paid'];
}

// id, customerID, productID, amount, status: new|shipped|paid

// "id": 1,
//             "customerID": 36,
//             "productID": 52,
//             "amount": 3121,
//             "status": "paid"
