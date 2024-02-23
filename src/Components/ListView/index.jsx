import React from "react";
import PropsTypes from "prop-types";
import{ListGroup,ListGroupItem,CustomInput,Button,toggleComplete} from "reactstrap";

const ListItem=({todo,toggleSelect})=>{
    return(
        <ListGroupItem>
            <CustomInput
             type="checkbox"
             id={todo.id}
             checked={todo.isSelect}
             onChange={()=> toggleSelect(todo.id)}
            />
            <div>
                <h3>{todo.text}</h3>
                <p>{todo.time.toDateString()}</p>
            </div>
           <Button color={todo.isComplete ? "danger":"success"} onClick={()=> toggleComplete(todo.id)} >
                {todo.isComplete ? "Completed" : "Running"}
           </Button>
        </ListGroupItem>
    )
}

ListItem.prototype={
    todo: PropsTypes.object.isRequired,
    toggleSelect:PropsTypes.func.isRequired,
    toggleComplete:PropsTypes.func.isRequired

}


const ListView =({todos,toggleSelect,toggleComplete})=>{
    return(
        <ListGroup>
            {todos.map(todo =>(
                <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
                
                />
            ))}
        </ListGroup>
    )
}

ListView.prototype={
    todos: PropsTypes.object.isRequired,
    toggleSelect:PropsTypes.func.isRequired,
    toggleComplete:PropsTypes.func.isRequired

}

export default ListView;


