import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Restaurant } from './schemas/restaurant.schema';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  //   Get all restaurants => GET /restaurants
  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantModel.find();
    return restaurants;
  }

  //   Get restaurant by Id => GET /restaurants/:id
  async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found.');
    }

    return restaurant;
  }

  //   Create new Restaurant => POST /restaurants
  async create(restaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    // const createdRestaurant = new this.restaurantModel(restaurantDto);
    // return createdRestaurant.save();

    return await this.restaurantModel.create(restaurantDto);
  }

  //   Update restaurant by Id => PATCH /restaurants/:id
  async upddatById(
    id: string,
    restaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findByIdAndUpdate(
      id,
      restaurantDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found.');
    }

    return restaurant;
  }

  //   Delete restaurant by Id => DELETE /restaurants/:id
  async deleteById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findByIdAndDelete(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return restaurant;
  }
}
