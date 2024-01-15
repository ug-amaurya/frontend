import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food.model';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent implements OnInit {
  food!: Food;
  constructor(
    public activatedRoute: ActivatedRoute,
    public foodService: FoodService,
    public cartService: CartService,
    public router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      foodService.getFoodById(params['id']).subscribe((serverFood) => {
        this.food = serverFood;
      });
    });
  }
  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
