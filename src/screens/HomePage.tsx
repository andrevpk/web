import React from 'react'
import logo from '../assets/logo.png'
import fundo from '../assets/fundo.jpg'
import { Link } from 'react-router-dom'




const HomePage = () => {
    return (
        <div>
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={fundo} alt="fundo" />
            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 5, position: 'absolute', top: 0,
                width: '100%', boxShadow: '1px 2px 90px #515458 inset'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link style={{ padding: 40 }} to='/'>
                        <a>Home</a>
                    </Link>
                    <Link style={{ padding: 40 }} to='/Pesquisa'>
                        Pesquisar Receitas
                    </Link>
                    <a style={{ padding: 40 }}>Cadastrar Receitas</a>
                    <a style={{ padding: 40 }}></a>
                </div>
                <img style={{ height: 100, width: 250, alignItems: 'end' }} src={logo} alt="duChef" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <a style={{ fontFamily: 'Pacifico', fontSize: 65, color: 'white', position: 'absolute', top: '15%', left: '20%' }}>Não sabe o que tem pra comer?</a>
                <a style={{ fontFamily: 'Pacifico', fontSize: 65, color: 'white', position: 'absolute', top: '30%', left: '35%' }}>Perfeito!</a>
                <a style={{ fontFamily: 'Pacifico', fontSize: 65, color: 'white', position: 'absolute', top: '45%', left: '45%' }}>Você está no melhor site para busca de receitas</a>

            </div>
        </div>
    )
}

export default HomePage