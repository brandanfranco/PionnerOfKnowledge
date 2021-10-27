import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Products from "./componentes/Products";
import ProductsItem from "./componentes/ProductsItem";

function App() {
  {
    return (
      <>
        <BrowserRouter>
          <div>
            <header className="alert alert-secondary mb-0">
              <h1 className="display-1 text-center">Loading....</h1>
            </header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/Products">
                    By Chemical Name{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/ProductsItem">
                    By Chemical title{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <main className="container">
              <Route path="/Products" component={Products}></Route>
              <Route path="/ProductsItem" component={ProductsItem}></Route>
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
