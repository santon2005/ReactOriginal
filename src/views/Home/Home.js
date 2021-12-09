import React from 'react'
import Menu from '../../components/Menu/Menu'
import './Home.css'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'

const Home = () => {
    return (
        <div>
           <Menu />
           <ItemDetailContainer />
        </div>
    )
}

export default Home
