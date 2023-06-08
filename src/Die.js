import React from "react"
import './style.css'

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#5035FF" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}