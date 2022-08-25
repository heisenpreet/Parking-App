import { createSlice } from "@reduxjs/toolkit";
import timeDate from "../../Helper/TimeDate";
const defaultGarage = [
  {
    name: "Harpreet",
    RegNumber: "DL3SEM9828",
    status: true,
    timedate: "Aug 24, 2022, 05:54 PM",
  },
  {
    name: "Karan",
    RegNumber: "HR3SNM5818",
    status: false,
    timedate: "Aug 23, 2022, 03:00 PM",
  },
  {
    name: "Rohit",
    RegNumber: "PB3BEM3128",
    status: true,
    timedate: "Aug 25, 2022, 11:00 AM",
  },
];

const garageSlice = createSlice({
  name: "Garage",
  initialState: defaultGarage,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
    removeCar: (state, action) => {
      const carIndex = state.findIndex(
        (car) => car.RegNumber === action.payload
      );
      state.splice(carIndex, 1);
    },
    checkIn: (state, action) => {
      const carIndex = state.findIndex(
        (car) => car.RegNumber === action.payload
      );
      state[carIndex].status = true;
      state[carIndex].timedate = timeDate();
    },
    checkOut: (state, action) => {
      const carIndex = state.findIndex(
        (car) => car.RegNumber === action.payload
      );
      state[carIndex].status = false;
      state[carIndex].timedate = timeDate();
    },
  },
});

export const { addCar, removeCar, checkIn, checkOut } = garageSlice.actions;

export default garageSlice;
