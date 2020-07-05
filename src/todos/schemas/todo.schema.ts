import {Document} from "mongoose";
import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Todo extends Document {
  @Prop({
    required: true
  })
  readonly title: string;

  @Prop({
    default: false,
    required: false
  })
  readonly done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
