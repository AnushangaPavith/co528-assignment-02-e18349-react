function App() {
  const [angle, setAngle] = React.useState(180);

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Remove leading zeros
    if (value.length > 1 && value[0] === "0") {
      value = value.replace(/^0+/, "");
    }

    value = Number(value);

    if (value > 360) {
      value = value % 360;
    }
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(Number(e.target.value));
  };

  const handleRadioChange = (e) => {
    setAngle(Number(e.target.value));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <input
          type="number"
          value={angle}
          onChange={handleInputChange}
          min="0"
        />
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
        <RadioButtons angle={angle} onChange={handleRadioChange} />
      </div>
    </div>
  );
}

// Render React App to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
