import { useParams } from "react-router-dom";

const PagePromotionForm = () => {
    const { id } = useParams()

    return (
        <div>
            Form
            {id && (
                <h1>id: {id}</h1>
            )}
        </div>
    ) 
        
}

export default PagePromotionForm;