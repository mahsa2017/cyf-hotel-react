import React, { Component } from 'react';

class Button extends Component  {
    render(){
        return(
            <div>
               <button className="btn btn-primary fn-submit-name" onClick={this.props.clickState}>{this.props.name}</button>
                </div>
        )
    }

}
export default Button;