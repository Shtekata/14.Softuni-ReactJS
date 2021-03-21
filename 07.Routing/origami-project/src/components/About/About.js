import { Redirect, Route, Switch, useHistory, withRouter } from "react-router";

const About = ({
    match,
    location, // window.location
    history   // window.history
}) => {

    // const history = useHistory();
    if (Math.random() > 0.8) {
        // return <Redirect to='/' />
        history.push('/');
        return null;
    }

    return (
        <main className='main'>
            <h1>About {match.params.name} Page! Age: {match.params.age}</h1>
            {/*<div>{console.log(match)}</div>
        <div>{console.log(location)}</div>
        <div>{console.log(history)}</div>*/}
            
            <Switch>
                <Route path='/about/Pesho/56'>
                    <h2>Pesho is the best!!!</h2>
                </Route>
            </Switch>
            
            <style jsx>{`
        h1{
            text-align: center;
            color: #234465;
            text-decoration: underline;
            margin: 1% 0 2% 0;
        }
        .main{
            width: 81%;
            height: auto;
        }
        `}</style>
        </main>
    )
};

// export default withRouter(About);
export default About;