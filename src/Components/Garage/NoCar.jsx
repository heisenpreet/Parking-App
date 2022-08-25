import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
const NoCar = () => {
  const params = useParams();
  const reduxGarageList = useSelector((state) => state.Garage);
  return (
    <div className="card w-96 bg-primary text-primary-content">
      {reduxGarageList.length > 0 ? (
        <div className="card-body">
          <h2 className="card-title">{`No Cars ${
            params.page === "carsin" ? "In" : "Out"
          } !`}</h2>
          <p>{`All cars are currently ${
            params.page === "carsin" ? "Out" : "In"
          }`}</p>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title">Garage is Empty !</h2>
        </div>
      )}
    </div>
  );
};

export default React.memo(NoCar);
