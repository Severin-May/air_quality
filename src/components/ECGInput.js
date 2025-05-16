import React from 'react';

export default class ECGInput extends React.Component {
    state = {
        error: undefined,
    };

    handleSelectedModel = (event) => {
        event.preventDefault();
        const option = event.target.value;
        if (option) {
            const error = this.props.handleSelectedModel(option);
            this.setState({ error: error });
        }
    }

    handleDateChange = (event) => {
        const date = event.target.value;
        this.setState({ error: null });
        this.props.handleDateChange({ target: { value: date } });
    };

    render() {
        const maxDate = new Date().toISOString().split('T')[0];
        
        return (
            <div className='container'>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option">
                    <select className="dropdown" value={this.props.selectedModel || ''} onChange={this.handleSelectedModel}>
                        <option value="" className="menu-item">Select a model</option>
                        <option value="FCNNet" className="menu-item">Fully-connected Neural Networks</option>
                        <option value="CNNet" className="menu-item">Convolutional Neural Networks</option>
                    </select>

                    <label className="add-option__input">
                        Select a past date:
                        <input
                        type="date"
                        max={maxDate}
                        value={this.props.selectedDate || ''}
                        onChange={this.handleDateChange}
                        />
                    </label>
                </form>
            </div>
        );
    }
}


