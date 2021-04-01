import React, { Component } from 'react'
import './ItemBoxStyles.css'

export default class IteamImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="" className="coke"/>
            </div>
        )
    }
}
