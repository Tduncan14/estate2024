import React, { useState } from 'react';
import Search from '../../../images/search.png'
import './Searchbar.scss'


const types = ["buy", "rent"]


const Searchbar = () => {

    const [query, SetQuery] = useState({
        type: 'buy',
        location: "",
        minPrice: 0,
        maxPrice: 0

    })



    const switchType = (value) => {

        SetQuery((prev) => ({ ...prev, type: value }))

    }


    return (
        <div className="searchBar">
            <div className="type">

                {
                    types.map((type) => (
                        <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ''}>
                            {type}
                        </button>
                    ))
                }


                {/* 
                <button onClick={() => switchType("buy")}>Buy</button>
                <button onClick={() => switchType('rent')}>Rent</button> */}


                <form>

                    <input class="location" type="text" name="location" placeholder="City Location" />
                    <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
                    <input type="number" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />

                    <button>
                        <img src={Search} alt="" />
                    </button>
                </form>
            </div>

        </div >
    )
}

export default Searchbar
