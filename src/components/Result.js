import React from "react";

const Result = (props) => {
    const resData = props.resData;

    const downloadFile = () => {
        if (!resData) return;

        const contentString = Object.entries(resData)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        const blob = new Blob([contentString], { type: 'text/plain' });
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
                {resData ? (
                    <ul className="results">
                        {Object.entries(resData).map(([key, value]) => (
                            <li key={key}>{`${key}: ${value}`}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No result available.</p>
                )}
                <div className="button-container">
                    <button className="button" onClick={downloadFile}>
                        Download FILE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result;
