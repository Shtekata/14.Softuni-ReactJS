import { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div>
                <h2>Our Book Collection</h2>
                <ul className="book-list">
                    {
                        this.props.books.map(x=><li><Book title={x.title} description={x.description}/></li>)
                    }
                    <li><Book title='Something' /></li>
                </ul>
            </div>
        );
    }
}

export default BookList;