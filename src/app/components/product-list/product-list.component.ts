import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common'; // needed for *ngFor, *ngIf
import { ColorService } from '../../services/Color.service'; // Import ColorService if needed

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private colorService: ColorService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  onViewDetails(productid: number) {
    this.router.navigate(['/products', productid]);
  }
  // getColorClass(index: number): string {
  //   const colors = [
  //     'bg-red-100',
  //     'bg-green-100',
  //     'bg-blue-100',
  //     'bg-yellow-100',
  //     'bg-purple-100',
  //   ];
  //   return colors[index % colors.length];
  // }
  getColorClass(productId: number): string {
    return this.colorService.getColor(productId);
  }
}
