function campusCup(emails) {
  const points = {
    100: 3,
    200: 8,
    300: 15,
    500: 25,
  }

  const scoreboard = {};
  function School() {
    this.points = 0;
    this.students = 0;
  };

  School.prototype.addStudent = function () {
    this.students++;
    this.points += 20;
  };

  School.prototype.getSpace = function () {
    if (this.points >= 500) {
      return points['500'];
    } else if (this.points >= 300) {
      return points['300'];
    } else if (this.points >= 200) {
      return points['200'];
    } else if (this.points >= 100) {
      return points['100'];
    } else {
      return 0;
    }
  };
  // regexp to extract school name
  let getSchool = /(?<=@)[\W\w]+$/ig;

  for (const email of emails) {
    let school = email.match(getSchool);
    if (school in scoreboard) {
      scoreboard[school].addStudent();
    } else {
      scoreboard[school] = new School();
      scoreboard[school].addStudent();
    }
  }

  let scores = [];
  for (const school in scoreboard) {
    scores.push([school, scoreboard[school].getSpace()]);
  }

  scores.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] === b[1]) {
      if (a[0].length >= b[0].length) {
        return 1;
      }
    }
    return -1;
  });

  let results = [];
  for (const score of scores) {
    results.push(score[0]);
  }

  return results;
}
