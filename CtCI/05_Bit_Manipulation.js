/**
 * Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and j.
 * Write a method to insert M into N such that M starts at bit j and ends at bit i.
 * You can assume that the bits j through i have enough space to fit all of M.
 * That is, if M=10011, you can assume that here are at least 5 bits between j and i. You
 * will not, for example, have j=3 and i=2, because M could not fully fit between bit 3 and bit 2.
 */

const insertion = (N, M, i, j) => {
  // Make a list of 0 to j, & shift ~(0 << i)
  // On N, clear position from j to i by N | above num
  // M shift by remaining bits
  // return num | shifted M
  let result = ~(~(0 << j) << j - i) << i;
  result = N & ~result;
  let join = M << j - i;
  return result | join;
};

/**
 * binaryToString: given a real number between 0 and 1 (e.g. 0.72) that is passed
 * in as a double, print the binary representation. If the number cannot be
 * represented accurately in binary with at most 32 characters, print "ERROR".
 */

const binaryToString = () => {};

/**
 * flipBitToWin: you have an integer and you can flip exactly one bit from a 0 to a 1.
 * Write code to find the length of the longest sequence of 1s you could create.
 */

const flipBitToWin = () => {};

/**
 * nextNumber: given a positive integer, print the next smallest and the next largest
 * number that have the same number of 1 bits in their binary representation.
 */

const nextNumber = () => {};

/** Debugger: Explain what the follow code does: ((n & (n - 1)) == 0) */

/**
 * Answer:
 */

/**
 * conversion: write a function to determine the number of bits you would need to flip
 * to convert integer A to integer B.
 */

const conversion = () => {};

/**
 * pairwiseSwap: write a program to swap odd and even bits in an integer with as few
 * instructions as possible (e.g. bit 1 and bit 2 are swapped, bit 2 and bit 3 are
 * swapped, and so on).
 */

const pairwiseSwap = () => {};

/**
 * drawLine: a monochrome screen is stored as a single array of bytes, allowing eight
 * consecutive pixels to be stored in one byte. The screen has width w, where w is divisible
 * by 8 (that is, no byte will be split across rows). The height of the screen, of course, can
 * be derived from the length of the array and the width. Implement a function that draws a
 * horizontal line from (x1, y) to (x2, y).
 * 
 * The method signature should look something like:
 * drawLine(byte[] screen, int width, int x1, int x2, int y)
 */

const drawLine = () => {};
