import React, { useState } from 'react'
import HeaderComp from '../../components/HeaderComp'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        if(id === ''){
            return
        }

        try {
            const formData = {
                headers: {
                    id: id,
                    name: '',
                    heroPower: 0,
                }
            }

            const response = await api.get('heroes', formData)
            console.log(response)

            localStorage.setItem('name', response.data[0].name);
            localStorage.setItem('heroId', response.data[0].id);
            localStorage.setItem('lat', response.data[0].lat);
            localStorage.setItem('lng', response.data[0].lng);
            localStorage.setItem('heroPower', response.data[0].heroPower);

            history.push('/profile')
        } catch (error) {
            //alert('falha no login')
        }
    }

    return (
        <div id="page-logon" className="normal-page">
            <form onSubmit={handleLogin} id="logon-form">
                <input 
                    placeholder="Insira sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                <button type="submit"> Log in </button>
            </form>
            
            <button type="button" onClick={() => history.push('/register')}> Registrar-se </button>

            <button type="button" onClick={() => history.push('/occurrences')}> Veja o que nosso heróis tem feito </button>
        </div>
    )
}

export default Logon