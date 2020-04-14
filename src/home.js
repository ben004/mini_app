import React, { Component } from 'react'
import history from './history'
import './App.css';
export default class home extends Component {
    handleclick()
    {
        history.push('/calculation')
    }
    render() {
        return (
            <div>
                <h1>Welcome!!!</h1><br/>
                <h2>                                                                                                                                                                                                                                            This is the best page to find your property risk</h2>
                <br/>
                click here for further process 
                <h3><button onClick={(e)=>this.handleclick(e)}>Click</button></h3>
            </div>
        )
    }
}
