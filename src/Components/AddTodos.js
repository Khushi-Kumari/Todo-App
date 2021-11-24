import React from 'react'
import { Component } from 'react'

class AddTodos extends React.Component {
  constructor(props){
    super(props)
    this.state={
      para:"",
      eg:""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState(()=>{
    return {
    [e.target.name]: e.target.value}
    })
    // console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.para||!this.state.eg){
      alert("para and eg should not be empty")
    }
    // let id=this.props.arr[this.props.arr.lenght-1].id + 1
    // const newarr={
    //   id:id,
    //   para:this.state.para,
    //   eg:this.state.eg,
    // }
    //  console.log(newarr)
    //  this.setState([...arr,newarr])
  else{
    this.props.addTodos(this.state.para,this.state.eg)
    this.setState({ para:"",
                    eg:""
                  })
    
    }
  }

  render() {
    return (
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label display-6" >Para</label>
          <input type="text"  className="form-control border border-primary" id="exampleFormControlInput1" name="para" placeholder="This is 1st todo" value={this.state.para} onChange={this.handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label display-6">Example textarea</label>
          <textarea className="form-control border border-primary" id="exampleFormControlTextarea1" rows="1" name="eg" placeholder="Wake up in the morning" value={this.state.eg} onChange={this.handleChange}></textarea>
        </div>
        {/* <h1>{this.state.para} {this.state.eg}</h1> */}
        <div className="text-center">
          <button className=" btn btn-sm btn-success my-3 " onClick={this.handleSubmit}>Submit</button>
          {/* <h1>{newarr}</h1> */}
        </div>
      </div>
    )
  }
}

export default AddTodos
