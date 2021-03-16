const Book = (x) => {
    const Author = () => <strong>x.author</strong>;
    const selectedObj = Object.assign({},x.stateComp) 
    const selectObj = Object.assign({}, selectedObj[x.id])
    const select = selectObj.isSelected
    return (
        <article className={select ? 'selected-book' : ''} onClick={()=>x.clickHandler(x.id)}>
            <h3 className='book-article' onClick={() => console.log(`Book title with id: ${x.id} is clicked!`)}>{ x.title }</h3>
            <p>{x.description}</p>
            <p><strong><Author/></strong></p>
        </article>
    )
};
export default Book;