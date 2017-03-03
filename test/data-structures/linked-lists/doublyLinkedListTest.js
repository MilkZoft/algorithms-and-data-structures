import '../../globalTest';
import DoublyLinkedList from '../../../src/data-structures/linked-Lists/DoublyLinkedList';

const List = new DoublyLinkedList();

describe('@DoublyLinkedList', () => {
  describe('#append', () => {
    it('should be a function', () => {
      assert.typeOf(List.append, 'function', 'append should be a function');
    });

    it('should add new element(s)', () => {
      List.append(15);
      List.append(10);
      List.append(13);
      List.append(11);
      List.append(12);

      console.log(cyan, 'Current List ========> ', green, List.print());

      // The queue should have 5 elements (length)
      const actualResult = List.size();
      const expectedResult = 5;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#insert', () => {
    it('should be a function', () => {
      assert.typeOf(List.insert, 'function', 'insert should be a function');
    });

    it('should insert at the beginning of the list', () => {
      // Inserting in position 0
      List.insert(0, 20);

      const actualResult = List.indexOf(20);
      const expectedResult = 0;

      console.log(cyan, 'Current List ========> ', green, List.print());

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#removeAt', () => {
    it('should be a function', () => {
      assert.typeOf(List.removeAt, 'function', 'removeAt should be a function');
    });

    it('should remove the element in position 4', () => {
      // Getting the first element
      const actualResult = List.removeAt(4);
      const expectedResult = 11;

      console.log(cyan, 'Current List ========> ', red, List.print());

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#remove', () => {
    it('should be a function', () => {
      assert.typeOf(List.remove, 'function', 'remove should be a function');
    });

    it('should remove a specific element', () => {
      // The queue has elements?
      const actualResult = List.remove(10);
      const expectedResult = 10;

      console.log(cyan, 'Current List ========> ', red, List.print());

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#indexOf', () => {
    it('should be a function', () => {
      assert.typeOf(List.indexOf, 'function', 'indexOf should be a function');
    });

    it('should return the position of the element', () => {
      // Getting the size of the actual queue
      const actualResult = List.indexOf(12);
      const expectedResult = 3;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#hasElements', () => {
    it('should be a function', () => {
      assert.typeOf(List.hasElements, 'function', 'hasElements should be a function');
    });

    it('should return true if the list has elements', () => {
      const actualResult = List.hasElements();
      const expectedResult = true;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#size', () => {
    it('should be a function', () => {
      assert.typeOf(List.size, 'function', 'size should be a function');
    });

    it('should return the current size of the queue', () => {
      // Getting the size of the actual list
      const actualResult = List.size();
      const expectedResult = 4;

      assert.isTrue(expectedResult === actualResult);
    });
  });

  describe('#print', () => {
    it('should be a function', () => {
      assert.typeOf(List.print, 'function', 'print should be a function');
    });

    it('should print the current list', () => {
      const actualResult = List.print();
      const expectedResult = '[0]20=>[1]15=>[2]13=>[3]12';

      assert.isTrue(expectedResult === actualResult);
    });
  });
});
