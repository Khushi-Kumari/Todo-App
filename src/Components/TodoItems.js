import React from'react'

function TodoItems(props){
    return( 
            <>
            <p>{props.todo.para}</p> 
            <p>{props.todo.eg}</p>
            <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)}>Delete</button>
            <hr/>
            </>
    )
}
export default TodoItems