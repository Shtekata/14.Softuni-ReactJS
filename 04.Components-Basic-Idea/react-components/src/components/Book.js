const Book = (x) => (
    <article>
        <h3>{x.title}</h3>
        <p>{x.description||'Default Description'}</p>
    </article>
);
export default Book;