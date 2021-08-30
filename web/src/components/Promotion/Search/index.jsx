import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './styles.css'

import PromotionList from "../List"

const PromotionSearch = () => {
    const [promotion, setPromotion] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const params = {}

        if(search){
            params.title_like = search
        }
        
        axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', { params })
        .then(response => {
            setPromotion(response.data)
        })
    }, [search])

    return (
        <div className='promotion-search'>
            <header className="promotion-search__header">
                <h1>Promo show</h1>
                <Link to='/create'>Nova promoção</Link>
            </header>
            <input
                className="promotion-search__input"
                type="search"
                placeholder='Buscar por...'
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            <PromotionList promotions={promotion} loading={!promotion.length}/>
        </div>
    )
}

export default PromotionSearch;