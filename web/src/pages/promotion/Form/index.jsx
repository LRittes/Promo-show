import { useParams } from "react-router-dom";

import PromotionForm from "components/Promotion/Form";

import UIContainer from "components/UI/Container";

const PagePromotionForm = () => {
    const { id } = useParams()

    return (
        <UIContainer>
            <PromotionForm/>
        </UIContainer>
    ) 
        
}

export default PagePromotionForm;