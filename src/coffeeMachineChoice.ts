type Drink = 'T'|'C'|'H'|'O';
type Sugar = null | number;

export interface ChoiceType {
  drink: Drink;
  sugar: Sugar;
  isExtraHot : boolean ;
}

class Choice implements ChoiceType {
  drink: Drink;

  sugar: Sugar;

  isExtraHot : boolean;

  constructor(drink: Drink, sugar: Sugar = null, isExtraHot : boolean = false) {
    this.drink = drink;
    this.sugar = sugar;
    this.isExtraHot = isExtraHot;
  }
}

export default Choice;
