class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }
  
  // Getter for the 'sqft' attribute
  get sqft() {
    return this._sqft;
  }
  
  // Abstract method that must be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
