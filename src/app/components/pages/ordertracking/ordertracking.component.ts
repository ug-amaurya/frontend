import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.component.html',
  styleUrls: ['./ordertracking.component.css'],
})
export class OrdertrackingComponent implements OnInit {
  order!: Order;
  constructor(activatedRoute: ActivatedRoute, orderService: OrderService) {
    const params = activatedRoute.snapshot.params;
    if (!params['orderId']) return;

    orderService.trackOrderById(params['orderId']).subscribe((order) => {
      this.order = order;
    });
  }
  ngOnInit(): void {}
}
