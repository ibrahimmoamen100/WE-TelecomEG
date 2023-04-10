const addData = (number, name, balance) => {
  // console.log(number, name, balance);

  return {
    type: "ADD",
    number,
    name,
    balance,
  };
};
export default addData;
