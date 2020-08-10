import React, { useState } from 'react'
import HeaderComp from '../../components/HeaderComp'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e: React.FormEvent<HTMLFormElement>){
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

            localStorage.setItem('heroId', response.data[0].id);

            history.push('/profile')
        } catch (error) {
            //alert('falha no login')
        }
    }

    return (
        <div id="page-logon">
            <HeaderComp />
            <form onSubmit={handleLogin} id="logon-form">
                <input 
                    placeholder="Insira sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                <button type="submit"> Log in </button>
            </form>
            
            <button type="button" onClick={() => history.push('/register')}> Register </button>
        </div>
    )
}

export default Logon