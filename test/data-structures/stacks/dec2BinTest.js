import '../../globalTest';
import dec2Bin from '../../../src/data-structures/stacks/dec2Bin';

describe('@Dec2Bin', () => {
  describe('#dec2Bin', () => {
    it('should be a function', () => {
      assert.typeOf(dec2Bin, 'function', 'dec2Bin should be a function');
    });

    it('should convert decimal number to binary', () => {
      assert.isTrue(dec2Bin(0)  ===    '0');
      assert.isTrue(dec2Bin(1)  ===    '1');
      assert.isTrue(dec2Bin(2)  ===   '10');
      assert.isTrue(dec2Bin(3)  ===   '11');
      assert.isTrue(dec2Bin(4)  ===  '100');
      assert.isTrue(dec2Bin(5)  ===  '101');
      assert.isTrue(dec2Bin(6)  ===  '110');
      assert.isTrue(dec2Bin(7)  ===  '111');
      assert.isTrue(dec2Bin(8)  === '1000');
      assert.isTrue(dec2Bin(9)  === '1001');
      assert.isTrue(dec2Bin(10) === '1010');
      assert.isTrue(dec2Bin(11) === '1011');
      assert.isTrue(dec2Bin(12) === '1100');
      assert.isTrue(dec2Bin(13) === '1101');
      assert.isTrue(dec2Bin(14) === '1110');
      assert.isTrue(dec2Bin(15) === '1111');
    });
  });
});
