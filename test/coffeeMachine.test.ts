import { Order } from '../src/coffeeMachine';

describe('Order', () => {
  // test('should return "T" if you ordered tea', () => {
  //   const order1 = new Order({ drink: 'T' });
  //   expect(order1.orderDisplay()).toBe('T::');
  // });
  // test('should return "C if you ordered coffee', () => {
  //   const order1 = new Order({ drink: 'C' });
  //   expect(order1.orderDisplay()).toBe('C::');
  // });
  // test('should return "H" if you ordered hot chocolate', () => {
  //   const order1 = new Order({ drink: 'H' });
  //   expect(order1.orderDisplay()).toBe('H::');
  // });
  // test('should return "T:1:0" if you ordered one tea and one sugar', () => {
  //   const order1 = new Order({ drink: 'T', sugar: 1 });
  //   expect(order1.orderDisplay()).toBe('T:1:0');
  // });
  // test('should return "C:2:0" if you ordered one coffee and two sugars', () => {
  //   const order1 = new Order({ drink: 'C', sugar: 2 });
  //   expect(order1.orderDisplay()).toBe('C:2:0');
  // });
  // test('should return "H::" if you ordered one chocolate without sugar', () => {
  //   const order1 = new Order({ drink: 'H' });
  //   expect(order1.orderDisplay()).toBe('H::');
  // });
  test('should return "H::" if you ordered one chocolate without sugar and enough money', () => {
    const order1 = new Order({ drink: 'H' }, 50);
    expect(order1.orderDisplay()).toBe('H::');
  });
  test('should return "C:2:0" if you ordered one coffee and two sugars and enough money', () => {
    const order1 = new Order({ drink: 'C', sugar: 2 }, 60);
    expect(order1.orderDisplay()).toBe('C:2:0');
  });
});
