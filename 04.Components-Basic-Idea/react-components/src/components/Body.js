import { Component } from 'react';
import BookList from './BookList';

class Body extends Component{
    constructor(props){super()}
    render() {
        return (
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit omnis provident optio expedita error voluptas qui id illum nesciunt.</p>
                <BookList books={this.props.booksData}/>
            </main>
        )
    }
}

export default Body;