import React from 'react';
import { Input } from 'antd';


const Inpt = ({value, type, handleChange, placeholder,size}) => {



    
    return (
        <Input
            value={value}
            type={type}
            onChange={handleChange} 
            placeholder={placeholder}
            size={size}/>
               
     
    )
};

export default Inpt;