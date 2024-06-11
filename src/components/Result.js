import React from "react";
import { Bar } from 'react-chartjs-2';

const Result = (props) => {

    console.log(props.resData)
    const data1 = {
        labeled: true,
        predicted_value: 0.0,
        accuracy: 99.5,
        recall: 87.2,
        precision: 89.1,
        f1_score: 99.9,
        loss: 0.111,
        num_healthy: 134,
        num_veb: 166
    }

    const condition = (element) => element == 0;

    const num_healthy = props.resData && props.resData['Predictions'].filter(condition).length;
    const num_veb = props.resData && props.resData['Predictions'].length - num_healthy;

    const orig_num_healthy = props.resData && props.resData['Original_labels'].filter(condition).length;
    const orig_num_veb = props.resData && props.resData['Original_labels'].length - orig_num_healthy;

    console.log(orig_num_healthy)
    console.log(orig_num_veb)

    const graph_data = {
        labels: ['Orig_healthy', 'Orig_VEB', 'Pred_Healthy', 'Pred_VEB'],
        datasets: [
            {
                label: 'result of classification',
                backgroundColor: 'rgba(75,192,192,0.9)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [orig_num_healthy, orig_num_veb, num_healthy, num_veb],
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
        console.log("download click");
        if (!props.resData) {
            return;
        }

        const contentString = Object.entries(props.resData)
            .filter(([key]) => key !== 'Predictions' && key !== 'Original_labels')
            .map(([key, value]) => `${key}: ${value}%`)
            .join('\n');

        const labelString = "\n#original healthy heartbeats: " + orig_num_healthy + " #original VEB heartbeats: " + orig_num_veb
            + "\n#predicted healthy heartbeats: " + num_healthy + " #predicted VEB heartbeats: " + num_veb + "\n";

        const blob = new Blob([labelString + contentString], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'classification_result.txt';
        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    };


    return (
        <div className="container-result">
            <div className="container">
                <h2>Your Results:</h2>
                <Bar data={graph_data} options={options} />
            </div>
            <div className="container">
                <h2>Details:</h2>
                {props.resData && (
                    <ul className="results">
                        {Object.entries(props.resData).map(([key, value]) => (
                            (key !== 'Predictions' && key !== 'Original_labels') && (
                                <li key={key}>{`${key}: ${value}%`}</li>
                            )
                        ))}
                    </ul>
                )}
                <div className="button-container">
                    <button className="button" onClick={downloadFile}>
                        Download FILE
                    </button>
                </div>
            </div>
            <div className="container">
            <p className="paragraph">
                TP - True Positive, TN - True Negative
                <br></br>
                FP - False Positive, FN - False Negative
                <br></br>
                Precision = TP / (TP + FP)
                <br></br>
                Recall/Sensitivity = TP / (TP + FN)
                <br></br>
                Accuracy = (TP + TN) / (TP + TN + FP + FN)
                <br></br> 
                F1 = (Precision × Recall)/(Precision + Recall)
                <br></br> 
                Recall_v, Precision_v, F1_v - VEB is counted as Positive
                <br></br> 
                Recall, Precision, F1 - Healthy is counted as Positive
                </p>
            </div>
        </div>
    );
};

export default Result;



