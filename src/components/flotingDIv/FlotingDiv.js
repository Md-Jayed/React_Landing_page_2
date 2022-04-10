import React from 'react';
import "./flotingDiv.css"
const FlotingDiv = ({img,text1,text2}) => {
    return (
        <div className='floatingDiv'>
            <img src={img} alt="" />
            <span>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default FlotingDiv;