import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import useApi from "components/Utils/useApi"

import './styles.css'

import PromotionList from "../List"

const PromotionSearch = () => {
    const mountRef = useRef(null)
    const [search, setSearch] = useState('')
    const [load, loadInfo] = useApi({
        debouncedDelay: 300,
        url: '/promotions',
        method: 'get',
        params: {
            _embed: 'comments',
            _order: 'desc',
            _sort: 'id',
            title_like: search || undefined
        },
    })

    useEffect(() => {
        load({
            debounced: mountRef.current
        })  
        
        if(!mountRef.current){
            mountRef.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <PromotionList 
                promotions={loadInfo.data} 
                loading={loadInfo.loading}
                error={loadInfo.error}
            />
        </div>
    )
}

export default PromotionSearch;