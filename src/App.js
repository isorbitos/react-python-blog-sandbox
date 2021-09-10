import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllPosts from './pages/AllPosts';
import EditPost from './pages/EditPost';
import NewPost from './pages/NewPost';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';

function App() {



  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to='/posts' />
        </Route>
        <Route path="/posts" exact>
          <AllPosts />
        </Route>
        <Route path='/posts/:postId'>
          <PostDetail />
        </Route>
        <Route path="/new-post">
            <NewPost />
        </Route>
        <Route path='/edit-post/:postId'>
          <EditPost />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
    
  );
}

export default App;
