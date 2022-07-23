import Choice, { ChoiceType } from './coffeeMachineChoice';

class Order extends Choice {
  private touillette : boolean;

  constructor(choice: ChoiceType) {
    super(choice.drink, choice.sugar, choice.isExtraHot);
    this.touillette = !!this.sugar;
  }

  orderDisplay() {
    const DRINKNAME = this.isExtraHot ? `${this.drink}h` : `${this.drink}`;
    const SUGAR = this.sugar ? this.sugar : '';
    const TOUILLETTE = this.touillette ? 0 : '';
    const DISPLAY = `${DRINKNAME}:${SUGAR}:${TOUILLETTE}`;
    return DISPLAY;
  }
}

export default Order;
