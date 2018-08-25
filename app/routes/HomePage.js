/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#6b6161" }}>
          <header>
            <Row>
              <Column col={6}>
                <div style={{ height: "180px", paddingTop: "70px" }}>
                  <img
                    src="https://github.com/eunjishim/ej_shim/blob/master/app/assets/Oval%203.png?raw=true"
                    style={{ width: "40px" }}
                  />
                </div>
              </Column>
            </Row>
          </header>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
