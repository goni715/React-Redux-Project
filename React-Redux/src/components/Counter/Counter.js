import React, {Fragment, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectCount, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {


    const myNumber = useRef(null);




   const countingValue = useSelector(selectCount);
   const dispatch = useDispatch();


    return (

        <Fragment>

              <div className="card">
                  <div className="card-header bg-secondary">
                      <h4 className="text-white"> My Counter App </h4>
                  </div>
                  <div className="card-body">
                       <h1>{countingValue}</h1>
                      <div className="my-4">
                          <button onClick={() => dispatch(increment())} className="btn btn-success">Increase</button>
                          <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-2">Decrease</button>
                      </div>
                      <div className="my-4">
                          <input ref={myNumber} className="form-control w-50 my-2" type="number"/>
                          <button onClick={() => dispatch(setCustom(myNumber.current.value))} className="btn btn-danger w-50 my-2">Set Custom</button>

                      </div>
                  </div>
              </div>


        </Fragment>




    );
};

export default Counter;