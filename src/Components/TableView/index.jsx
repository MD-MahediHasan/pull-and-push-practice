import React from "react";
import { CustomInput,Button,Table} from "reactstrap";
import PropsTypes from "prop-types";

const RowItem =({todo,toggleSelect,toggleComplete,Table,Button})=>(
    <tr>
        <th scope="row">
            <CustomInput 
             type="checkbox"
             id={todo.id}
             checked={todo.isSelect}
             onChange={()=> toggleSelect(todo.id)}
            />
        </th>
        <th>
            {todo.time.toDateString()}
        </th>
        <th>{todo.text}</th>
        <th>
            <Button color={todo.isComplete ? "danger":"success"} onClick={()=> toggleComplete(todo.id)} >
             {todo.isComplete ? "Completed" : "Running"}

            </Button>
            
        </th>
    </tr>
);

RowItem.prototype={
    todo: PropsTypes.object.isRequired,
    toggleSelect:PropsTypes.func.isRequired,
    toggleComplete:PropsTypes.func.isRequired

};

const TableView=({todos,toggleComplete,toggleSelect})=>(
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map( todo=>(
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                
                />
            )

            )}
        </tbody>
    </Table>
);

TableView.prototype={
    todos: PropsTypes.object.isRequired,
    toggleSelect:PropsTypes.func.isRequired,
    toggleComplete:PropsTypes.func.isRequired

}

export default TableView;


