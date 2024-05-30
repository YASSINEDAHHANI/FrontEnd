import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../Models/Order';
import { OrderService } from '../order.service';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:any =[];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    public appstate: AppStateService
  ) { }

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('orderId'));
   
    this.orderService.getOrdersByUser(this.appstate.UsesState.UserId).subscribe(
      (order: Order) => {
        this.orders= order
      },
      (error: any) => {
        console.error("Error fetching order details:", error);
      }
    );
}
}
