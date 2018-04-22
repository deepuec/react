import React from "react";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import axiosInstance from "../../axios";

class Checkout extends React.Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    // Get default purchase from service
    getDefaultIngredients(){
        axiosInstance.get("/ingredients.json")
        .then(response=>{
            this.setState({
                ingredients:response.data
            });
        })
        .catch(error=>{
            console.log(error);
        })
    }
    componentDidMount(){
        const queryParam = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of queryParam.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients:ingredients
        });
    }
    continued = ()=>{

    }
    canceled = ()=>{
        this.props.history.goBack();
    }
    render(){

        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                canceled={this.canceled}
                continued={this.continued}/>
            </div>
        );
    }
}

export default Checkout;