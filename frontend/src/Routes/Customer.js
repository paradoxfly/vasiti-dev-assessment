import React from 'react'
import Products from '../Components/Products'

class Customer extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      products: [], 
      fetched: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, fetched: true })
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render(){
    return (
      <div>
        <Products products={this.state.products} loading={!this.state.fetched} seller={false}/>
      </div>
    )
  }
  
}

export default Customer