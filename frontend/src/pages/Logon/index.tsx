import React, { useState } from 'react'
import HeaderComp from '../../components/HeaderComp'

function Logon() {
    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try {
            //API get hero

            localStorage.setItem('heroId', id);

            //history.push('/profile')
        } catch (error) {
            alert('falha no login')
        }
    }

    return (
        <div id="page-logon">
            <HeaderComp />
            <form action="" id="logon-form">
                <input 
                    placeholder="Insira sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                <button type="submit"> Log in </button>
            </form>
        </div>
    )
}

export default Logon