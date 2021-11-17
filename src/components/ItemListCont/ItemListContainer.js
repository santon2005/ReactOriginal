import React from 'react'
import './ItemListContainer.css'
import CardProducts from '../CardProducts/CardProducts'

const ItemListContainer = () => {
    return (
        <div>
            <CardProducts
            Imagen='https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d175d2e3f2a94342a3f9e6e50ce56fa1.jpg'
            Nombre='Mercedez Benz GT R'
            Descripcion='Por delante de todo: el diseño frontal del Mercedes-AMG GT. Numerosos elementos del deporte del motor confluyen en una declaración visual de dinamismo. El capó sumamente alargado y prolongado hacia abajo señala el camino a seguir.…'
            Precio='U$D350.000'
            />
           <CardProducts
            Imagen='https://i.blogs.es/c9834a/mercedes-amg-a-35-sedan-prueba/1366_2000.jpg'
            Nombre='Mercedez AMG A35 Sedan'
            Descripcion='El nuevo Mercedes-AMG A 35 4MATIC Sedán brinda un acceso ideal al mundo de la Driving Performance de AMG. La calandra del radiador específica de AMG y las grandes tomas de aire con flics en el faldón delantero irradian una estética extremadamente deportiva y ponen en evidencia los genes de AMG. Por otro lado, la nueva interpretación en clave deportiva del clásico concepto de tres volúmenes confiere a este Mercedes-AMG una elegancia rebosante de dinamismo.'
            Precio='U$D300.000'
            />

        </div>
    )
}

export default ItemListContainer
