import { listData } from '../../lib/dummydata'
import './listPage.scss';
import Filter from '../../components/filter/Filter.js'
import Card from '../../components/Card/Card.js'
import React from 'react'

const ListPage = () => {


    const data = listData;

    return (
        <div className='listPage'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {
                        data.map(item => (
                            <Card key={item.id} item={item} />
                        ))
                    }

                </div>


            </div>


            <div className="mapContainer">
                Map

            </div>


        </div>
    )
}

export default ListPage
