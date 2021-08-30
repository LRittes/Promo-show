import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css'

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}

const PromotionForm = () => {
    const [values, setValues] = useState(initialValue)
    const history = useHistory()
    
    function onChange(ev){
        const { name, value } = ev.target

        setValues({...values, [name]: value})
    }

    function onSubmit(ev){
        ev.preventDefault()

        axios.post('http://localhost:5000/promotions', values)
            .then(response => {
                history.push('/')
            })
    }

    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="title">Título</label>
                    <input type="text" id='title' name='title' onChange={onChange} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url">Link</label>
                    <input type="text" id='url' name='url' onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl">Image (URL)</label>
                    <input type="text" id='imageUrl' name='imageUrl' onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price">Preço</label>
                    <input type="number" id='price' name='price' onChange={onChange}/>
                </div>
                <div>
                    <button type='submit'>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm;