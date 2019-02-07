import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    myInput = React.createRef();
    
    // constructor() { // method that will run before StorePicker componenet runs first 
    //     super(); //Super() is a method that makes sure React.Component Runs before Store Picker as we need 

    //     this.goToStore = this.goToStore.bind(this); //This binds/connects .goToStore to the StorePicker Component 
    //     console.log("appStarted");
    // }

    // goToStore(event){
    //     event.preventDefault();
    //     console.log("this " + this); //Without the contrusctor().this.goToStore = this.goToStore.bind(this), this will be Undefined
    //     console.log("StoreGoer");
    // }

    goToStore = event => {

        event.preventDefault();

        const storeName = this.myInput.value.value;

        console.log(storeName); //Without the contrusctor().this.goToStore = this.goToStore.bind(this), this will be Undefined

        this.props.history.push(`/store/${storeName}`);
        
    };


    render(){        
        return (            
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Enter a store bitch</h2>

                    <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()} />

                    <button type="submit">Visit Store --></button>
                </form> 
            </React.Fragment>
        )         
    } 
} 

export default StorePicker; 