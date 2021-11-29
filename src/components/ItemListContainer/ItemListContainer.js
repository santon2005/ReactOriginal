import React from 'react'
//import Item from '../Item/Item'
import './ItemListContainer.css'
import ItemList from './components/ItemList/ItemList';

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574')
    .then(response => response.json())
    .then(respJson => {console.log(respJson); setItems(respJson)})
    .catch(error => console.log('Error: ', error))
  
    }, [])

    return (
        <div className='ItemListContainer'>
            <ItemList items={items}/>

        </div>
    )
}

export default ItemListContainer
