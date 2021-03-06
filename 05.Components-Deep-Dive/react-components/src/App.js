import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Body from './components/Body';
import Footer from './components/Footer';
import FooterHoc from './components/FooterHoc';

// const booksData = [
//     { title: 'Harry Potter', description: 'Wizzards and stuff', author: 'J.K.Rowling', isSelected: false },
//     { title: 'Programming with JS', description: 'Guide to programming', isSelected: false },
//     { title: 'The Bible', description: 'Most important book', isSelected: false },
//     { title: 'Chronicles of Narnia', description: 'Adventure', isSelected: false },
//     { title: 'Ala-Bala', description: 'Missing book', isSelected: false }
// ];

function App() {
  return (
    <div className="site-wrapper">
      <img src={logo} className="logo" alt="logo" />
      <Heading>
        <h2>Our Custom Library Children</h2>
        <h3>Fovorite Books</h3>
      </Heading>
      {/* <Body booksData={booksData} /> */}
      <Body />
      <hr/>
      <Footer />
      <hr/>
      <FooterHoc />
      <hr/>
    </div>
  );
}

export default App;
