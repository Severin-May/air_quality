import React from "react";

const Classify = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.inputReceived} onClick={props.handleClassify}>
                Classify
            </button>
        </div>
    );
}

export default Classify;