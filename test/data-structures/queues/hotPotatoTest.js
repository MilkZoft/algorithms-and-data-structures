import '../../globalTest';
import HotPotato from '../../../src/data-structures/queues/HotPotato';

describe('@HotPotato', () => {
  describe('#HotPotato', () => {
    it('should be a function', () => {
      assert.typeOf(HotPotato, 'function', 'HotPotato should be a function');
    });

    it('should get a winner from the hot potato game', () => {
      // HotPotato Players
      const players = ['Carlos', 'Cristina', 'Javier', 'Jona', 'Sam'];

      // The winner is...
      const actualResult = HotPotato(players, 7);
      const expectedResult = 'Carlos';

      assert.isTrue(expectedResult === actualResult);
    });
  });
});
