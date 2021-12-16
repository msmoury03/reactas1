import React from 'react'

import Stylee from './Cardfun.module.css'

function Cardfun(){

    const mysl = {
        color:'blue'
    }

    


    return(
        <div>

            <div className={Stylee.mydiv}>
                <h1 >This is created using functional Component</h1>
                <p>This is done using external CSS</p>
                <p style={mysl}>This is done using inline CSS</p>
                

            </div>

        </div>
    );
}

export default Cardfun;

