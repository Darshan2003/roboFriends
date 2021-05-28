import React from 'react';

const Scroll =(props)=>{
    return(
        <div style={{overflow:'scroll',background: 'rgba(0, 0, 0, 0.2)',height:'800px'}}>
            {props.children}
        </div>
    );
}
export default Scroll;