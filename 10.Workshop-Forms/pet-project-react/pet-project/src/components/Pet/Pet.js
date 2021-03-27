import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as petService from '../../services/petsService';

const Pet = ({ id, name, category, imageURL, description, likes }) => {
    const [pet, setPet] = useState({ id, name, category, imageURL, description, likes });

    const onPetButtonClickHandler = () => {
        petService.pet(pet.id)
            .then(x => setPet(x));
    };
    
    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} alt='' /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <Link to="#"><button className="button" onClick={onPetButtonClickHandler}><i className="fas fa-heart"></i> Pet</button></Link>
                <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> {pet.likes}</span>
            </div>
            <style jsx>{`
        .button{margin: 0 .5rem; outline: none;}
        .description{padding: 0 2rem;}
        .img{height: 10rem;}`}</style>
        </li>
    )
};
export default Pet;