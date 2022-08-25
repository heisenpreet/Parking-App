const numberPlateCheck = (input) => {
  let regex =
    /(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})/;

  return regex.test(input);
};

export default numberPlateCheck;
