import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productosArray: ProductsService){}

    @Get()
    async getProducts(): Promise<Product[]>{
        return this.productosArray.getAll();
    }

    @Get(":id")
    async getProduct(@Param() params): Promise<Product>{
        return this.productosArray.getById(params.id);
    }

}
