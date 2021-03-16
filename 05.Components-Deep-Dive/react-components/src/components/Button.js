import './Button.css';

const Button = (x) => (
    <div className='button'>
        <button onClick={x.clickHandler}>Click me! I'm counter [{x.clicks}]</button>
    </div>
)
export default Button;