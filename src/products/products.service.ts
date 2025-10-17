import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createDto,
    });
  }

  findAll() {
    return this.prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
