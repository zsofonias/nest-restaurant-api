import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schema';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  //   Get all restaurants => GET /restaurants
  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  //   Get restaurant by Id => GET /restaurants/:id
  @Get(':id')
  async getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  //   Create new Restaurant => POST /restaurants
  @Post()
  async createResaturant(
    @Body() restaurant: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(restaurant);
  }

  //   Update restaurant by Id => PATCH /restaurants/:id
  @Patch(':id')
  async upddateRestaurantById(
    @Param('id') id: string,
    @Body() restaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.upddatById(id, restaurantDto);
  }

  //   Delete restaurant by Id => DELETE /restaurants/:id
  @Delete(':id')
  async deleteRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.deleteById(id);
  }
}
