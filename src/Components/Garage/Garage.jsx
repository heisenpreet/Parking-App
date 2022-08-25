import React from "react";
import Cars from "../CarsCard/CarsCard";
import { useParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import NoCar from "./NoCar";

const MyGarage = () => {
  const params = useParams();

  const reduxGarageList = useSelector((state) => state.Garage);
  const [garageList, setGarageList] = useState(reduxGarageList);

  const filterGarageList = useCallback(() => {
    switch (params.page) {
      case "carsin":
        const carsIn = reduxGarageList.filter((car) => car.status);
        setGarageList(carsIn);
        break;
      case "carsout":
        const carsOut = reduxGarageList.filter((car) => !car.status);
        setGarageList(carsOut);
        break;

      default:
        const allCars = reduxGarageList;
        setGarageList(allCars);
        break;
    }
  }, [params, reduxGarageList]);

  useEffect(() => {
    setGarageList(reduxGarageList);
    filterGarageList();
  }, [filterGarageList, reduxGarageList]);

  return garageList.length > 0 ? (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <Cars garageList={garageList} />
        </tbody>
      </table>
    </div>
  ) : (
    <NoCar />
  );
};

export default MyGarage;
