import ReactDOM from 'react-dom'

import './styles.css'

const modalRoot = document.getElementById('modal')

const UIModal = ({ children, isOpen, onClickClose }) => {
    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="ui-modal__overlay">
            <div className="ui-modal">
                <button 
                    type="button" 
                    className='ui-modal__close-button'
                    onClick={onClickClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

export default UIModal;