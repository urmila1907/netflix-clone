import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Movie from "./pages/movie/Movie";
import MovieList from "./pages/movieList/MovieList";
import Login from "./pages/login/Login";
import NewList from "./pages/newList/NewList";
import List from "./pages/list/List";
import ListList from "./pages/listList/ListList";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route exact path="/movies" element={<MovieList />} />
              <Route path="/movies/:movieId" element={<Movie />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route exact path="/lists" element={<ListList />} />
              <Route path="/lists/:listId" element={<List />} />
              <Route path="/newList" element={<NewList />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
