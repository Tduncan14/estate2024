import { listData, singlePostData } from '../../lib/dummydata'
import './listPage.scss';
import Filter from '../../components/filter/Filter.js'
import Card from '../../components/Card/Card.js'
import React from 'react'
import Map from '../../components/Map/Map.js';

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
                <Map items={data} />


                <Map items={[singlePostData]} />

            </div>


        </div>
    )
}

export default ListPage
