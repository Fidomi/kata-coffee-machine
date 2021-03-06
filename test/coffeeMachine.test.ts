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
  test('should return "T::" if you ordered one tea and give 40 cents', () => {
    const order1 = new Order({ drink: 'T' }, 40);
    expect(order1.orderDisplay()).toBe('T::');
  });
  test('should return "M:Missing 20 cents" if you ordered one tea and give 20 cents', () => {
    const order1 = new Order({ drink: 'T' }, 20);
    expect(order1.orderDisplay()).toBe('M:Missing 20 cents');
  });
  test('should return "O::" if you ordered orange juice', () => {
    const order1 = new Order({ drink: 'O' }, 60);
    expect(order1.orderDisplay()).toBe('O::');
  });
  test('should return "Th:2:0" if you ordered extra hot tea with 2 sugars', () => {
    const order1 = new Order({ drink: 'T', sugar: 2 }, 60, true);
    expect(order1.orderDisplay()).toBe('Th:2:0');
  });
  test('should return "Hh:1:0" if you ordered extra hot tea with 1 sugar', () => {
    const order1 = new Order({ drink: 'H', sugar: 1 }, 60, true);
    expect(order1.orderDisplay()).toBe('Hh:1:0');
  });
});
