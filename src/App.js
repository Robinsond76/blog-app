import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/layout/Navbar';
import { BlogProvider } from './context/blogs/BlogContext';

//Blog Pages
import BlogPost from './Components/Blogs/BlogPost';
import BlogNew from './Components/Blogs/BlogNew';
import BlogEdit from './Components/Blogs/BlogEdit';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <BlogProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blogs/new' component={BlogNew} />
            <Route exact path='/blogs/:id' component={BlogPost} />
            <Route exact path='/blogs/:id/edit' component={BlogEdit} />
          </Switch>
        </BlogProvider>
      </Fragment>
    </Router>
  );
}

export default App;
