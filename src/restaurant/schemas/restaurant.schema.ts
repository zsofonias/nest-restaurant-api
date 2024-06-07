import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum CategoryEnum {
  FAST_FOOD = 'Fast Food',
  CAFE = 'Cafe',
  FINE_DINNING = 'Fine Dinning',
}

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  phonenumber: string;

  @Prop()
  address: string;

  @Prop()
  category: CategoryEnum;

  @Prop()
  images?: object[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
