import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  bookId: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  publisher: string;
  @Prop({ required: true })
  publishedDate: string;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  thumbnail: string;
  @Prop()
  images: [string];
}

export const BookSchema = SchemaFactory.createForClass(Book);
