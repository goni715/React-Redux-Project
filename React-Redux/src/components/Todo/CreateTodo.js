import React, {Fragment, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AddTodo, selectTodo} from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {

    const dispatch = useDispatch();

    const taskInput = useRef();



    return (
        <Fragment>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <input ref={taskInput} placeholder="Task Name" type="text" className="form-control"/>
                    </div>
                    <div className="col-md-2">
                        <button onClick={()=>dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add Todo</button>

                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default CreateTodo;