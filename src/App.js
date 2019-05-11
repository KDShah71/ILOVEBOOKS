import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Profile from "./components/Profile";
import OwnProfile from "./components/OwnProfile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EditProfile from "./components/EditProfile";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <CustomNavbar />

          <Route exact path="/" component={Home} />
          <div className="container mt-5">
            <Route path="/BookList" component={BookList} />
            <Route path="/View/:id" component={BookDetail} />
            <Route path="/User/:id" component={Profile} />
            <Route path="/OwnProfile/:id" component={OwnProfile} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/EditProfile" component={EditProfile} />
            <Route path="/Editpost/:postId" component={EditPost} />
          </div>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
