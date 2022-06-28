import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { productosArray } from "../helper/productos.js";



const productosArray = [
    {
      id: '1',
      title: 'Samsung g10',
      price: 5000,
      stock: 7,
      description: 'Celular Negro',
    },
    {
      id: '2',
      title: 'Iphone 13',
      price: 15000,
      stock: 0,
      description: 'Celular Negro',
    },
    {
      id: '3',
      title: 'Samsung A10',
      price: 2500,
      stock: 12,
      description: 'Celular Negro',
    },
    {
      id: '4',
      title: 'LG G10',
      price: 2100,
      stock: 44,
      description: 'Celular Negro',
    },
    {
      id: '5',
      title: 'Samsung g10',
      price: 5000,
      stock: 7,
      description: 'Celular Negro',
    },
    {
      id: '6',
      title: 'Samsung g10',
      price: 5000,
      stock: 7,
      description: 'Celular Negro',
    },
    {
      id: '7',
      title: 'Samsung g10',
      price: 5000,
      stock: 7,
      description: 'Celular Negro',
    },
  ];
  

@Injectable()
export class ProductsService {
  private readonly productosArray: Product[] = productosArray;

  getAll(): Product[]{
    return this.productosArray;
  }

  getById(id: string): Product {
    const idProduct = this.productosArray.filter( product => product.id === id)[0];
      
    return idProduct
  }
}
