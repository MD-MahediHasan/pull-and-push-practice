import React from "react";
import ListView from "../ListView";
import TableView from "../TableView";

class Todos extends React.Component{
    state={
        todos:[
            {
                

                id:"random",
                text:"main todo text",
                description:"simple description",
                time:new Date(),
                isComplete:false,
                isSelect:false


            },
            {
                

                id:"randomjata",
                text:"main todo text",
                description:"simple description",
                time:new Date(),
                isComplete:false,
                isSelect:false


            }

        ]
    };

    toggleSelect=todoId=>{

    }
    toggleComplete=todoId=>{

    }
    render(){
       return(
        <div>
            <h1>This is Todos Component</h1>
            <div>
                <ListView todos={this.state.todos} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect} />
            </div>
            <div>
                <TableView todos={this.state.todos} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect} />
            </div>
        </div>

       )
    }
}
export default Todos;
