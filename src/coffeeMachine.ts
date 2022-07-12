type Drink = 'T'|'C'|'H';
type Sugar = null | number;
export type Choice = {
  drink: Drink;
  sugar?: Sugar
}
interface OrderType {
  order : Choice;
  price : number;
  amountMoney : number;
}

export class Order implements OrderType {
  order: Choice;

  price : number;

  amountMoney : number;

  constructor(order: Choice, amountMoney : number) {
    this.order = order;
    this.price = this.findPrice(this.order.drink);
    this.amountMoney = amountMoney;
  }

  findPrice(drink : Drink) {
    if (drink === 'C') {
      return 0.6;
    } if (drink === 'T') {
      return 0.4;
    }
    return 0.5;
  }

  orderDisplay() {
    let isEnoughMoney = true;
    switch (this.order.drink) {
      case 'C':
        isEnoughMoney = this.amountMoney >= 60;
        break;
      case 'T':
        isEnoughMoney = this.amountMoney >= 40;
        break;
      default:
        isEnoughMoney = this.amountMoney >= 50;
    }
    const display = isEnoughMoney
      ? `${this.order.drink}:${this.order.sugar ? this.order.sugar : ''}:${this.order.sugar ? 0 : ''}`
      : '';
    return display;
  }
}
