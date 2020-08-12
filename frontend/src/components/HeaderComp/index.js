import React from 'react'
import { useHistory } from 'react-router-dom';

import '../../assets/styles/header.css'

function HeaderComp(){
    const history = useHistory();

    return(
        <div id="header">
            <div id="header-ellipse">
                <h1 id="header-title">Hero Occurrences</h1>
            </div>
        </div>
    )
}

export default HeaderComp