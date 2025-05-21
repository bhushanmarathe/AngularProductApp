import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ColorService } from '../../services/Color.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  bgColorClass = 'bg-blue-400';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private colorService: ColorService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (!isNaN(id)) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
        if (this.product) {
          this.bgColorClass = this.colorService.getColor(this.product.id);
        }
      });
    } else {
      this.product = undefined; // or handle invalid ID case
    }
  }
  // getColorForProduct(id: number): string {
  //   const colors = [
  //     'bg-red-100',
  //     'bg-green-100',
  //     'bg-blue-100',
  //     'bg-yellow-100',
  //     'bg-purple-100',
  //   ];
  //   return colors[id % colors.length];
  // }
}
