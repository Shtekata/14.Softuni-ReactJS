import { useEffect, useState } from "react";
import * as petService from '../../services/petsService';
import InputError from "../Shared/InputError/InputError";

const EditPetDetails = ({ match, history }) => {
    const [x, y] = useState({});
    const [err, setErr] = useState('');
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(y)
    }, [match]);
    const onDescriptionSaveSubmit = (z) => {
        z.preventDefault();
        petService.update({ ...x, description: z.target.description.value })
            .then(z => history.push(`/pets/details/${x.id}`));
    }
    const onDescriptionChangeHandler = (z) => {
        z.target.value.length < 10 ? setErr('Description too short!') : setErr('');
        y({ ...x, description: z.target.value })
    };
    return (
        <section className="detailsMyPet">
            <h3>{x.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {x.likes}</p>
            <p className="img">
                <img src={x.imageURL} />
            </p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea className='description' type="text" name="description" defaultValue={x.description} onBlur={onDescriptionChangeHandler} />
                <InputError>{err}</InputError>
                <button className="button">Save</button>
            </form>
            <style jsx>{`
            .detailsMyPet .description{margin-bottom: 0; padding: .5rem;}
            .button{margin:.5rem;}
            `}</style>
        </section>
    )
};
export default EditPetDetails;