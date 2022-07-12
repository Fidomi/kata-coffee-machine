type Drink = 'T'|'C'|'H';
type Sugar = null | number;
export type Choice = {
  drink: Drink;
  sugar?: Sugar
}
interface OrderType {
  order : Choice;
}

export class Order implements OrderType {
  order: Choice;

  constructor(order: Choice) {
    this.order = order;
  }

  orderDisplay() {
    return `${this.order.drink}:${this.order.sugar ? this.order.sugar : ''}:${this.order.sugar ? 0 : ''}`;
  }
}
