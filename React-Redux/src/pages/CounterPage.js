import React, {Fragment} from 'react';
import Counter from "../components/Counter/Counter";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const CounterPage = () => {
    return (

        <Fragment>


            <TopNavigation></TopNavigation>
            <br/> <br/>

            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6"></div>

                        <Counter></Counter>
                </div>
            </div>

        </Fragment>


    );
};

export default CounterPage;