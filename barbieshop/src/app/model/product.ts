export class Product {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  type: string = '';
  catID: number = 0;
  description: string = '';
  price: number = 0;
  featured: boolean = true;
  active: boolean = true;
}

export const hunFeaturedKeys = ['Kiemelt', 'Nem kiemelt'];

// "id": 1,
//             "name": "Yukon Bellflower",
//             "type": "Campanulaceae",
//             "catID": 33,
//             "description": "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",
//             "price": 67.16,
//             "featured": false,
//             "active": false
