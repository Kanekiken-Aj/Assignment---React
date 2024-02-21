import React, { useState } from "react";

// Define your higher order component
const withStyle = (WrappedComponent) => {

  return class StyledComponent extends React.Component {
    render() {
      const { mode, ...rest } = this.props;
      const darkModeStyle = {
        backgroundColor: "black",
        color: "white",
      };

      // Style object for light mode
      const lightModeStyle = {
        backgroundColor: "white",
        color: "black",
      };

      // Apply the style based on the mode
      const combinedStyle = mode === "dark" ? darkModeStyle : lightModeStyle;

      // Render the wrapped component with the combined styles
      return <WrappedComponent {...rest} style={combinedStyle} />;
    }
  };
};

// Example component that will be wrapped with styles
const MyComponent = (props) => {
  return (
    <body style={props.style}>
      <p>This is my component</p>
    </body>
  );
};

// Wrap MyComponent with styles using the HOC
const StyledMyComponent = withStyle(MyComponent);

// Use the styled component in your application
const App = () => {
  // State to track the current mode (true for dark mode, false for light mode)
  const [mode, setMode] = useState("light");

  // Function to toggle the mode
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>Assignment 2 Mode Switching </h1>
      <StyledMyComponent mode={mode} />
      <button onClick={toggleMode}>{mode === "light" ? "Dark Mode" : "Light Mode"}</button>
    </div>
  );
};

export default App;
