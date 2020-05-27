import React, { Component } from 'react';
import NavBar from './NavBar'

class ShowProduct extends Component {

    // state = {
    //     user: this.props.location.state.product.user
    // }
    addToCart = (prod) => {

        let newProd = {title: prod.title, price: prod.price, description: prod.description, image: prod.image}
        let current_cart = prod.carts.length == 1 ?  prod.carts[0] : prod.carts.slice(-1)[0]
        console.log(current_cart)
        fetch(`http://localhost:3000/carts/${current_cart.id}`,{
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: current_cart.user_id,
                newProd: newProd
            })
        })
        // .then(res => res.json())
        // .then(x => (
        //     this.setState
        // ))
    }

    render() { 
        // console.log(this.props.location.state.product.carts)
        console.log(this.props.location.state.product.current_user_id)
        return (
        <div>
            <NavBar current_user_id={this.props.location.state.product.current_user_id} carts={this.props.location.state.product.carts}/>
            <div className="container row row-cols-1 row-cols-md-2">
                <div id="carouselExampleIndicators" className="carousel slide col mb-2" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active">></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active">></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-50" src={this.props.location.state.product.image} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-50" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6268/6268403_sd.jpg;maxHeight=640;maxWidth=550" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-50" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6268/6268403_sd.jpg;maxHeight=640;maxWidth=550" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="col mb-2">
                    <h3>{this.props.location.state.product.title}</h3>
                    <p>{this.props.location.state.product.description == undefined ?
                    <p>No description</p> : this.props.location.state.product.description}</p>
                    <p>{this.props.location.state.product.price.current_retail == undefined ?
                    <p>$120</p> : this.props.location.state.product.price.current_retail}</p>
                    <a class="btn btn-warning" onClick={() => this.addToCart(this.props.location.state.product)}>
                    <i class="fas fa-cart-plus">Add to cart</i>
                    </a>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ShowProduct;