const PassengerPlane = require('./planes/passengerPlane');
const MilitaryPlane = require('./planes/militaryPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const MilitaryType = require('./models/militaryType');

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    return this.getPassengerPlanes().reduce((maxCapacityPlane, plane) =>
      plane.getPassengersCapacity() > maxCapacityPlane.getPassengersCapacity()
        ? plane
        : maxCapacityPlane
    );
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TRANSPORT
    );
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.BOMBER
    );
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
  }

  sortByMaxDistance() {
    this.planes.sort(
      (a, b) => a.getMaxFlightDistance() - b.getMaxFlightDistance()
    );
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => a.getMaxSpeed() - b.getMaxSpeed());
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => a.getMaxLoadCapacity() - b.getMaxLoadCapacity());
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static getJsonPlanes(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
