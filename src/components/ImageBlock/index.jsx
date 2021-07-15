import React from 'react'
import homecookies from '../../assets/homecookies.png'
import Button from '../Button'
import {Link } from "react-router-dom";

import './styles.css';

const ImageBlock = (props) => {
    return (
        <div className="block">
            <div className="img">
                <img src={props.img}/>
            </div>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <Link to={props.path}>
                    <Button name={props.name}/>
                </Link>
            </div>
            
        </div>
        
    )
}

export default ImageBlock
