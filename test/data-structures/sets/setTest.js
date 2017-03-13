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

      console.log(cyan, 'Current Set ========> ', green, set.getItems());

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

  describe('#size', () => {
    it('should be a function', () => {
      assert.typeOf(set.size, 'function', 'size should be a function');
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual list
      const actualResult = set.size();
      const expectedResult = 4;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#values', () => {
    it('should be a function', () => {
      assert.typeOf(set.values, 'function', 'values should be a function');
    });

    it('should return the current values in array', () => {
      const actualResult = set.values();
      const expectedResult = [1, 2, 3, 5];

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#clear', () => {
    it('should be a function', () => {
      assert.typeOf(set.clear, 'function', 'clear should be a function');
    });

    it('should clear the set', () => {
      set.clear();

      const actualResult = set.size();
      const expectedResult = 0;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#union', () => {
    it('should be a function', () => {
      assert.typeOf(set.union, 'function', 'union should be a function');
    });

    it('should return the union of two sets', () => {
      const setA = new Set();

      setA.add(1);
      setA.add(2);
      setA.add(3);

      const setB = new Set();

      setB.add(4);
      setB.add(5);
      setB.add(6);

      const unionAB = setA.union(setB);

      console.log(cyan, 'Current Set ========> ', green, unionAB.getItems());

      // The union set should have [1, 2, 3, 4, 5, 6]
      const actualResult = unionAB.values();
      const expectedResult = [1, 2, 3, 4, 5, 6];

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#intersection', () => {
    it('should be a function', () => {
      assert.typeOf(set.union, 'function', 'intersection should be a function');
    });

    it('should return the intersection of two sets', () => {
      const setA = new Set();

      setA.add(1);
      setA.add(2);
      setA.add(3);

      const setB = new Set();

      setB.add(2);
      setB.add(3);
      setB.add(4);

      const intersectionAB = setA.intersection(setB);

      console.log(cyan, 'Current Set ========> ', green, intersectionAB.getItems());

      // The intersection set should have [2, 3]
      const actualResult = intersectionAB.values();
      const expectedResult = [2, 3];

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#difference', () => {
    it('should be a function', () => {
      assert.typeOf(set.union, 'function', 'difference should be a function');
    });

    it('should return the difference of two sets', () => {
      const setA = new Set();

      setA.add(1);
      setA.add(2);
      setA.add(3);

      const setB = new Set();

      setB.add(2);
      setB.add(3);
      setB.add(4);

      const differenceAB = setA.difference(setB);

      console.log(cyan, 'Current Set ========> ', green, differenceAB.getItems());

      // The difference set should have [1]
      const actualResult = differenceAB.values();
      const expectedResult = [1];

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#subset', () => {
    it('should be a function', () => {
      assert.typeOf(set.union, 'function', 'subset should be a function');
    });

    it('should return the subset of two sets', () => {
      const setA = new Set();

      setA.add(1);
      setA.add(2);

      const setB = new Set();

      setB.add(1);
      setB.add(2);
      setB.add(3);

      const setC = new Set();

      setB.add(2);
      setB.add(3);
      setB.add(4);

      assert.isTrue(setA.subset(setB)); // Set A is subset of Set B (contains both values)
      assert.isFalse(setA.subset(setC)); // Set A is not subset of Set C (just contains 2)
    });
  });
});
