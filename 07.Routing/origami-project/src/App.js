import { Component } from 'react';
import * as postService from './services/postService';
import x from './App.module.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import y from './components/Main/Main.module.css';

class App extends Component {

  constructor(props) {
    super();
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
    return [this.state.posts.find(x => x.id == this.state.selectedPost)];
  }

  render() {
    return (
      <div className={x.app}>
        <Header />
        <div className={x.conteiner}>
          <Aside onAsideItemClick={this.onAsideItemClickApp.bind(this)} />
          <Switch>
            <Route path='/' exact>
              <Main posts={this.getPosts()} />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/contact-us-custom' render={(props)=><h1 className={y.main}>Contact Us Custom Page</h1>} />
            <Route render={()=><h1 className={y.main}>Error Page =&gt; :)</h1>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
