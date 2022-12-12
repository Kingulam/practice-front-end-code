import React from "react";
export class Propes extends React.Component{
render(){
    return(
        <div class="card">
        <img src={this.props.img} alt="flipkart image"/>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.text}</p>
          <a href="#" class={this.props.button}>{this.props.bname}</a>
        </div>
      </div>
    )
}
}
export default Propes;
