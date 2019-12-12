import React from "react";
import JoditEditor from "jodit-react";
import "./App.css";

class App extends React.Component {
  state = {
    config: {
      readonly: false
    },
    value: "Test",
    spin: 0
  };

  render() {
    return (
      <div className="App">
        <JoditEditor
          value={this.state.value}
          config={this.state.config}
          onChange={console.log}
        />
      </div>
    );
  }
}

export default App;
