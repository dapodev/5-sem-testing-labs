const assert = require('chai').assert;

const MilitaryPlane = require('../planes/militaryPlane');
const PassengerPlane = require('../planes/passengerPlane');
const ExperimentalPlane = require('../Planes/ExperimentalPlane');
const Airport = require('../airport');
const MilitaryType = require('../models/MilitaryType');
const ExperimentalTypes = require('../models/experimentalType');
const ClassificationLevel = require('../models/ClassificationLevel');

describe('Planes test', () => {
  const planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
    new MilitaryPlane(
      'B-52 Stratofortress',
      1000,
      20000,
      80000,
      MilitaryType.BOMBER
    ),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
    new MilitaryPlane(
      'C-130 Hercules',
      650,
      5000,
      110000,
      MilitaryType.TRANSPORT
    ),
    new ExperimentalPlane(
      'Bell X-14',
      277,
      482,
      500,
      ExperimentalTypes.HIGH_ALTITUDE,
      ClassificationLevel.SECRET
    ),
    new ExperimentalPlane(
      'Ryan X-13 Vertijet',
      560,
      307,
      500,
      ExperimentalTypes.VTOL,
      ClassificationLevel.TOP_SECRET
    ),
  ];

  const planeWithMaxPassengerCapacity = new PassengerPlane(
    'Boeing-747',
    980,
    16100,
    70500,
    242
  );

  it('should have military planes with transport type', () => {
    const airport = new Airport(planes);
    const transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
    const isOnlyMilitaries =
      transportMilitaryPlanes.filter(
        (plane) => plane.getMilitaryType() !== MilitaryType.TRANSPORT
      ).length === 0;
    assert.equal(isOnlyMilitaries, true);
  });

  it('should check passenger plane with max capacity', () => {
    const airport = new Airport(planes);
    const actualPlaneWithMaxPassengersCapacity =
      airport.getPassengerPlaneWithMaxPassengersCapacity();
    assert.isTrue(
      actualPlaneWithMaxPassengersCapacity.model ==
        planeWithMaxPassengerCapacity.model
    );
  });

  it('check sort by load capacity', () => {
    const airport = new Airport(planes);
    airport.sortByMaxLoadCapacity();
    const planesSortedByMaxLoadCapacity = airport.getPlanes();
    let isProperlySorted = true;
    for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
      const currentPlane = planesSortedByMaxLoadCapacity[i];
      const nextPlane = planesSortedByMaxLoadCapacity[i + 1];
      if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
        isProperlySorted = false;
        break;
      }
    }
    assert.isTrue(isProperlySorted);
  });

  it('check has at least one bomber in military planes', () => {
    const airport = new Airport(planes);
    const bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();
    const hasAtLeastOneBomber =
      bomberMilitaryPlanes.filter(
        (plane) => plane.getMilitaryType() === MilitaryType.BOMBER
      ).length > 0;
    assert.isTrue(hasAtLeastOneBomber);
  });

  it('should check that experimentsl planes has classification level higher than unclassified', () => {
    const airport = new Airport(planes);
    const experementalPlanes = airport.getExperimentalPlanes();
    const hasUnclassifiedPlanes =
      experementalPlanes.filter(
        (plane) =>
          plane.classificationLevel === ClassificationLevel.UNCLASSIFIED
      ).length !== 0;

    assert.isFalse(hasUnclassifiedPlanes);
  });
});
