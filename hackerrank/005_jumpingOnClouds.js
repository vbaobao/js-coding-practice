/**
 * There is a new mobile game that starts with consecutively numbered clouds.
 * Some of the clouds are thunderheads and others are cumulus. The player
 * can jump on any cumulus cloud having a number that is equal to the number
 * of the current cloud plus  or . The player must avoid the thunderheads.
 * Determine the minimum number of jumps it will take to jump from the
 * starting postion to the last cloud. It is always possible to win the game.
 *
 * For each game, you will get an array of clouds numbered  if they are safe
 * or  if they must be avoided.
 */

function jumpingOnClouds(c) {
  let steps = 0;
  let index = 0;
  while (index < c.length - 1) {
    if (c[index + 2] !== 1) {
      steps++;
      index += 2;
    } else if (index + 2 < c.length) {
      steps++;
      index++;
    }
  }
  return steps;
}