import React, {Fragment} from 'react';
import CreateTodo from "../components/Todo/CreateTodo";
import TodoList from "../components/Todo/TodoList";
import TopNavigation from "../components/TopNavigation/TopNavigation";


const TodoPage = () => {
    return (

        <Fragment>

            <TopNavigation></TopNavigation>
            <br/> <br/>


              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12">
                          <div className="card">
                              <div className="card-header">
                                  <h5 className="text-danger text-center todoTitle">My Todo App</h5>
                              </div>
                              <div className="card-body">
                                  <CreateTodo></CreateTodo>
                                  <TodoList></TodoList>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



        </Fragment>

    );
};

export default TodoPage;