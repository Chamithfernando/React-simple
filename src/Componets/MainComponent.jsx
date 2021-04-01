import React, { Component } from 'react'
import IteamBox from './IteamBox/IteamBox'
import coke from '../imagers/coke-png-11538597116rbldncp4k7-removebg-preview.png'
import pepsi from '../imagers/unnamed.png'
import creamsoda from '../imagers/cream1l500ml.png'
import OrangeCrush from '../imagers/orange-crush-1.5l.png'
export default class MainComponent extends Component {


    constructor(props) {
        super(props)
    
       
    }
    



    render() {
        return (

            <div style={{ display:'flex' }}>
            
            <IteamBox title="coke" price="150" image={coke} desc="Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company. "/>
            <IteamBox title="pepsi" price="150" image={pepsi} desc="Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad's Drink,"/>
            <IteamBox title="cream soda" price="150" image={creamsoda} desc="Cream soda is usually servedFanta's Red Cream Soda. Crema Soda (El Salvador) DG Soft Drink Cream Soda (Jamaica) Frescolita (Venezuela) - a bubble gum-flavored soda. "/>
            <IteamBox title="orange crush" price="150" image={OrangeCrush} desc="Crush is a brand of carbonated soft drinks owned and marketed internationally by Keurig Dr Pepper, originally created as an orange soda, "/>

            </div>
            
            
        )
    }
}
