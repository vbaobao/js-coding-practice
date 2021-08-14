/**
 * The heavy pill: You have 20 bottles of pills. 19 bottles have 1.0 gram pills
 * but one has pills of weight 1.1 grams. Given a scale that provides an exact
 * measurement, how would you find the heavy bottle? You can only use the scale once.
 * 
 * Answer: From each bottle remove a pill matching the bottle number. Predict the total
 * weight if each pill removed were 1 gram. Subtract the expected from actual weight.
 * The remaining grams is the bottle number. Each pill of extra weight is 0.1g extra.
 */

/**
 * Basketball: You have a basketball hoop and someone says that you
 * can play one of the two games.
 * 
 * Game 1: You get one shot to make the hoop.
 * Game 2: You get three shots and you have to make 2 of 3 shots.
 * 
 * If p is the probability of making a particular shot, for which
 * values of p should you pick one game or the other?
 * 
 * Answer: For first shot, if the probability is over 0.5, then game 1. If probability
 * is lower than that, then game 2. Probability of game one is 0.5, while
 * game 2, the first shot can be successful or not. The following shots then must
 * be successful.
 */

/**
 * Dominos: There is an 8x8 chessboard in which two diagonally opposite
 * corners have been cut off. You are given 31 dominos, and a single
 * domino can cover exactly two squares. Can you use the 31 dominos to
 * cover the entire board? Prove your answer (by providing an example or
 * showing why it's impossible.)
 * 
 * It is impossible, as there are now 4 rows with odd numbered row or column.
 * Trying to account for that makes it impossible to fit dominoes in without
 * leaving one block out.
 */

/**
 * Ants on a triangle: There are three ants on different verticies of a
 * triangle. What is the probability of collision (between any two or all
 * of them) if they start walking on the sides of the triangle? Assume
 * that each ant randomly picks a direction, with either direction being
 * equally likely to be chosen, and that they walk at the same speed.
 * Similarly, find the probability of collision with n ants on an n-vertex polygon.
 * 
 * 2/2 * 1/2 * 1/2 = chances of them walking all in ther same direction
 * 2/2 * 1/2 * 1/2 = chances of two walking in the same direction and one in opposite
 * No chance of all three collision at the same time, but can still cross.
 * 
 * n ants with n sides. P = (1/n)^(n-1)
 */

/**
 * Jugs of water: You have a five-quart jug, a three-quart jug, and an
 * unlimited supply of water (but no measuring cups). How would you come up
 * with exactly four quarts of water? Note, that the jugs are oddly shaped,
 * such that filling up exactly "half" of the jug would be impossible.
 * 5 - 3 = 2 And repeat.
 * Pour water into the 5 quart jug. Pour 5 quart into 3 quarts
 * until 3 quarts is full. We now have 2 quarts in the 5 quart.
 * Empty 3 quart, fill with 2 quart.
 * Fill 5 quart, pour into 3 quart.
 * 5 quart now has 4 quarts.
 */

/**
 * Blue eyed island: A bunch of people are living on an island, when a
 * visitor comes with a strange order: blue eyed people must leave the
 * island as soon as possible. There will be a flight out at 8pm every
 * evening. Each person can see everyone else's eye color, but they do
 * not know their own (nor is anyone allowed to tell them). Additionally,
 * they do not know how many people have blue eyes, although they do
 * know that at least one person does. How many days will it take the
 * blue-eyed people to leave?
 * 
 * The book solution doesn't really make sense. Their solution assumes that
 * if there is no one on the island with blue eyes, then the observing person
 * the one with blue eyes.
 * 
 * But this doesn't work with two people or more. This is because the number
 * of blue eyed people is not known.
 */

/**
 * The apocalypse: In the new post-apocalyptic world, the world queen
 * is desperately concerned about the birth rate. Therefore, she
 * decrees that all families should ensure that they have one girl or
 * else they face massive fines. If all families abide by this policy
 * - that is, they have to continue to have children until they have
 * one girl, at which point they immediately stop - what will the gender
 * ratio of the new generation be?  (Assume that the odds of someone
 * having a boy or girl on any given pregnancy is equal.) Solve this
 * out logically and then write a computer simulation of it.
 * 
 * 1 -> G ===> P -> 0.5
 * 2 -> B-> G ===> P -> 0.5 * 0.5 = 0.25
 * 3 -> B -> B -> G ===> P -> 0.5 * 0.5 * 0.5 = 0.125
 * 
 * Logarithmic velocity of probability
 */

/**
 * The egg drop problem: There is a building of 100 floors. If an
 * egg drops from the Nth floor or above, it will break. If it's
 * dropped from any floor below, it will not break. You're given
 * two eggs. Find N, while minimizing the number of drops for the
 * worst case.
 * 
 * Drop both eggs. One egg at floor 1 and another at floor 2.
 * each egg increments by 2 floors until either the first or second one breaks.
 * If the first one breaks, no need to drop the second egg.
 * At worse the eggs will need to be dropped N/2 times if they only break at
 * the maximum floor.
 */

/**
 * 100 Lockers: There are 100 closed lockers in a hallway. A man begins by
 * opening all 100 lockers. Next, he closes every second locker. Then, on
 * his third pass, he toggles every third locker (closes it if it is open
 * or opens it if it is closed). This process continues for 100 passes, such
 * that on each pass i, the man toggles every ith locker. After his 100th
 * pass in the hallway, in which he toggles only locker #100, how many
 * lockers are open.
 * 
 * Numbers with even factors will be closed, and odd factor will be open.
 * Square root of x will be the number of open lockers.
 */

/**
 * Poison: You have 1000 bottles of soda, and exactly one is poisoned. You
 * have 10 test strips which can be used to detect poison. A single drop of
 * poison will turn the test strip positive permanently. You can put any
 * number of drops on a test strip at once and you can reuse a test strip
 * as many times as you'd like (as long as the results are negative). However,
 * you can only run tests once per day and it takes seven days to return a
 * result. How would you figure out the poisoned bottle in as few days as possible?
 * 
 * Follow up: Write code to simulate approach.
 */
