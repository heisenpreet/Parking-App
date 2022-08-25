import React from "react";
import AddNewCar from "../AddNewCar/AddNewCar";
import { useSelector } from "react-redux/es/exports";
import { useState, useEffect } from "react";
const Stats = () => {
  const reduxGarageList = useSelector((state) => state.Garage);
  const [checkIn, setCheckIn] = useState([]);
  const [checkOut, setCheckOut] = useState([]);

  useEffect(() => {
    setCheckIn(reduxGarageList.filter((car) => car.status));
    setCheckOut(reduxGarageList.filter((car) => !car.status));
  }, [reduxGarageList]);

  return (
    <>
      <div className="stats stats-vertical shadow bg-primary">
        <div className="stat bg-secondary">
          <div className="stat-title text-black font-bold">ADD NEW CAR</div>
          <label for="my-modal-4" className="btn btn-outline modal-button">
            ADD
          </label>
        </div>
        <div className="stat">
          <div className="stat-title">Total Cars in Garage</div>
          <div className="stat-value">{reduxGarageList.length}</div>
          <div className="stat-desc">{`Last Car Added: ${
            reduxGarageList[reduxGarageList.length - 1]?.name
          }`}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Cars checked-IN</div>
          <div className="stat-value">{checkIn.length}</div>
          <div className="stat-desc">{checkIn[0]?.timedate}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Cars checked-OUT</div>
          <div className="stat-value">{checkOut.length}</div>
          <div className="stat-desc">{checkOut[0]?.timedate}</div>
        </div>
      </div>
      <AddNewCar />
    </>
  );
};

export default Stats;
