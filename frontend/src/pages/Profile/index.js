import React, { useState } from 'react'
import HeaderComp from '../../components/HeaderComp'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function Profile() {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [rank, setRank] = useState(localStorage.getItem('heroPower') || '');
    const [lat, setLat] = useState(localStorage.getItem('lat') || '');
    const [lng, setLng] = useState(localStorage.getItem('lng') || '');
    const history = useHistory();
    
    async function handleUpdate(e){
        e.preventDefault();
        try {
            if(!rank) {
                alert('Selecione um rank')
                return
            }
            const formData = {
                id: localStorage.getItem('heroId'),
                name: name,
                heroPower: rank,
                lat: lat,
                lng: lng
            }

            const response = await api.put('heroes', formData)
            console.log(response)
        } catch (error) {
            alert('falha no login')
        }
    }

    async function handleDelete(){
        try {
            const formData = {
                headers: {
                    id: localStorage.getItem('heroId'),
                    name: name,
                }
            }

            await api.delete('heroes', formData)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div id="page-profile" className="normal-page">
            <form onSubmit={handleUpdate} id="register-form">
                <input 
                    placeholder="Insira seu nome."
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                <span id="register-rank-input">
                    <h1>Insira seu Rank</h1>
                    <select id="cars" value={rank} onChange={e => setRank(e.target.value)}>
                        <option></option>
                        <option 
                            value="90"
                            onSelect={e => setRank('90')}
                        >S</option>
                        <option 
                            value="15"
                            onSelect={e => setRank('15')}
                        >A</option>
                        <option 
                            value="4"
                            onSelect={e => setRank('4')}
                        >B</option>
                        <option 
                            value="1"
                            onSelect={e => setRank('1')}
                        >C</option>
                    </select>
                </span>
                <span id='register-location-input'>
                    <input 
                        placeholder="Insira sua latitude"
                        value={lat}
                        onChange={e => setLat(e.target.value)}/>
                    <input 
                        placeholder="Insira sua longitute"
                        value={lng}
                        onChange={e => setLng(e.target.value)}/>
                </span>
                <span>
                    <button type="submit"> Submit </button>
                    <button type="reset" onClick={async () =>{
                        await handleDelete();
                        alert('Este perfil foi removido.');
                        localStorage.clear();
                        history.push('/');
                    }}> Deletar perfil </button>
                    <button onClick={() => {
                        localStorage.clear();
                        history.push('/');
                    }}> Cancelar </button>
                </span>
            </form>
        </div>
    )

}

export default Profile