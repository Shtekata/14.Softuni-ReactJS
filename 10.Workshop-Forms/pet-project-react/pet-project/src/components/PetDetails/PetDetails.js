import { useEffect, useState } from "react";
import * as petService from '../../services/petsService';
import { Link } from 'react-router-dom';

const PetDetails = ({ match }) => {
    const [x, y] = useState({});

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(y)
    }, [match]);

    const onPetButtonClickHandler = () => {
        petService.pet(x.id)
            .then(z => y(z));
    };

    return (
        <section className="myPet">
            <h3>Name: {x.name}</h3>
            <p className='pet-counter'>Pet counter: {x.likes}
                <div className='div-button'>
                    <button className="button" onClick={onPetButtonClickHandler}>
                        <i className="fas fa-heart"></i>Pet
                    </button>
                </div>
            </p>
            <p className='category'>Category: {x.category}</p>
            <p className="img"><img src={x.imageURL} /></p>
            <p className="description">{x.description}</p>
            <div className="pet-info">
                <Link to={`/pets/${x.id}/edit`}><button className="button">Edit</button></Link>
                <Link to={`/pets/details/${x.id}/edit`}><button className="button">Edit Description</button></Link>
                <Link to={`/pets/details/${x.id}/delete`}><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>{x.likes}</span>
            </div>
            <style jsx>{`
            .div-button{display: inline-block;}
            .button{margin: 10px; text-decoration: none; outline: none;}
            .description{padding: 0;}
            .category{margin: 0;}
            .pet-counter{margin: 0;}
            .img{height: 12rem;}
            `}</style>
        </section>
    )
};
export default PetDetails;