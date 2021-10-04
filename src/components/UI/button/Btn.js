import React from 'react';
import { Button } from 'antd';
import  './Btn.css';

const Btn = ({text, icon, handleClick, disabled, type, isFullWidth, isBold,size}) => {



    
    return (
        <Button 
            className={`
                ${"btn"} 
                ${type === 'primary' && "primary"}
                ${type === 'secondary' && "secondary"}
                ${isFullWidth && "isFullWidth"}
                ${isBold && "isBold"}
                ${disabled && "disabled"}`
            } 
            onClick={handleClick} 
            disabled={disabled}
            size={size}>
            {icon && icon}
             {text}
           
        </Button>
    )
};

export default Btn;
