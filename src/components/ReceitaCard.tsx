import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { GiPieSlice } from 'react-icons/gi'



const ReceitaCard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '25%', borderRadius: 10, background: '#F0F0F0', padding: 30 }}>
            <a style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>Bolo de Cenoura</a>
            <img src='https://marinacasteliani.com/wp-content/uploads/bolo-de-cenoura.jpeg'
                style={{ height: 200, borderRadius: 5 }}
            />
            <div style={{alignSelf:'center'}}>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                    <FaUserAlt />
                    <a style={{ marginLeft: 10 }}>andrevpk</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                    <BiTimeFive />
                    <a style={{ marginLeft: 10 }}>40 min</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                    <GiPieSlice />
                    <a style={{ marginLeft: 10 }}>10 porções</a>
                </div>
            </div>
        </div>
    )
}


export default ReceitaCard