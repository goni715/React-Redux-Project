import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import TodoPage from "../pages/TodoPage";

const AppRoute = () => {
    return (
        <Fragment>

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<CounterPage/>} ></Route>
                    <Route exact path="/Todo" element={<TodoPage/>}></Route>
                </Routes>

            </BrowserRouter>

        </Fragment>
    );
};

export default AppRoute;