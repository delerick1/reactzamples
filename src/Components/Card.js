import React from 'react';


const Card = ({title ="Title by default", item1, item2,item3, background}) => {
    return (
        <div className="card" style ={{background:background}}>
            <h2>hey</h2>
            <ul >
         <h4>My freetime</h4> 
            <li>{item1[0]}</li>
            <li>{item1[1]}</li>
            <li>{item1[2]}</li>


        </ul>
           </div>
        
        
    );
};

export default Card;