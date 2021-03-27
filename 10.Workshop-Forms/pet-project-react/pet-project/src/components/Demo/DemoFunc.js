import { useState } from "react";

const DemoFunc = (props) => {

    const [username, setUsername] = useState('Pesho');

    const onSubmitHandler = (x) => {
        x.preventDefault();
        console.log(x.target.username.value)
        console.log(x.target.age.value)
        console.log(props);
    }
    //     const onSubmitClickHandler = (x) => {
    //     console.log(x.target.parentNode.username.value)
    //     console.log(x.target.parentNode.age.value)
    // }
    const onChangeUsernameHandler = (x) => {
        setUsername(x.target.value)
    }
    return (
        <div className='wrapper'>
            <h1>Demo Form</h1>
            <form onSubmit={onSubmitHandler}>
                
                <label className='padding' htmlFor="name">Username</label>
                <input className='padding' type="text" id='name' name='username'
                    value={username}
                    onChange={onChangeUsernameHandler} />
                
                <label htmlFor="email">Email</label>
                <input className='padding' type="email" id='email' name='email' placeholder='example@pesho.com' />
                
                <label className='padding' htmlFor="age">Age</label>
                <input className='padding' type="number" name='age' />
                
                <input className='padding' type="file" name='upload-picture' />
                
                <input className='padding' type="submit" value='Send' />
                {/*<button type='button' className='padding' onClick={onSubmitClickHandler} >Click me!</button>*/}

            </form>
            <style jsx>{`
        .wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .padding{
            padding: .3rem;
            margin: .5rem;
            border-radius: 10px;
        }
        `}</style>
        </div>
    )
};
export default DemoFunc;