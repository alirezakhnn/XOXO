import '../css/input.css';

const Input = ({ type, value, id, placeholder, readOnly }) => (
    <input id={id} type={type} value={value} placeholder={placeholder} readOnly={readOnly} />
);

export default Input