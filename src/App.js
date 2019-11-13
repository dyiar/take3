import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Display from "./components/display_element.js";
import Zoomed from "./components/zoomed_element";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      singleCountry: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log(response);
        this.setState({ countries: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.countries.map(country => {
            return (
              <Route
                exact
                path="/"
                key={country.name}
                render={props => (
                  <Display
                    history={this.props.history}
                    country_name={country.name}
                    capital={country.capital}
                    region={country.region}
                    subregion={country.subregion}
                    changeName={this.changeName}
                  />
                )}
              />
            );
          })}
          <Route
            path="/country/:name"
            render={props => <Zoomed {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
