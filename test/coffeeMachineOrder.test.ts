import Order from '../src/coffeeMachineOrder';
import Choice from '../src/coffeeMachineChoice';

describe('Order', () => {
  test('should return "T" if you ordered tea', () => {
    const ORDER = new Order(new Choice('T'));
    expect(ORDER.orderDisplay()).toBe('T::');
  });
  test('should return "C if you ordered coffee', () => {
    const ORDER = new Order(new Choice('C'));
    expect(ORDER.orderDisplay()).toBe('C::');
  });
  test('should return "H" if you ordered hot chocolate', () => {
    const ORDER = new Order(new Choice('H'));
    expect(ORDER.orderDisplay()).toBe('H::');
  });
  test('should return "T:1:0" if you ordered one tea and one sugar', () => {
    const ORDER = new Order(new Choice('T', 1));
    expect(ORDER.orderDisplay()).toBe('T:1:0');
  });
  test('should return "C:2:0" if you ordered one coffee and two sugars', () => {
    const ORDER = new Order(new Choice('C', 2));
    expect(ORDER.orderDisplay()).toBe('C:2:0');
  });
  test('should return "H::" if you ordered one chocolate without sugar', () => {
    const ORDER = new Order(new Choice('H'));
    expect(ORDER.orderDisplay()).toBe('H::');
  });
});
