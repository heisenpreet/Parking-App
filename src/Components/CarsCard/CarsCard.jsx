import React from "react";
import { useDispatch } from "react-redux";
import { checkIn, checkOut, removeCar } from "../../Redux/Slices/GarageSlice";
const Cars = ({ garageList }) => {
  const dispatch = useDispatch();
  return garageList.map((car) => (
    <tr key={car.RegNumber}>
      <th className="bg-info">
        <button
          type="button"
          onClick={() => {
            dispatch(removeCar(car.RegNumber));
          }}
          className="btn btn-ghost btn-xs  text-xs"
        >
          Remove
        </button>
      </th>

      <td>
        <div className="flex items-center space-x-3 text-sm ">
          <div>
            <p className="font-bold ">{car.name}</p>
            <p className="text-sm opacity-50">{car.RegNumber}</p>
          </div>
        </div>
      </td>
      <td>
        <span className="text-sm ">{`Last Check-${
          car.status ? "In" : "Out"
        }`}</span>
        <br />
        <span className="badge badge-ghost badge-sm text-xs">
          {car.timedate}
        </span>
      </td>

      <th className="bg-base-300">
        {car.status && (
          <button
            type="button"
            onClick={() => {
              dispatch(checkOut(car.RegNumber));
            }}
            className="btn btn-ghost btn-xs  text-xs"
          >
            Check-OUT
          </button>
        )}
        {!car.status && (
          <button
            type="button"
            onClick={() => {
              dispatch(checkIn(car.RegNumber));
            }}
            className="btn btn-ghost btn-xs  text-xs"
          >
            Check-IN
          </button>
        )}
      </th>
    </tr>
  ));
};

export default Cars;
