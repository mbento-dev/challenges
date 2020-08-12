import React, { useEffect, useState } from 'react'
import HeaderComp from '../../components/HeaderComp'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';



function Occurrences() {
    const [occurrences, setOccurrences] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('occurrences').then(response => {setOccurrences(response.data)})
    }, );

    return (
        <div id="page-occurrences" className="normal-page">
            <button onClick={()=> history.push('/')}>Retornar para o login</button>
            <ul id="occurrences-list">
                {occurrences.map(occurrence => (
                    <li id="occurrence-entry" key={occurrence.occurrenceId}>
                        <strong>HEROI:</strong>
                        <p>{occurrence.name}</p>

                        <strong>MONSTRO:</strong>
                        <p>{occurrence.monsterName}</p>

                        <strong>RANK:</strong>
                        <p>{occurrence.dangerLevel}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Occurrences