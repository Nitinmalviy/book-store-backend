import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  get() {
    return this.booksService.get();
  }

  @Post()
  create() {
    return this.booksService.create();
  }

  @Delete(':id')
  delete() {
    return this.booksService.delete();
  }

  @Put(':id')
  update() {
    return this.booksService.update();
  }
}
