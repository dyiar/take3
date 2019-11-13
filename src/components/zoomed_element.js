import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Languages from "./languages";
import Currency from "./currencies";
import CallingCodes from "./callingCodes";

class Zoomed extends Component {
  constructor() {
    super();
    this.state = {
      codes: [],
      currencies: [],
      languages: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`
      )
      .then(response => {
        this.setState({
          codes: response.data[0].callingCodes,
          currencies: response.data[0].currencies,
          languages: response.data[0].languages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Link to="/">Back</Link>
        <div className="display-box">
          <h4>Calling Code</h4>
          <CallingCodes options={this.state.codes} />
        </div>
        <div className="display-box">
          <h4>Languages</h4>
          <Languages options={this.state.languages} />
        </div>
        <div className="display-box">
          <h4>Currencies</h4>
          <Currency options={this.state.currencies} />
        </div>
      </>
    );
  }
}

export default Zoomed;
