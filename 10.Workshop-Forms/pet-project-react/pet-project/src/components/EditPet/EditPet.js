import { useEffect, useState } from "react";
import PetFormView from "../PetFormView";
import * as petService from '../../services/petsService';

const EditPet = ({ match, history }) => {
    const [pet, setPet] = useState({});

    useEffect(() => petService.getOne(match.params.petId).then(x => setPet(x)), [match]);

    const onEditSubmitHandler = (x) => {
        x.preventDefault();
        petService.update(pet).then(x => history.push(`/pets/details/${pet.id}`));
    }

    const onChangeHandler = (e) => {
        setPet(x => ({ ...x, [e.target.name]: e.target.value }));
    }

    return (
        <PetFormView type='edit' onSubmitHandler={onEditSubmitHandler} pet={pet} onChangeHandler={onChangeHandler}/>
    )
};
export default EditPet;