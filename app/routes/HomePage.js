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
              <Column col={12} style={{ backgroundColor: "#d18484" }}>
                <div
                  style={{
                    height: "180px",
                    paddingTop: "70px",
                    paddingBottom: "70px"
                  }}
                >
                  <Row>
                    <Column col={7} style={{ backgroundColor: "#ffffff" }}>
                      <div style={{ paddingLeft: "40px" }}>
                        <img
                          src="https://github.com/eunjishim/ej_shim/blob/master/app/assets/Oval%203.png?raw=true"
                          style={{ width: "40" }}
                        />
                      </div>
                    </Column>
                    <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                      <div style={{ width: "100px" }}>
                        <a href="/work"><span>Work</span></a>
                      </div>
                    </Column>
                  </Row>
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
