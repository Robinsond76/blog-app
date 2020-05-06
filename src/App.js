import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/layout/Navbar';
import { BlogProvider } from './context/blogs/blogContext';

//Blog Pages
import BlogPost from './Components/Blogs/BlogPost';
import BlogNew from './Components/Blogs/BlogNew';
import BlogEdit from './Components/Blogs/BlogEdit';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='ui main text container'>
          <BlogProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blogs/new' component={BlogNew} />
              <Route path='/blogs/:id' exact component={BlogPost} />
              <Route exact path='/blogs/:id/edit' component={BlogEdit} />
            </Switch>
          </BlogProvider>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
