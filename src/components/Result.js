import React from "react";
import { Bar } from 'react-chartjs-2';

const Result = (props) => {
    console.log(props.resData);

    const data = props.resData || {
        date: "N/A",
        model: "N/A",
        predictions: {
            "PM2.5": 0,
            "PM10": 0,
            "NO2": 0,
            "O3": 0
        }
    };

    // Prepare graph data
    const graph_data = {
        labels: ['PM2.5', 'PM10', 'NO2', 'O3'],
        datasets: [
            {
                label: 'Air Pollution Levels (µg/m³)',
                backgroundColor: 'rgba(75,192,192,0.9)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: Object.values(data.predictions),
            },
        ],
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const downloadFile = () => {
        console.log("Download Clicked");
        if (!props.resData) {
            return;
        }

        const contentString = `Date: ${data.date}\nModel: ${data.model}\n\nPredicted Air Pollution Levels:\n` +
            Object.entries(data.predictions)
                .map(([key, value]) => `${key}: ${value} µg/m³`)
                .join('\n');

        const blob = new Blob([contentString], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `air_pollution_prediction_${data.date}.txt`;
        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    };


    return (
        <div className="container-result">
            <div className="container">
                <h2>Prediction Results:</h2>
                <Bar data={graph_data} options={options} />
            </div>
            <div className="container">
                <h2>Details:</h2>
                {props.resData && (
                    <ul className="results">
                        <li>Date: {data.date}</li>
                        <li>Model: {data.model}</li>
                        {Object.entries(data.predictions).map(([key, value]) => (
                            <li key={key}>{`${key}: ${value} µg/m³`}</li>
                        ))}
                    </ul>
                )}
                <div className="button-container">
                    <button className="button" onClick={downloadFile}>
                        Download Prediction
                    </button>
                </div>
            </div>
            <div className="container">
                <p className="paragraph">
                    <strong>Air Pollution Metrics:</strong>
                    <br />
                    PM2.5: Fine particulate matter ≤ 2.5 µm in diameter.
                    <br />
                    PM10: Particulate matter ≤ 10 µm in diameter.
                    <br />
                    NO2: Nitrogen dioxide, a key air pollutant.
                    <br />
                    O3: Ozone concentration in the air.
                    <br />
                    <br />
                    These values represent the predicted levels of pollutants for the selected date.
                </p>
            </div>
        </div>
    );
};

export default Result;
