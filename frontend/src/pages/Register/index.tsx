import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import HeaderComp from "../../components/HeaderComp";
import api from "../../services/api";

function Register() {
    const [name, setName] = useState('');
    const [rank, setRank] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const history = useHistory();

    async function handleCreate(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            if(!rank) {
                alert('Selecione um rank')
                return
            }
            const formData = {
                name: name,
                heroPower: rank,
                lat: lat,
                lng: lng
            }

            const response = await api.post('heroes', formData)
            alert("O seu herói foi criado com sucesso guarde o seu ID para futuras atualizações das sua informações " + response.data)

            history.push('/')
        } catch (error) {
            alert('falha no login')
        }
    }

    return (
        <div id="page-register">
            <HeaderComp />
            <form onSubmit={handleCreate} id="register-form">
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
                    <button type="reset" onClick={() => history.push('/')}> Cancelar </button>
                </span>
            </form>
        </div>
    )
}

export default Register