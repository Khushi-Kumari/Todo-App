import React from'react'
import TodoItems from'./TodoItems'

function Todos(props){
   const todoitems=props.todos.map(todo=><TodoItems todo={todo} key={todo.id} 
   onDelete={props.onDelete} />)
      let style={}
//    (props.todos.length===0) ? style={
//         minHeight: "20vh"
//     }:""
    return(
        <div className="td" style={style}>
        {props.todos.length===0?"No todos to display ": todoitems}
        </div> 
    )
    }

export default Todos