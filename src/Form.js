import "./Components/Background.css";
import React, { Component } from "react";
import RenderData from "./Components/RenderData";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      items: [],
    };
  }

  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  showValue = (e) => {
    e.preventDefault();
    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    const tempArr = this.state.items;
    tempArr.push(tempObj);
    this.setState({
      name: "",
      department: "",
      rating: "",
      items: [...tempArr],
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <div className="form">
          <h1>EMPLOYEE FEEDBACK FORM</h1>

          <label htmlFor="">Name : </label>
          <input type="text" name="name" className="input1" onChange={this.getValue} value={this.state.name}/><br/>
          
          <label htmlFor="">Department : </label>
          <input type="text" className="input2" name="department" onChange={this.getValue} value={this.state.department}/><br/>

          <label htmlFor="">Rating : </label>
          <input className="input3" type="number" name="rating" onChange={this.getValue} value={this.state.rating}/><br />

          <button name="submit" onClick={this.showValue}>Submit</button>
        </div>

        <div className="Parentdiv">
          {this.state.items.map((value, index) => {return (<RenderData name={value.name} department={value.department} rating={value.rating}/>)})}
        </div>
        
      </div>
    );
  }
}

export default Form;
