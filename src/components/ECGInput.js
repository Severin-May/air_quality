import React from 'react';

export default class ECGInput extends React.Component {

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
    }

    state = {
        selectedFile: null,
        error: undefined,
        selectedModel: undefined
    }

    handleUploadFile = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const error = this.props.handleUploadFile(file);
            this.setState({ error: error });
            if (!error) {
                this.setState({ selectedFile: file });
            }
        }
    };

    handleSelectedModel = (event) => {
        event.preventDefault();
        const option = event.target.value;
        if (option) {
            const error = this.props.handleSelectedModel(option);
            this.setState({ error: error });
            if (!error) {
                this.setState({ selectedModel: option });
            }
        }
    }

    handleUploadClick = () => {
        this.fileInputRef.current.click();
    }

    render() {
        return (
            <div className='container'>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option">
                    <select className="dropdown" value={this.state.selectedModel} onChange={this.handleSelectedModel}>
                        <option value="" className="menu-item">Select a model</option>
                        <option value="FCNNet" className="menu-item">Fully-connected Neural Networks</option>
                        <option value="CNNet" className="menu-item">Convolutional Neural Networks</option>
                        <option value="VPNet4" className="menu-item">Variable-Projection NN with 4 Hermite params   </option>
                        <option value="VPNet8" className="menu-item">Variable-Projection NN with 8 Hermite params   </option>
                        <option value="VPNet12" className="menu-item">Variable-Projection NN with 12 Hermite params   </option>
                    </select>
                    <input
                        accept='.csv'
                        className="add-option__input"
                        type="file"
                        onChange={this.handleUploadFile}
                        name="file"
                    // style={{ display: 'none' }}
                    // ref={this.fileInputRef}
                    />
                    {/* <button className='button' onClick={this.handleUploadClick}>Upload a file</button> */}
                </form>
            </div>
        );
    }
}


