import React, { Component } from 'react'
import './ItemBoxStyles.css'
import IteamImage from './IteamImage'

export default class IteamBox extends Component {
    render() {
        return (
            <div className="box" align="center">
                <h2>{this.props.title}</h2>
                <IteamImage image={this.props.image}/>
                <h3 style={{ color:'red', fontStyle:'italic'}}>{`Rs.${this.props.price}`}</h3>
                <p>{this.props.desc}</p>

            </div>
        )
    }
}
