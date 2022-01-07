import React from 'react'
import Products from '../Components/Products'
import UploadProduct from '../Components/UploadProduct'
import '../CSS/bootstrap.min.css'

class Seller extends React.Component{
  constructor(props){
    super(props)

    this.state = { 
      products: [], 
      fetched: false,
      uploadProduct: false
    }

    this.toggleUpload = this.toggleUpload.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, fetched: true })
      })
      .catch(error => console.log(error))
  }

  handleClick(event){
    const parent = event.target.parentNode
    const child = event.target
    console.log(child)
    console.log("__")
    console.log(parent.children)
    // console.log(Array.prototype.indexOf.call(Children_of_parent, child))

  }

  toggleUpload(event){
    this.setState({uploadProduct: !this.state.uploadProduct})
  }
  render(){
    return (
      <div>
        { 
          this.state.uploadProduct ? 
          <>
            <button className="toggle-upload btn btn-outline-dark" onClick = { this.toggleUpload }>Display Products </button>
            <UploadProduct update={false} data={this.state.products[3]}/> 
          </> :
          <>
            <button className="toggle-upload btn btn-outline-dark" onClick = { this.toggleUpload }>Upload New Product </button>
            <Products products={this.state.products} loading={!this.state.fetched} seller={true} onClick = { this.handleClick }/>
          </>
          
        }
      </div>
    )
  }
  
}

export default Seller