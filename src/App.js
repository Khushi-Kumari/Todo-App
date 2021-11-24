// import logo from './logo.svg';
import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Todos from './Components/todos'
import AddTodos from './Components/AddTodos'


class App extends React.Component {
  constructor() {
    super()
    let initodo
     if(localStorage.getItem("key")===null)
     initodo=[];
     else 
     initodo = JSON.parse(localStorage.getItem("key"))
    // console.log(initodo)
    this.state = {

      arr: initodo
        // [
        // {
        //   id: 1,
        //   para: "this is 1st todo",
        //   eg: "hlw every one...how are you all...ur house number is 1",
        //   // test: true
        // },
        // {
        //   id: 2,
        //   para: "this is 2nd todo",
        //   eg: "hlw every one...how are you all...ur house number is 2",
        //   //test: true
        // },
        // {
        //   id: 3,
        //   para: "this is 3rd todo",
        //   eg: "hlw every one...how are you all...ur house number is 3",
        //   // test: false
        // }
        // ]
      

    }
    this.ondelete = this.ondelete.bind(this)
    this.addTodos = this.addTodos.bind(this)
  }

  ondelete(todo) {
    this.setState((prevstate) => {
      //console.log("deleted")
      const updateTodo = prevstate.arr.filter(e => {
        return e !== todo
      })
      return {
        arr: updateTodo
      }
    })
  // localStorage.setItem("key",JSON.stringify(this.state.arr))
  setTimeout( ()=>{localStorage.setItem("key",JSON.stringify(this.state.arr))} ,1)
  setTimeout(()=>{console.log("FINAL STORAGE IS THIS ONE " + localStorage.getItem("key"))} ,2 )
  }

  
     addTodos(para, eg){
     //let id = this.state.arr[this.state.arr.lenght - 1].id + 1

     let x =Math.random()
  
     //alternative way of value of id provided add id when no elements are present 

      // let index=this.state.arr.length-1
      // let tempo=this.state.arr[index]
      // let x=tempo.id + 1

      console.log("doubt is " + x )
      console.log(typeof x)
      const newarr = {
        
       // id: this.state.arr.length + 1,
       // id : this.state.arr[this.state.arr.lenght - 1].id + 1,

        id:x,
        para: para,
        eg: eg
        
      }
      
      console.log(newarr)
     // this.setState([...this.state.arr,newarr])


      this.setState({arr: this.state.arr.concat(newarr)})
    //  localStorage.setItem("key",JSON.stringify(this.state.arr))
      


    //  let fun=()=>{  this.setState({arr: this.state.arr.concat(newarr)})}
    // function r(){ localStorage.setItem("key",JSON.stringify(this.state.arr)) }
    //   fun();
    //   r();
       setTimeout( ()=>{localStorage.setItem("key",JSON.stringify(this.state.arr))} ,1)

       setTimeout(()=>{console.log("FINAL STORAGE IS THIS ONE " + localStorage.getItem("key"))} ,2 )
        
    }
     
     
    

    render() {

    return (

      <div className="center">
        
        <Header title="My-Todo-List" />
       <h1 className="center"> Todo List</h1>
        {/* <Todos className="td" todos={arr}/> this className is useless bcoz clkassnames are
        not applied on components,instead they are applied on tags i.e. (react or html tags) */}
        <AddTodos addTodos={this.addTodos}/>
        <Todos todos={this.state.arr} onDelete={this.ondelete} />

        {/* {(this.state.arr.length===0)?<AddTodos />:""} */}
        <Footer />

      </div>

    );
  }
}
Header.defaultProps = {
  title: "your title here",
}
Header.propTypes = {
  title: PropTypes.string
}

export default App;
