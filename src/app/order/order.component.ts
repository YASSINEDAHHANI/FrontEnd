import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../Models/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    const orderId: number = Number(this.route.snapshot.paramMap.get('orderId'));
    this.orderService.getOrderDetails(orderId).subscribe(
      (order: Order) => {
        this.order = order;
        console.log("Order details:", order);
      },
      (error: any) => {
        console.error("Error fetching order details:", error);
      }
    );
  }
}
