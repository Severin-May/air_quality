import React from 'react';

export default class ECGInput extends React.Component {
    state = {
        error: undefined,
        dateOptions: [
            "2021-01-20", "2021-01-21", "2021-01-22", "2021-01-23", "2021-01-24", "2021-01-25", "2021-01-26",
            "2021-01-27", "2021-01-28", "2021-01-29", "2021-01-30", "2021-01-31", "2021-02-01", "2021-02-02",
            "2021-02-03", "2021-02-04", "2021-02-05", "2021-02-06", "2021-02-07", "2021-02-08", "2021-02-09",
            "2021-02-10", "2021-02-11", "2021-02-12", "2021-02-13", "2021-02-14", "2021-02-15", "2021-02-16",
            "2021-02-17", "2021-02-18", "2021-02-19", "2021-02-20", "2021-02-21", "2021-02-22", "2021-02-23",
            "2021-02-24", "2021-02-25", "2021-02-26", "2021-02-27", "2021-02-28", "2021-03-01", "2021-03-02",
            "2021-03-03", "2021-03-04", "2021-03-05", "2021-03-06", "2021-03-07", "2021-03-08", "2021-03-09",
            "2021-03-10", "2021-03-11", "2021-03-12", "2021-03-13", "2021-03-14", "2021-03-15", "2021-03-16",
            "2021-03-17", "2021-03-18", "2021-03-19", "2021-03-20", "2021-03-21", "2021-03-22", "2021-03-23",
            "2021-03-24"
        ]

    };

    handleSelectedModel = (event) => {
        event.preventDefault();
        const option = event.target.value;
        if (option) {
            const error = this.props.handleSelectedModel(option);
            this.setState({ error: error });
        }
    }

    // handleDateChange = (event) => {
    //     const date = event.target.value;
    //     this.setState({ error: null });
    //     this.props.handleDateChange({ target: { value: date } });
    // };

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
                        <option value="random_forest_regressor" className="menu-item">Random Forest Regressor</option>
                        <option value="extra_trees_regressor" className="menu-item">Extra Trees Regressor</option>
                        <option value="xgb_regressor" className="menu-item">XGB Regressor</option>
                        <option value="lstm" className="menu-item">LSTM</option>
                    </select>

                    <select className="dropdown" value={this.props.selectedDate || ''} onChange={this.handleDateChange}>
                        {this.state.dateOptions.map((date) => (
                            <option key={date} value={date} className="menu-item">
                                {date}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        );
    }
}


