import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {
  private colors = [
    'bg-red-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-purple-100',
  ];

  getColor(indexOrId: number): string {
    return this.colors[indexOrId % this.colors.length];
  }
}
