const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
  constructor(
    model,
    maxSpeed,
    maxFlightDistance,
    maxLoadCapacity,
    type,
    classificationLevel
  ) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this.type = type;
    this.classificationLevel = classificationLevel;
  }

  setModel(value) {
    this.model = value;
  }

  setMaxSpeed(value) {
    this.maxSpeed = value;
  }

  setMaxFlightDistance(value) {
    this.maxFlightDistance = value;
  }

  setMaxLoadCapacity(value) {
    this.maxLoadCapacity = value;
  }

  getType() {
    return this.type;
  }

  setType(value) {
    this.type = value;
  }

  getClassificationLevel() {
    return this.classificationLevel;
  }

  setClassificationLevel(value) {
    this._classificationLevel = value;
  }
}

module.exports = ExperimentalPlane;
