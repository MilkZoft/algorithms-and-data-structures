import '../../globalTest';
import Set from '../../../src/data-structures/sets/Set';

const set = new Set();

describe('@Set', () => {
  describe('#add', () => {
    it('should be a function', () => {
      assert.typeOf(set.add, 'function', 'add should be a function');
    });

    it('should add new element(s)', () => {
      set.add(1);
      set.add(2);
      set.add(3);
      set.add(4);
      set.add(5);

      console.log(cyan, 'Current Set ========> ', green, set.getItems());

      // The set should have 5 elements (length)
      const actualResult = set.size();
      const expectedResult = 5;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#delete', () => {
    it('should be a function', () => {
      assert.typeOf(set.delete, 'function', 'delete should be a function');
    });

    it('should delete an element', () => {
      const actualResult = set.delete(4);
      const expectedResult = true;

      console.log(cyan, 'Current List ========> ', green, set.getItems());

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#has', () => {
    it('should be a function', () => {
      assert.typeOf(set.has, 'function', 'has should be a function');
    });

    it('should validate if a set has an element', () => {
      // Getting the first element
      const actualResult = set.has(2);
      const expectedResult = true;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#clear', () => {
    it('should be a function', () => {
      assert.typeOf(set.clear, 'function', 'clear should be a function');
    });

    it('should clear the set', () => {
      // Getting the first element
      set.clear();

      const actualResult = set.size();
      const expectedResult = 0;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  /* describe('#values', () => {
    it('should be a function', () => {
      assert.typeOf(set.values, 'function', 'print should be a function');
    });

    it('should print the current list', () => {
      const actualResult = set.print();
      const expectedResult = '[0]20=>[1]15=>[2]13=>[3]12';

      assert.isTrue(expectedResult === actualResult);
    });
  }); */

  /* describe('#size', () => {
    it('should be a function', () => {
      assert.typeOf(set.size, 'function', 'size should be a function');
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual list
      const actualResult = set.size();
      const expectedResult = 4;

      assert.isTrue(expectedResult === actualResult);
    });
  }); */
});
