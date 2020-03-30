const Joi = require('@hapi/joi');

module.exports = {
  communities: Joi.object({
    id: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    age: Joi.number(),
    sex: Joi.string(),
    language: Joi.string(),
    region: Joi.string(),
    subcityOrZone: Joi.string(),
    sefer: Joi.string(),
    woreda: Joi.string(),
    kebele: Joi.string(),
    houseNo: Joi.string(),
    phoneNo: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    fever: Joi.boolean(),
    cough: Joi.boolean(),
    shortnessOfBreath: Joi.boolean(),
    formStatus: Joi.string(),
    travelHx: Joi.boolean(),
    haveSex: Joi.boolean(),
    animalMarket: Joi.boolean(),
    healthFacility: Joi.boolean(),
    occupation: Joi.string(),
    dataSource: Joi.string(),
  }),
  passengers: {
    id: Joi.string(),
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    gender: Joi.string(),
    dateOfBirth: Joi.date(),
    nationality: Joi.string(),
    passportNo: Joi.string(),
    travelFrom: Joi.string(),
    phoneNo: Joi.string(),
    hotelName: Joi.string(),
    flightNumber: Joi.string(),
    seatNumber: Joi.string(),
    transitFrom: Joi.string(),
    fever: Joi.boolean(),
    shortnessOfBreath: Joi.boolean(),
    cough: Joi.boolean(),
    dependents: Joi.array().items(
      Joi.object({
        firstName: Joi.string(),
        middleName: Joi.string(),
        lastName: Joi.string(),
        gender: Joi.string(),
        dateOfBirth: Joi.date(),
        nationality: Joi.string(),
        passportNo: Joi.string(),
        seatNumber: Joi.string(),
        fever: Joi.boolean(),
        shortnessOfBreath: Joi.boolean(),
        cough: Joi.boolean(),
        travelFrom: Joi.string(),
        transitFrom: Joi.string(),
        phoneNo: Joi.string(),
        flightNumber: Joi.string(),
        selectedLanguage: Joi.string(),
      })
    ),
    otherHotelName: Joi.string(),
    email: Joi.string().email(),
    language: Joi.string(),
  },
  'medical-facilities': {
    id: Joi.string(),
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    nationality: Joi.string(),
    email: Joi.string(),
    sex: Joi.string(),
    age: Joi.number(),
    region: Joi.string(),
    subcity: Joi.string(),
    zone: Joi.string(),
    woreda: Joi.string(),
    kebele: Joi.string(),
    houseNumber: Joi.string(),
    phoneNumber: Joi.string(),
    occupation: Joi.string(),
    callDate: Joi.date(),
    callerType: Joi.string(),
    fever: Joi.boolean(),
    cough: Joi.boolean(),
    headache: Joi.boolean(),
    runnyNose: Joi.boolean(),
    feelingUnwell: Joi.boolean(),
    shortnessOfBreath: Joi.boolean(),
    bodyPain: Joi.boolean(),
    travelHx: Joi.boolean(),
    haveSex: Joi.boolean(),
    animalMarket: Joi.boolean(),
    healthFacility: Joi.boolean(),
    receiverName: Joi.string(),
    source: Joi.string(),
    formStatus: Joi.string(),
  },
  surveillance: {
    id: Joi.string(),
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    nationality: Joi.string(),
    email: Joi.string(),
    sex: Joi.string(),
    age: Joi.number(),
    region: Joi.string(),
    subcity: Joi.string(),
    zone: Joi.string(),
    woreda: Joi.string(),
    kebele: Joi.string(),
    houseNumber: Joi.string(),
    phoneNumber: Joi.string(),
    occupation: Joi.string(),
    callDate: Joi.date(),
    callerType: Joi.string(),
    fever: Joi.boolean(),
    cough: Joi.boolean(),
    headache: Joi.boolean(),
    runnyNose: Joi.boolean(),
    feelingUnwell: Joi.boolean(),
    shortnessOfBreath: Joi.boolean(),
    bodyPain: Joi.boolean(),
    travelHx: Joi.boolean(),
    haveSex: Joi.boolean(),
    animalMarket: Joi.boolean(),
    healthFacility: Joi.boolean(),
    receiverName: Joi.string(),
    source: Joi.string(),
    formStatus: Joi.string(),
  },
  'toll-free': {
    id: Joi.string(),
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    age: Joi.number(),
    gender: Joi.string(),
    reportRegion: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    region: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
      latitude: Joi.number(),
      longitude: Joi.number(),
      description: Joi.string(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
      deletedAt: Joi.date(),
    }),

    zone: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    woreda: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    city: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    subcity: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    kebele: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    createdBy: Joi.object({
      region: Joi.object({
        id: Joi.number(),
        firstName: Joi.string(),
        middleName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email(),
        phoneNumber: Joi.string(),
      }),
      role: Joi.object({
        id: Joi.number(),
        name: Joi.string(),
      }),
      callCenter: Joi.object({
        id: Joi.number(),
        name: Joi.string(),
      }),
      active: Joi.boolean(),
      emailVerifiedAt: Joi.boolean(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
      deletedAt: Joi.date(),
    }),
    phoneNumber: Joi.string(),
    secondPhoneNumber: Joi.string(),
    occupation: Joi.string(),
    callerType: Joi.string(),
    other: Joi.string(),
    reportType: Joi.string(),
    reportGroup: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
    }),
    description: Joi.string(),
    remark1: Joi.string(),
    remark2: Joi.string(),
    travelHx: Joi.boolean(),
    haveSex: Joi.boolean(),
    visitedAnimal: Joi.boolean(),
    visitedHf: Joi.boolean(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    deletedAt: Joi.date(),
    rumorTypes: Joi.array().items(Joi.object({})),
  },
};