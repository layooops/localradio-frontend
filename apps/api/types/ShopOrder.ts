import type { OrderItems } from './components/OrderItems';

export interface ShopOrder {
  id: number;
  attributes: {
    email: string;
    firstName: string;
    phone: string;
    city: string;
    address: string;
    postcode: string;
    lastName?: string;
    items: OrderItems[];
    status?:
      | 'created'
      | 'payment_success'
      | 'cancelled'
      | 'on_the_way'
      | 'delivered'
      | 'pickup_arrived'
      | 'pickuped'
      | 'delivery_arrived'
      | 'delivered_finish'
      | 'refunded';
  };
}
