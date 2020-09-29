import React from 'react';
import './App.css';
import './app.scss';
import 'react-toastify/dist/ReactToastify.css';


// components
import AccNavlink from './Components/Academic/Navlinks/navlinks'
import PostList from './Components/Academic/Posts/postlist'
import PostMisc from './Components/Academic/Posts/post_misc'
import AppBanner from './Components/Banner/appBanner';


function App() {
  
  return (
    
      <>        
        <div className="BoxBanner">
          <div className="BoxBanner_inn">
            <AppBanner />
          </div>
          {/* .col-12 */}
          </div>
          <div className="row" style={{margin: '0', width: '100vw'}}>
          <div className="col-md-3 col-sm-3 left_content" id="myScrollspy">
            <AccNavlink />
          </div>
          {/* .col-md-3 */}

          <div className="col-md-6 col-sm-9">
            <h4>Posts</h4> <hr/>
            <PostList />
          </div>
          {/* .col-md-6 */}

          <div className="col-md-3 hidden-sm  right_content">
            <PostMisc />
          </div>
          {/* .col-md-3 */}
        </div>
        {/* .row */}
      </>
  );
}

export default App;
