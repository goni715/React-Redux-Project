import {configureStore} from "@reduxjs/toolkit";
import {counterSliceReducer} from "../state/counter/counterSlice";
import {todoSliceReducer} from "../state/todo/todoSlice";


export default configureStore({

     reducer:{

          counter:counterSliceReducer,
          todo:todoSliceReducer
     }

})