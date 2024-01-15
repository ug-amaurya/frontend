import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food.model';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tag.model';
import { HttpClient } from '@angular/common/http';
import {
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
  FOOD_BY_ID_URL,
} from '../shared/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  fetchAllData(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.fetchAllData()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }

  // getAllFoodsBySearchTerm(searchTerm: string) {
  //   return this.fetchAllData().filter((food) =>
  //     food.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }
  // getAllTags(): Tag[] {
  //   return sample_tags;
  // }

  // getAllFoodsByTag(tag: string): Food[] {
  //   return tag === 'All'
  //     ? this.fetchAllData()
  //     : this.fetchAllData().filter((food) => food.tags?.includes(tag));
  // }
  // getFoodById(foodId: string): Food {
  //   return this.fetchAllData().find((food) => food.id == foodId) ?? new Food();
  // }
}
