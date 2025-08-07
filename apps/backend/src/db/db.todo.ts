import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status, values } from '@repo/shared';

@Schema()
export class Todo extends Document {
  @Prop({
    required: true,
  })
  title: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
    enum: values,
  })
  status: Status;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
