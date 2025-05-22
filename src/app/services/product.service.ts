import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      description: 'A powerful laptop.',
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
      description: 'A smart phone.',
    },
    {
      id: 3,
      name: 'Tablet',
      price: 500,
      description: 'A handy tablet.',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 250,
      description: 'Keep track of your health.',
    },
    {
      id: 5,
      name: 'Headphones',
      price: 150,
      description: 'Noise cancelling headphones.',
    },
    {
      id: 6,
      name: 'Camera',
      price: 900,
      description: 'High resolution digital camera.',
    },
    {
      id: 7,
      name: 'Printer',
      price: 300,
      description: 'Wireless color printer.',
    },
    {
      id: 8,
      name: 'Monitor',
      price: 400,
      description: '4K UHD display monitor.',
    },
    {
      id: 9,
      name: 'Keyboard',
      price: 80,
      description: 'Mechanical keyboard with RGB lighting.',
    },
    {
      id: 10,
      name: 'Mouse',
      price: 60,
      description: 'Wireless ergonomic mouse.',
    },
    {
      id: 11,
      name: 'External Hard Drive',
      price: 120,
      description: '1TB portable hard drive.',
    },
    {
      id: 12,
      name: 'Speakers',
      price: 200,
      description: 'Bluetooth stereo speakers.',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }
}
