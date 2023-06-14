import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount)


  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg"
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center my-3">Name of the person</h5>
          <div className="d-flex justify-content-center">
          {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
            Update Balance ({balance})
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;