import React from "react";
import ECGInput from "./ECGInput";
import Classify from "./Classify";
import Result from "./Result"
import axios from 'axios';
import ClassifyingAnimation from "./ClassifyingAnimation";

export default class ECGClassifier extends React.Component {

    state = {
        selectedFile: null,
        options: [],
        selectedModel: undefined,
        isLoading: false,
        resultData: null,
    }

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

    componentDidUpdate(prevState, prevProps) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("update");
        }
    }

    handleUploadFile = (file) => {
        const allowedTypes = ["text/csv"];
        if (file && !allowedTypes.includes(file.type)) {
            this.setState({
                selectedFile: null,
            });
            console.log("handleUploadFile");
            return "Incorrect file format! It should be .CSV";
        }

        this.setState({
            selectedFile: file,
        });
    }

    handleClassify = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true, resultData: null });

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        formData.append('model', this.state.selectedModel);

        axios.post('http://localhost:5000/api/v1/file-upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(resp => {
            console.log("Response:", resp.data);
            this.setState({ isLoading: false, resultData: resp.data });
        }).catch(error => {
            console.error('Error uploading file:', error);
            this.setState({ isLoading: false });
        });
    }

    handleSelectedModel = (model) => {
        console.log("Handling selected option", model);
        this.setState(() => ({ selectedModel: model }));
    }

    render() {
        const title = "ECG-classifier";
        const subtitle = "Let's scan your heartbeat for VEB arrythmias. Use records 106, 107, 112, 116, 201, 212, 215, 228, 231 for testing"
        return (
            <div className="content">
                <div className="container">
                    <div className="title">
                        {title}
                    </div>
                    <div className="title">
                        {subtitle}
                    </div>
                    <div className="widget">
                        <ECGInput handleUploadFile={this.handleUploadFile} handleSelectedModel={this.handleSelectedModel} />
                    </div>
                    <div>
                        <Classify inputReceived={!this.state.isLoading && this.state.selectedFile != null}
                            handleClassify={this.handleClassify}>
                        </Classify>
                    </div>
                </div>
                <div className="container">
                    {this.state.isLoading && <ClassifyingAnimation />}
                    {this.state.resultData && <Result resData={this.state.resultData}/>}
                </div>
                <div>
                    <h4 className="last-note-container">
                        NOTE:
                        This program is designed to predict diseases based on provided input data, but it is not
                        a replacement for professional medical diagnosis. The predictions made by this program are
                        for informational purposes only and should not be used as a definitive diagnosis.
                    </h4>
                </div>
            </div>
        );
    }
}

ECGClassifier.defaultProps = {
    options: []
}