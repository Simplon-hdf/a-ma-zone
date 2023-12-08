import { IsOptional } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends CreateOrderDto {
    @IsOptional()
    public order_number: number;
    @IsOptional()
    public order_total_cost_ht: number;
    @IsOptional()
    public order_total_quantity: number;
}
