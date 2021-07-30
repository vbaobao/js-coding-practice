/**
 * Given an array of meeting time intervals where
 * intervals[i] = [starti, endi], determine if a
 * person could attend all meetings.
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

let canAttendMeetings = function(intervals) {
  let max = 0;
  for (const interval of intervals) {
    if (interval[1] > max) max = interval[1];
  }
  const times = new Array(max);
  for (const interval of intervals) {
    for (let i = interval[0]; i < interval[1]; i++) {
      if (times[i] === 1) return false;
      times[i] = 1;
    }
  } 
  return true;
};