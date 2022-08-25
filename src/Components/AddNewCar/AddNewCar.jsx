import React from "react";
import { useRef, useState } from "react";
import numberPlateCheck from "../../Helper/NumberPlateRegex";
import { addCar } from "../../Redux/Slices/GarageSlice";
import { useDispatch } from "react-redux";
import timeDate from "../../Helper/TimeDate";
import { useNavigate } from "react-router-dom";

const AddNewCar = () => {
  const carName = useRef();
  const carNumber = useRef();
  const modal = useRef();
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formValidionCheck = () => {
    if (
      carName.current.value.trim().length > 3 &&
      numberPlateCheck(carNumber.current.value)
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name: carName.current.value,
        RegNumber: carNumber.current.value,
        status: true,
        timedate: timeDate(),
      })
    );
    e.target.reset();
    setIsValid(true);
    modal.current.checked = false;
    navigate("/", { replace: true });
  };

  return (
    <>
      <input
        ref={modal}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle "
      />
      <label for="my-modal-4" className={`modal cursor-pointer `}>
        <label className="modal-box relative hero-content" for="">
          <form
            onSubmit={onSubmitHandler}
            className="form-control w-full max-w-xs"
          >
            <label className="label">
              <span className="label-text">Car Owner's Name:</span>
            </label>
            <input
              ref={carName}
              onChange={formValidionCheck}
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-primary"
            />
            <br></br>
            <label className="label">
              <span className="label-text">Number Plate:</span>
            </label>
            <input
              ref={carNumber}
              onChange={formValidionCheck}
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-primary"
            />
            <br></br> <br></br>
            <button
              for="my-modal-4"
              disabled={isValid}
              type="submit"
              className="btn btn-success"
            >
              Add Car
            </button>
          </form>
        </label>
      </label>
    </>
  );
};

export default AddNewCar;
