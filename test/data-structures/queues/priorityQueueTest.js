import '../../globalTest';
import PriorityQueue from '../../../src/data-structures/queues/PriorityQueue';

const {
  enqueue,
  dequeue,
  front,
  hasElements,
  size,
  clear,
  print
} = new PriorityQueue();

describe('@PriorityQueue', () => {
  describe('#enqueue', () => {
    it('should be a function', () => {
      assert.typeOf(enqueue, 'function', 'enqueue should be a function');
    });

    it('should add new element(s) with priority', () => {
      // Adding new people
      enqueue('Carlos', 3);   // [2]
      enqueue('Cristina', 1); // [0]
      enqueue('Jona', 5);     // [4]
      enqueue('Javier', 2);   // [1]
      enqueue('Sam', 4);      // [3]

      /*
      [
        QueueElement { element: 'Cristina', priority: 1 }, [0]
        QueueElement { element: 'Javier', priority: 2 },   [1]
        QueueElement { element: 'Carlos', priority: 3 },   [2]
        QueueElement { element: 'Sam', priority: 4 },      [3]
        QueueElement { element: 'Jona', priority: 5 }      [4]
      ]
      */

      // The queue should have 5 elements (length)
      const actualResult = size();
      const expectedResult = 5;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#dequeue', () => {
    it('should be a function', () => {
      assert.typeOf(dequeue, 'function', 'dequeue should be a function');
    });

    it('should remove and return the first element', () => {
      // Removing the first element
      const actualResult = dequeue();
      const expectedResult = {
        element: 'Cristina',
        priority: 1
      };

      assert.isTrue(size() === 4); // The size now should be 4
      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#front', () => {
    it('should be a function', () => {
      assert.typeOf(front, 'function', 'front should be a function');
    });

    it('should return the first element', () => {
      // Getting the first element
      const actualResult = front();
      const expectedResult = {
        element: 'Javier',
        priority: 2
      };

      assert.deepEqual(expectedResult, actualResult, 'expectedResult should match actualResult');
    });
  });

  describe('#hasElements', () => {
    it('should be a function', () => {
      assert.typeOf(hasElements, 'function', 'hasElements should be a function');
    });

    it('should return true if the queue has elements', () => {
      // The queue has elements?
      const actualResult = hasElements();
      const expectedResult = true;

      assert.isTrue(expectedResult === actualResult); // The queue has elements!
    });
  });

  describe('#size', () => {
    it('should be a function', () => {
      assert.typeOf(size, 'function', 'size should be a function');
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual queue
      const actualResult = size();
      const expectedResult = 4;

      assert.isTrue(expectedResult === actualResult); // The queue has 4 elements!
    });
  });

  describe('#clear', () => {
    it('should be a function', () => {
      assert.typeOf(clear, 'function', 'clear should be a function');
    });

    it('should clear the queue', () => {
      // Clear queue
      clear();

      const actualResult = size();
      const expectedResult = 0;

      assert.isTrue(expectedResult === actualResult); // The queue has 0 elements!
    });
  });

  describe('#print', () => {
    it('should be a function', () => {
      assert.typeOf(print, 'function', 'print should be a function');
    });

    it('should print the current queue', () => {
      // Adding new elements
      enqueue(10, 2);
      enqueue(20);
      enqueue(30);

      const actualResult = print();
      const expectedResult = '20-1|30-1|10-2';

      assert.isTrue(expectedResult === actualResult); // The new queue is [10, 20, 30]
    });
  });
});
