We're creating the product grid passing the dynamic data through states and increasing the price here to click on button.


State pass and update the data from outside of the same component. And used the spread operator and concept of grand parent > parent > child


header.js::

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


footer.js::

import React from 'react';
import {Header} from './header';


export class Footer extends React.Component{
  render(){
    return(
     
        <Header {...this.props} />
        
    )
  }
}

index.js

import React from 'react';
import {render} from 'react-dom';
import {Footer} from './footer';

import './index.css';
class App extends React.Component{
constructor(){
super();
this.state = {
	product:[
	{name:'Shopify', title:'its a CMS', price:5000},
	{ title:'its a CMS', price:6000},
	{name:'Wordpress', title:'its a CMS', price:5000},
	{name:'Drupal', title:'its a CMS', price:9000},
	{name:'JavaScript', title:'its a lang follows the ES', price:4000},
	{name:'React', title:'its a JS framework', price:2000},
	],
	price:'20000',
	productWarenty:'Example of how spread operator works in react, changing the state from another component and using the grandParent > parent > child concept'
   };
}


increasePrice(){

this.setState({

price:this.state.product.map((pr) => {

const tempPrice = pr;

tempPrice.price += 30;


	return tempPrice;


  })

})
}


increasePriceOutSide(){

	this.setState({
		price:this.state.product.map((inr) => {
			const temp = inr;
			temp.price +=90;
			return temp;


		})


	})


}



render(){

return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			<button onClick={this.increasePrice.bind(this)} className="btn btn-primary">increase price within component</button>
			<h1>{this.state.productWarenty}</h1>
			{
			this.state.product.map((d,i) => {
			
		       return <Footer inrPrice={this.increasePriceOutSide.bind(this)} key={i} name={d.name} price={d.price}>{d.title}</Footer>
		})
	}
	</div>
</div>


</div>
)
}
}
render(<App />, document.getElementById('root'));


