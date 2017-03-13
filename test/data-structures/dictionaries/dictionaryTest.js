import '../../globalTest';
import Dictionary from '../../../src/data-structures/dictionaries/Dictionary';

const dictionary = new Dictionary();

describe('@Dictionary', () => {
  describe('#set', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.set, 'function', 'set should be a function');
    });

    it('should set new element(s)', () => {
      dictionary.set('Carlos', 'carlos@gmail.com');
      dictionary.set('Cristina', 'cristina@gmail.com');
      dictionary.set('Javier', 'javier@gmail.com');

      console.log(cyan, 'Current Dictionary ========> ', green, dictionary.getItems());

      // The set should have 3 elements (length)
      const actualResult = dictionary.size();
      const expectedResult = 3;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#delete', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.delete, 'function', 'delete should be a function');
    });

    it('should delete an element', () => {
      const actualResult = dictionary.delete('Cristina');
      const expectedResult = true;

      console.log(cyan, 'Current Dictionary ========> ', green, dictionary.getItems());

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#has', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.has, 'function', 'has should be a function');
    });

    it('should validate if a set has an element', () => {
      // Getting the first element
      const actualResult = dictionary.has('Carlos');
      const expectedResult = true;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#size', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.size, 'function', 'size should be a function');
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual list
      const actualResult = dictionary.size();
      const expectedResult = 2;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#get', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.get, 'function', 'get should be a function');
    });

    it('should return the selected element', () => {
      const actualResult = dictionary.get('Javier');
      const expectedResult = 'javier@gmail.com';

      console.log(cyan, 'Get ========> ', green, actualResult);

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#values', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.values, 'function', 'values should be a function');
    });

    it('should return the current values in array', () => {
      const actualResult = dictionary.values();
      const expectedResult = ['carlos@gmail.com', 'javier@gmail.com'];

      console.log(cyan, 'Values ========> ', green, actualResult);

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#keys', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.keys, 'function', 'keys should be a function');
    });

    it('should return the current keys in array', () => {
      const actualResult = dictionary.keys();
      const expectedResult = ['Carlos', 'Javier'];

      console.log(cyan, 'Keys ========> ', green, actualResult);

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#clear', () => {
    it('should be a function', () => {
      assert.typeOf(dictionary.clear, 'function', 'clear should be a function');
    });

    it('should clear the dictionary', () => {
      dictionary.clear();

      const actualResult = dictionary.size();
      const expectedResult = 0;

      assert.isTrue(expectedResult === actualResult);
    });
  });
});
