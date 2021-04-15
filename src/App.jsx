// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/App/Footer";
import { Login } from "./components/App/Login";
import { NavBar } from "./components/App/NavBar";
import { Admin } from "./pages/Admin";
import { LandingPage } from "./pages/LandingPage";

// const url = "https://jsonplaceholder.typicode.com/users";
// const [users, setusers] = useState([]);
// const getApi = async () => {
//   const datausers = await fetch(url)
//     .then((response) => response.json())
//     setusers(datausers)
// };
// useEffect(() => {
//   getApi();
// }, []);
export function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/admin">
            <Login />
          </Route>
          <Route exact path="/admin/dashboard/:action">
            <Admin />
          </Route>
          <Route path="/">
            <header className="container mx-auto">
              <NavBar />
            </header>
            <LandingPage />
            <footer className="w-full bg-red-700">
              <Footer />
            </footer>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
