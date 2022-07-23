import Order from './coffeeMachineOrder';
import { ChoiceType } from './coffeeMachineChoice';

class Cashier extends Order {
  private price : number;

  amountMoney : number;

  constructor(order: ChoiceType, amountMoney : number) {
    super(order);
    this.price = this.findPrice(order);
    this.amountMoney = amountMoney;
  }

  findPrice(order: ChoiceType) {
    if (order.drink === 'C' || order.drink === 'O') {
      return 60;
    } if (order.drink === 'T') {
      return 40;
    }
    return 50;
  }

  checkMoney() {
    let isEnoughMoney = true;
    switch (this.drink) {
      case 'C':
        isEnoughMoney = this.amountMoney >= 60;
        break;
      case 'O':
        isEnoughMoney = this.amountMoney >= 60;
        break;
      case 'T':
        isEnoughMoney = this.amountMoney >= 40;
        break;
      default:
        isEnoughMoney = this.amountMoney >= 50;
    }
    return isEnoughMoney;
  }

  messageDisplay() {
    return `M:Missing ${this.price - this.amountMoney} cents`;
  }

  checkOrder() {
    const isEnoughMoney = this.checkMoney();
    const display = isEnoughMoney
      ? this.orderDisplay()
      : this.messageDisplay();
    return display;
  }
}

export default Cashier;
