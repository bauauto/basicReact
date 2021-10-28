import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const character = {
      sections: [
        {
          name: "Bau",
          job: "Engineer",
        },
        {
          name: "Mi",
          job: "Account",
        },
      ],
    };
    return (
      <div className="App">
        <Table characterData={character} />
      </div>
    );
  }
}

export default App;
