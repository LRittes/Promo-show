import { useEffect, useState } from "react";
import PromotionCard from "components/Promotion/Card";
import axios from 'axios'

const PagePromotionSearch = () => {
  const [promotion, setPromotion] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then(response => {
        setPromotion(response.data)
      })
  }, [])

  return (
    <div 
      style={{maxWidth: 800,
              margin: '30px auto',
              fontFamily: 'Arial', 
      }}>
        {promotion.map(promotion => (          
          <PromotionCard promotion={promotion}/>    
      ))}
    </div>
  )
}

export default PagePromotionSearch;