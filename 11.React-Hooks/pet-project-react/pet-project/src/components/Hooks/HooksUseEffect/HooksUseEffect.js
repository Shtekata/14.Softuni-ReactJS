import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const HooksUseEffect = ({match}) => {
    const [rend, setRend] = useState('');
    const [peopleId, setPeopleId] = useState(1);

    // const [character, setCharacter] = useState({ name: 'Nobody' });
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${peopleId}`, {});

    // useEffect(() => { setRend('Hello from Use Effect'); console.log('Hello from Use Effect') });
    useEffect(() => {
        setRend('Hello from Use Effect');
        console.log('Hello from Use Effect');
        // fetch(`https://swapi.dev/api/people/${peopleId}`)
        //     .then(x => x.json())
        //     .then(x => { setCharacter(x); console.log(x) });
        return () => console.log('Component will unmount');
    // }, []);
    }, [peopleId]);

    const changePeopleIdUp = () => { setPeopleId(x => x + 1); console.log(peopleId) };
    const changePeopleIdDown = () => { setPeopleId(x => x - 1); console.log(peopleId) };
    
    return (
        <div>
            <h1>{rend}</h1>
            <h1>{isCharacterLoading.toString()}</h1>
            <h2>{isCharacterLoading?'Loading...':character.name}</h2>
            <button className='demo' onClick={changePeopleIdUp}>Change people Id up</button>
            <button className='demo' onClick={changePeopleIdDown}>Change people Id down</button>
            <Link className='demo' to='/'>Home</Link>
            <style jsx>{`.demo {margin: 20px;}`}</style>
        </div>
    );
}
export default HooksUseEffect;