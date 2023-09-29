class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    // Verify and set the name attribute
    this.name = name;

    // Verify and set the length attribute
    this.length = length;

    // Verify and set the students attribute
    this.students = students;
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
