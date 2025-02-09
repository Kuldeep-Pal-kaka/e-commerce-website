import React from 'react'
import './Popular.css'
import data_product from '../Assets/Assets/data'
import Item from '../Items/Items'

const Popular = () => {
    return (
        <div className='Popular'>
            <h1>POPULAR IN WOMEN</h1>
            <div className="underline"> </div>
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular