import React from 'react';
import * as t from 'prop-types';


export class Header extends React.Component{
 render(){

  return (

  
  
    <div className="col-sm-2">
    <h3>Product Name</h3>
      ProductName:{this.props.name?this.props.name:'no product name mentioned'}
      <br/>
      ProductTitle:{this.props.children}
      <br/>
      <button className="btn btn-default">{this.props.price}</button>
      <hr/>
      <br/>
      <button onClick={this.props.inrPrice} className="btn btn-primary">increase price</button>
    </div>
    
  
  

)
}
}


Header.propTypes = {

product:t.object,


};