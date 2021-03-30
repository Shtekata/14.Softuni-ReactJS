import React, { Component } from 'react';

const options = [
    { label: 'IT', value: 'it' },
    { label: 'Unemployed', value: 'unemployed' },
    { label: 'Engineer', value: 'engineer' }
];

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = { 
            username: 'Pesho',
            age: 18, bio: 'Lorem Ipsum',
            occupation: 'engineer',
            errors: { email: '', username: '' }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.emailInput = React.createRef();
    };

    onSubmitHandler(x) {
        x.preventDefault();
        // console.log(x.target.username.value)
        // console.log(x.target.age.value)
        const { username, age, bio, occupation } = this.state;
        console.log(username, age, bio, occupation);

        if (this.state.username.length < 5) {
            console.log('Error: Not valid username!');
            this.setState(x => ({ errors: { ...x.errors, username: 'Your name should be at least 5 characters long!' } }));
        }
        else this.setState(x => ({ ...x.errors, errors: { username: '' } }));
        
        if (!this.emailInput.current.value.includes('@')) {
            this.setState(x => ({ errors: { ...x.errors, email: 'There should be a @ sign' } }));
            this.emailInput.current.value = '';
            this.emailInput.current.focus();
            console.log('Error: Not valid email!');
        }
        else this.setState(x => ({ errors: { ...x.errors, email: '' } }));
    };

    // onChangeUsernameHandler(x) {
    //     this.setState({ username: x.target.value });
    // };
    // onChangeAgeHandler(x) {
    //     this.setState({ age: x.target.value });
    // };

    onChangeHandler(x) {
        this.setState({ [x.target.name]: x.target.value });
    };

    onChangeEmailHandler(x) {
        
    }

    render() {
        return (
            <div className='wrapper'>
                <h1>Demo Form</h1>
                <form onSubmit={this.onSubmitHandler}>
                    
                    <label className='padding' htmlFor="name">Username</label>
                    <input className='padding'
                        type="text" id='name' name='username'
                        value={this.state.username}
                        onChange={this.onChangeHandler} />
                    {this.state.errors.username && <span className='input-validation'>{this.state.errors.username}</span>}
                    
                    
                    <label className='padding' htmlFor="age">Age</label>
                    <input className='padding'
                        type="number" id='age' name='age'
                        value={this.state.age}
                        onChange={this.onChangeHandler} />
                    
                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        className='padding'
                        type="text"
                        id='email'
                        name='email'
                        placeholder='example@pesho.com'
                        onChange={this.onChangeEmailHandler}
                    />
                    {this.state.errors.email && <span className='input-validation'>{this.state.errors.email}</span>}
                    
                    <input className='padding' type="file" name='upload-picture' />

                    <label htmlFor="bio">Bio</label>
                    <textarea className='padding' name="bio" id="bio"
                        value={this.state.bio}
                        onChange={this.onChangeHandler} />
                    
                    <label htmlFor="occupation">Occupaton</label>
                    <select className='padding' name="occupation" id="occupation"
                        value={this.state.occupation}
                        onChange={this.onChangeHandler}>
                        {options.map(x =>
                            <option key={x.value} value={x.value}>{x.label}</option>
                        )}
                    </select>

                    <input className='padding' type="submit" value='Send' />
                    <button type='button' className='padding' onClick={this.onSubmitHandler}>Click</button>

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
                .input-validation{
                    color: red;
                    font-weight: bold;
                }
                `}</style>
            </div>
        );
    };
            
};
export default Demo;