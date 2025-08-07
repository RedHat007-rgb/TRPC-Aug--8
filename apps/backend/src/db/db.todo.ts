import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { values, StatusType } from '@repo/shared';

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
  status: StatusType;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
