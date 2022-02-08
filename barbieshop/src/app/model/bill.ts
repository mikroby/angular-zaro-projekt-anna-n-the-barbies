export class Bill {
  [key: string]: any;
  id: number = 0;
  orderID: number = 0;
  amount: number = 0;
  status: string = '';
}

// id, orderID, amount, status: new|paid
// "id": 1,
//             "orderID": 20,
//             "amount": 2427,
//             "status": "paid"
