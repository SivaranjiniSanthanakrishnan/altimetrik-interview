import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { CarListData } from "../Redux/Thunk/CarListData";

const CarList = ({
  data,
  isLoading,
  filterValues,
  getData,
  sendFilterData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [dispatch]);

  const handleChange = (e) => {
    sendFilterData(e.target.name, e.target.value);
  };
  if (!isLoading) {
    var filteredData = data;
    let isBrandFilterApplied = Object.keys(filterValues.brand).filter(
      (key) => filterValues.brand[key]
    ).length
      ? true
      : false;
    let budgetStartValue = 0,
      budgetEndValue = 0;
    if (filterValues.budget == 200000) {
      budgetStartValue = 0;
      budgetEndValue = 200000;
    } else if (filterValues.budget == 400000) {
      budgetStartValue = 200000;
      budgetEndValue = 400000;
    } else if (filterValues.budget == 600000) {
      budgetStartValue = 400000;
      budgetEndValue = 600000;
    } else {
      budgetStartValue = 600001;
      budgetEndValue = 2500000;
    }
    filteredData = data.filter((item) => {
      let isBrandFiltered = isBrandFilterApplied
        ? Object.keys(filterValues.brand).filter(
            (key) =>
              filterValues.brand[key] &&
              key.toLowerCase() === item.brand.toLowerCase().replace(/ +/g, "")
          ).length
          ? true
          : false
        : true;
      return (
        item.location.includes(filterValues.location) &&
        item.bodyType.startsWith(filterValues.bodyType) &&
        item.owners.startsWith(filterValues.owners) &&
        item.budget > budgetStartValue &&
        item.budget < budgetEndValue &&
        item.fuelType.startsWith(filterValues.fuelType) &&
        item.transmission.startsWith(filterValues.transmission) &&
        isBrandFiltered
      );
    });
  }
  return (
    <>
      <h3> Filter out Values </h3>
      <form>
        <div>
          <label>
            <b> Location </b>
          </label>
          <select
            name="location"
            value={filterValues.location}
            onChange={(e) => handleChange(e)}>
            <option name="Banglore" value="Banglore">
              Banglore
            </option>
            <option name="chennai" value="Chennai">
              Chennai
            </option>
            <option name="Hyderabad" value="Hyderabad">
              Hyderabad
            </option>
          </select>
          &nbsp; &nbsp;
          <label>
            <b> BodyType </b>
          </label>
          <input
            type="text"
            name="bodyType"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          &nbsp; &nbsp; <br />
          <label>
            <b>Brand</b>
          </label>
          <input
            type="checkbox"
            name="brand"
            value="wagonR"
            checked={filterValues.brand.wagonR}
            onChange={(e) => handleChange(e)}
          />
          Wagon R
          <input
            type="checkbox"
            value="celerio"
            name="brand"
            checked={filterValues.brand.celerio}
            onChange={(e) => handleChange(e)}
          />
          Celerio
          <input
            type="checkbox"
            value="swift"
            name="brand"
            checked={filterValues.brand.swift}
            onChange={(e) => handleChange(e)}
          />
          Swift
          <input
            type="checkbox"
            value="swiftDzire"
            name="brand"
            checked={filterValues.brand.swiftDzire}
            onChange={(e) => handleChange(e)}
          />
          Swift Dzire
        </div>
        <br />
        <div>
          <b>Owners</b>
          <label>
            <input
              type="radio"
              value="1"
              name="owners"
              checked={filterValues.owners === "1"}
              onChange={(e) => handleChange(e)}
            />
            1st Owner
            <input
              type="radio"
              value="2"
              name="owners"
              checked={filterValues.owners === "2"}
              onChange={(e) => handleChange(e)}
            />
            2nd Owner
            <input
              type="radio"
              value="3"
              name="owners"
              checked={filterValues.owners === "3"}
              onChange={(e) => handleChange(e)}
            />
            3rd Owner
          </label>
        </div>
        <br />
        <div>
          <b>Budget</b> &nbsp;
          <select
            name="budget"
            value={filterValues.budget}
            onChange={(e) => handleChange(e)}>
            <option value="200000">Less than 2L</option>
            <option value="400000">2L - 4L</option>
            <option value="600000">4L - 6L</option>
            <option value="600001">More than 6L</option>
          </select>
        </div>
        <br />
        <div>
          <label>
            <b>Fuel Type:</b>
          </label>
          <input
            type="radio"
            value="Petrol"
            name="fuelType"
            checked={filterValues.fuelType === "Petrol"}
            onChange={(e) => handleChange(e)}
          />
          Petrol
          <input
            type="radio"
            value="Diesel"
            name="fuelType"
            checked={filterValues.fuelType === "Diesel"}
            onChange={(e) => handleChange(e)}
          />
          Diesel
          <input
            type="radio"
            value="CNG"
            name="fuelType"
            checked={filterValues.fuelType === "CNG"}
            onChange={(e) => handleChange(e)}
          />
          CNG
        </div>
        <br />
        <div>
          <label>
            <b>Transmission:</b>
          </label>
          <input
            type="radio"
            value="Automatic"
            name="transmission"
            checked={filterValues.transmission === "Automatic"}
            onChange={(e) => handleChange(e)}
          />
          Automatic
          <input
            type="radio"
            value="Manual"
            name="transmission"
            checked={filterValues.transmission === "Manual"}
            onChange={(e) => handleChange(e)}
          />
          Manual
        </div>
      </form>

      <div>
        <h3> Form Data </h3>
        <table border={1}>
          <tr>
            <th> Location </th>
            <th> Body Type </th>
            <th> Brand </th>
            <th> Owners </th>
            <th> Budget </th>
            <th> Fuel Type </th>
            <th> Transmission </th>
          </tr>
          {isLoading ? <h3>Loading... Please wait...</h3> : <></>}
          {filteredData &&
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.location} </td>
                <td>{item.bodyType} </td>
                <td>{item.brand} </td>
                <td>{item.owners} </td>
                <td>{item.budget} </td>
                <td>{item.fuelType} </td>
                <td>{item.transmission} </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.carData.value.data,
    isLoading: state.carData.value.loading,
    filterValues: state.carListFilter.filterValues,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(CarListData()),
    sendFilterData: (name, value) =>
      dispatch({
        type: "UPDATE_FILTER_STATE",
        payload: { name: name, value: value },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CarList);
