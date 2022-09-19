import '../css/input.css';

const Input = ({ type, value, id, placeholder }) => (
    <input id={id} type={type} value={value} placeholder={placeholder} />
);

export default Input