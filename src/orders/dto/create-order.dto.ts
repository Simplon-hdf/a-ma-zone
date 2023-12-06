export class CreateOrderDto {
  order_number: string;
  order_total_cost_ht: number;
  order_total_quantity: number;
  created_at: Date;
  delivrer_at: Date;
  User_UUID: string;
}
