import { useEffect, useState } from "react";
import * as petService from '../../services/petsService';
import { Link } from 'react-router-dom';

const PetDetails = ({ match }) => {
    const [x, y] = useState({});
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(y)
    }, [match]);
    return (
        <section className="myPet">
            <h3>Name: {x.name}</h3>
            <p className='category'>Category: {x.category}</p>
            <p className="img"><img src={x.imageURL} /></p>
            <p className="description">{x.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${x.id}/edit`}><button className="button">Edit</button></Link>
                <Link to={`/pets/details/${x.id}/delete`}><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
            </div>
            <style jsx>{`
            .button{margin: 10px;} .description{padding: 0;} .category{margin: 15px;}`}</style>
        </section>
    )
};
export default PetDetails;