const PetFormView = ({ type, pet, onSubmitHandler, onChangeHandler }) => (
    <section className="create">
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>{type?'Edit Pet':'Add new Pet'}</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" value={pet.name} onChange={onChangeHandler}/>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            placeholder="Description" value={pet.description} onChange={onChangeHandler}></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageURL" id="image" placeholder="Image" value={pet.imageURL} onChange={onChangeHandler}/>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category" onChange={onChangeHandler}>
                            <option selected={pet.category==='Cat'?true:false} value='Cat'>Cat</option>
                            <option selected={pet.category==='Dog'?true:false} value='Dog'>Dog</option>
                            <option selected={pet.category==='Parrot'?true:false} value='Parrot'>Parrot</option>
                            <option selected={pet.category==='Reptile'?true:false} value='Reptile'>Reptile</option>
                            <option selected={pet.category==='Other'?true:false} value='Other'>Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Pet" />
            </fieldset>
        </form>
    </section>
);
export default PetFormView;