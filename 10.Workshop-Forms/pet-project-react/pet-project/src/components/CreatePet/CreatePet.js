import * as petsService from '../../services/petsService';
import { withRouter } from 'react-router-dom';
import PetFormView from '../PetFormView';

const CreatePet = ({ history }) => {

    const onSubmitHandler = (x) => {
        x.preventDefault();
        const { name, description, imageURL, category } = x.target;
        const data = { name: name.value, description: description.value, imageURL: imageURL.value, category: category.value };
        petsService.create(data)
            .then(x => history.push('/'))
            .catch(x => console.log(x));
    };

    return (
        <PetFormView onSubmitHandler={onSubmitHandler}/>
    )
};
export default CreatePet;
// export default withRouter(CreatePet);