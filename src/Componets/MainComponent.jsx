import React, { Component } from 'react'

export default class MainComponent extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Chamith',
             lastname: 'fernando'
        }
    }
    


    chamgeName =() =>{

        this.setState({
            lastname:'perera'
        })
    }


    render() {
        return (

            
            <div>

               {
               // base usecase of State in react
               }  
                <h2>{`Hello ${this.state.name} ${this.state.lastname} How are you`}</h2>
                <h2>{`Hello  ${this.state.lastname} How are you`}</h2>

                <button onClick={this.chamgeName}>Click me</button>
            </div>
        )
    }
}
