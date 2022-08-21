import React from "react";

class Horned extends React.Component{

    render(){


        return (
        
        <div>
        <h2>{this.props.beastName}</h2>
        <img src= {this.props.imgSrc} alt={this.props.beastName} title={this.props.beastName}></img>
        <p> {this.props.beastDisc} </p>
        
        </div>
        )
        



}
}

export default Horned;