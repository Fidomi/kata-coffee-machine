import Cashier from '../src/coffeeMachineCashier';
import Choice from '../src/coffeeMachineChoice';
import Order from '../src/coffeeMachineOrder';

describe('Cashier', () => {
  test('should return "H::" if you ordered one chocolate without sugar and enough money', () => {
    const CHOICE = new Choice('H');
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 50);
    expect(CASHIER.checkOrder()).toBe('H::');
  });
  test('should return "C:2:0" if you ordered one coffee and two sugars and enough money', () => {
    const CHOICE = new Choice('C', 2);
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 60);
    expect(CASHIER.checkOrder()).toBe('C:2:0');
  });
  test('should return "T::" if you ordered one tea and give 40 cents', () => {
    const CHOICE = new Choice('T');
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 40);
    expect(CASHIER.checkOrder()).toBe('T::');
  });
  test('should return "M:Missing 20 cents" if you ordered one tea and give 20 cents', () => {
    const CHOICE = new Choice('T');
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 20);
    expect(CASHIER.checkOrder()).toBe('M:Missing 20 cents');
  });
  test('should return "O::" if you ordered orange juice', () => {
    const CHOICE = new Choice('O');
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 60);
    expect(CASHIER.checkOrder()).toBe('O::');
  });
  test('should return "Th:2:0" if you ordered extra hot tea with 2 sugars', () => {
    const CHOICE = new Choice('T', 2, true);
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 60);
    expect(CASHIER.checkOrder()).toBe('Th:2:0');
  });
  test('should return "Hh:1:0" if you ordered extra hot tea with 1 sugar', () => {
    const CHOICE = new Choice('H', 1, true);
    const ORDER = new Order(CHOICE);
    const CASHIER = new Cashier(ORDER, 60);
    expect(CASHIER.checkOrder()).toBe('Hh:1:0');
  });
});
