import '../css/input.css';

const Input = ({ className, type, value, id, placeholder, readOnly }) => (
    <input className={className} id={id} type={type} value={value} placeholder={placeholder} readOnly={readOnly} />
);

export default Input