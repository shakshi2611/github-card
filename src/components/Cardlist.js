import React from 'react';
import Card from "./Card";


function Cardlist(props) {
    const profiles=props.profiles;
    
    return (
        <div>
            {profiles.map((profile, key) => (
                <div key={key}>
                    <Card {...profile}/>
                </div>    
            ))}
            
        </div>
    );
}

export default Cardlist;