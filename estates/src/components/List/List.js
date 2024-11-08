import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import { listData } from '../../lib/dummydata'

const List = () => {
    return (
        <div className="List">
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}

        </div>
    )
}

export default List
