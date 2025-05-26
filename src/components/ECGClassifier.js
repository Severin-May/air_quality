import React from "react";
import ECGInput from "./ECGInput";
import Classify from "./Classify";
import Result from "./Result";
import axios from "axios";
import ClassifyingAnimation from "./ClassifyingAnimation";

export default class ECGClassifier extends React.Component {
  state = {
    selectedDate: "",
    options: [],
    selectedModel: undefined,
    isLoading: false,
    resultData: null,
    error: null,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDateChange = (event) => {
    this.setState({ selectedDate: event.target.value });
  };

  handleClassify = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, resultData: null, error: null });

    axios
      .post("http://localhost:5000/api/v1/predict", {
        date: this.state.selectedDate,
        model: this.state.selectedModel,
      })
      .then((resp) => {
        this.setState({ isLoading: false, resultData: resp.data });
      })
      .catch((error) => {
        console.error("Error during prediction:", error);
        this.setState({
          isLoading: false,
          error: "Prediction failed. Please try again.",
        });
      });
  };

  handleSelectedModel = (model) => {
    this.setState(() => ({ selectedModel: model }));
  };

  render() {
    const title = "Air pollution prediction";
    const subtitle = "Pick a date";

    return (
      <div className="content">
        <div className="container">
          <div className="title">{title}</div>
          <div className="title">{subtitle}</div>
          <div className="widget">
            <ECGInput
              selectedDate={this.state.selectedDate}
              selectedModel={this.state.selectedModel}
              handleDateChange={this.handleDateChange}
              handleSelectedModel={this.handleSelectedModel}
            />
          </div>
          <div>
            <Classify
              inputReceived={
                !this.state.isLoading &&
                this.state.selectedDate !== "" &&
                this.state.selectedModel !== undefined
              }
              handleClassify={this.handleClassify}
            />
          </div>
          {this.state.error && (
            <p className="error" style={{ color: "red" }}>
              {this.state.error}
            </p>
          )}
        </div>

        <div className="container">
          {this.state.isLoading && <ClassifyingAnimation />}
          {this.state.resultData && <Result resData={this.state.resultData} />}
        </div>

        <div>
          <h4 className="last-note-container">
            NOTE: This program is designed to predict air pollution for the
            selected date
          </h4>
        </div>
      </div>
    );
  }
}

ECGClassifier.defaultProps = {
  options: [],
};
