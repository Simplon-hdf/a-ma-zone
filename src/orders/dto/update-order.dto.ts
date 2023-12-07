import { IsOptional } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends CreateOrderDto {
    @IsOptional()
    public order_number: string;
    @IsOptional()
    public order_total_cost_ht: number;
    @IsOptional()
    public order_total_quantity: number;
    @IsOptional()
    public created_at: Date;
    @IsOptional()
    public delivrer_at: Date;
}
