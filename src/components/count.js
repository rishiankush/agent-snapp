import React, { Component } from 'react';
import { withRouter } from 'react-router'
class Counter extends Component
{
    constructor(props)
    {
    super(props);
    this.state = {
        quantity : 0,
        show : true,
        max : 5,
        min : 0
    }
    }

    incrimentCLick = () => {
        this.setState(prevState=>{
            if(prevState.quantity < 10){
                return {
                    quantity : prevState.quantity +1
                }
            }

            else
            {
                return null;
            }
        })
    }

    decrimentClick = () =>
    {
        
       this.setState(prevState => {
           if(prevState.quantity > 0){
            
               return{
                   quantity:prevState.quantity -1
               }
            }
               else{
                   return null;
               }
       });
    }

    show = () =>{
        console.log("I am funcation")
    }

    geeky = (callback) =>
    {
        callback();
    }

   


  
    render() {
        return (
            <div>
            <button onClick = {this.incrimentCLick}> + </button>

            <p> {this.state.quantity} </p>

            <button onClick = {this.decrimentClick}> - </button>

            </div>
        );
    
      }
}

export default withRouter(Counter);
