import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getBooks() {
    try {
      await this.bookModel.find({});
      return `Fetch book successfully`;
    } catch (error) {
      console.error(`Error`, error);
    }
  }

  async get() {
    try {
      await this.bookModel.find({});
      return `Fetch book successfully`;
    } catch (error) {
      console.error(`Error`, error);
    }
  }

  async create() {
    try {
      await this.bookModel.find({});
      return `Insert book successfully`;
    } catch (error) {
      console.error(`Error`, error);
    }
  }

  async delete() {
    try {
      await this.bookModel.find({});
      return `Delete book successfully`;
    } catch (error) {
      console.error(`Error`, error);
    }
  }

  async update() {
    try {
      await this.bookModel.find({});
      return `Update book successfully`;
    } catch (error) {
      console.error(`Error`, error);
    }
  }
}
