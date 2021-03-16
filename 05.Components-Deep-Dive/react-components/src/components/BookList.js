import { Component } from 'react';
import Book from './Book';
import bookService from '../services/bookService';

class BookList extends Component {
    constructor(props) {
        super()
        this.state = { compId: {}, books: [] }
    }

    bookClicked = (x) => console.log(`The book ${x} has been added to basket!`)

    changeIsSelected = (id) => {
        let compId = this.state.compId;
        if (!compId[id]) compId[id] = { isSelected: false }
        compId[id].isSelected ? compId[id].isSelected = false : compId[id].isSelected = true;
        this.setState({ compId })
    }

    componentDidMount() {
        setTimeout(() => {
            bookService.getAll()
                .then(x => this.setState(() => ({ books: x })));
        }, 5000);
    }

    render() {
        let idComp = 0
        if (this.state.books.length === 0) return <h2>Loading...</h2>;
        return (
            <div>
                <h2>Our Book Collection</h2>
                <ul className="book-list">
                    {
                        this.state.books.map(x =>
                            <li key={idComp}>
                                <Book
                                    id={idComp = idComp + 1}
                                    title={x.title}
                                    description={x.description}
                                    author={x.author}
                                    stateComp={this.state.compId}
                                    clickHandler={(y) => {
                                    this.bookClicked.bind(this, x.title)()
                                    this.changeIsSelected.bind(this, y)()
                                }} />
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default BookList;