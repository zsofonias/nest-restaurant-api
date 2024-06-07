import { CategoryEnum } from '../schemas/restaurant.schema';

export class UpdateRestaurantDto {
  readonly name: string;

  readonly description: string;

  readonly email: string;

  readonly phonenumber: string;

  readonly address: string;

  readonly category: CategoryEnum;
}
