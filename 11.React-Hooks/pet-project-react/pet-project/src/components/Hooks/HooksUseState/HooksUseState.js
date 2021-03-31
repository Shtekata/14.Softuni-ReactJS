import { useState } from "react";

// let count = 1000;

const HooksUseState = () => {
    const [count, setCount] = useState(-10);
    // const [state, setState] = useState({
    //     count: 100,
    //     step: 1
    // });
    // let [, y] = useState(true);
    // let [count, setCount] = useState(-10);
    // let count = 1000;

    const onContainerButtonClickHandler = () => {
        // setCount(x => x + 1);
        setCount(x => x + 5 * step);
        console.log(count);
        setTimeout(x => console.log(count), 1000);
    };
    // const onContainerButtonClickHandler = () => {
    //     setState(x => ({ ...x, count: x.count + 5 * x.step }));
    //     console.log(state);
    // };

    // const onContainerButtonClickHandler = () => {
    //     count++;
    //     console.log(count)
    //     y(x => !x);
    // };

    // const onChangeSelectHandler = (e) => {
    //     setState(x => ({ ...x, step: +e.target.value }));
    //     console.log(state);
    // }
    const [step, setStep] = useState(1);
    const onChangeSelectHandler = (e) => {
        setStep(e.target.value);
        console.log(step);
    }

    return (
        <div className='div'>
            <h1>Hooks</h1>
            <br />
            <h1>Counter</h1>
            <div className='number'>{count}</div>
            {/*<div className='number'>{state.count}</div>*/}
            <button className='hook-button' onClick={onContainerButtonClickHandler}>INCREMENT</button>
            <label className='label'> STEP
                <select className='select' name="step" onChange={onChangeSelectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            <style jsx>{`
            .div {text-align: center;}
            .number {font-size: 5rem; font-weight: bold;}
            .hook-button {
                padding: 1rem;
                border-radius: 15px;
                background: blueviolet;
                color: wheat;
                font-size: 20px;
                font-weight: bold;
                outline: none;
            }
            .label {
                margin: 30px;
            }
            .select {
                padding: 5px;
                margin: 5px;
            }
            `}</style>
        </div>
    )
};
export default HooksUseState;