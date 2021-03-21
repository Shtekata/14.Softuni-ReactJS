import { Component } from 'react';
import * as postService from './services/postService';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [], selectedPost: null };
  };

  componentDidMount() {
    postService.getAll().then(x => this.setState(() => ({ posts: x })));
  };

  onAsideItemClickApp(id) {
    this.setState(() => ({ selectedPost: id }));
  }

  getPosts() {
    if (!this.state.selectedPost) return this.state.posts;
    return this.state.posts.find(x => x.id == this.state.selectedPost) != undefined
      ? [this.state.posts.find(x => x.id == this.state.selectedPost)] : this.state.posts;
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <Aside onAsideItemClick={this.onAsideItemClickApp.bind(this)} />
          <Switch>
            <Route path='/' exact>
              <Main posts={this.state.posts} />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/contact-us-custom' render={(props) => <h1>Contact Us Custom Page</h1>} />
            <Route path='/aside/:id'><Main posts={this.getPosts()} /></Route>
            <Route render={()=><h1>Error Page =&gt; :)</h1>} />
          </Switch>
        </div>
        <Footer />
        <style jsx>{`
        .app{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .container{
          display: flex;
          justify-content: space-around;
        }
        `}</style>
      </div>
    );
  }
}

export default App;
