import React from 'react'
import logo from '../assets/logo.png'
import ReceitaCard from '../components/ReceitaCard'
import { Link } from 'react-router-dom'

const Pesquisa = () => {
    return (
        <div style={{ }}>
            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 5, maxWidth: '100%', maxHeight: '25%', 
                boxShadow: '1px 2px 90px #515458 inset'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link style={{ padding: 40 }} to='/'>
                        <a>Home</a>
                    </Link>
                    <a style={{ padding: 40 }}>Pesquisar Receitas</a>
                    <a style={{ padding: 40 }}>Cadastrar Receitas</a>
                    <a style={{ padding: 40 }}></a>
                </div>
                <img style={{ width: 250, alignItems: 'end' }} src={logo} alt="duChef" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', height: '25%', justifyContent:'space-around', alignItems:'center' }}>
                <ReceitaCard/>
                <ReceitaCard/>
                <ReceitaCard/>
                <ReceitaCard/>
            </div>
        </div>
    )
}

export default Pesquisa