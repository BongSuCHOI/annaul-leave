import ReactDom from 'react-dom';

const ModalPortal = ({ children }) => {
	return ReactDom.createPortal(children, document.getElementById('modal-root'));
};

export default ModalPortal;
