class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    // Verify and set the code attribute
    this.code = code;

    // Verify and set the name attribute
    this.name = name;
  }

  // Getter and setter for the 'code' attribute
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
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

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
