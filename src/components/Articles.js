import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Articles = (props) => {
    return (
        <div className="articles-container">
            <div>
                <ul className="article-list">
                    <li className="article-item">
                        <a href="https://www.anesthesiology.theclinics.com/article/S0889-8537(06)00056-3/fulltext">What is ecg?</a>
                    </li>
                    <li className="article-item">
                        <a href="https://www.anesthesiology.theclinics.com/article/S0889-8537(06)00056-3/fulltext">Diseases that can be determined from ecg</a>
                    </li>
                    <li className="article-item">
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/S1056871909002421">Automated ECG processing</a>
                    </li>
                    <li className="article-item">
                        <a href="https://link.springer.com/chapter/10.1007/978-3-319-25733-4_25">Adaptive Hermite Functions in ECG classification</a>
                    </li>
                    <li className="article-item">
                        <a href="https://www.sciencedirect.com/science/article/abs/pii/https://ieeexplore.ieee.org/document/6269067">Heartbeat Classification</a>
                    </li>
                    <li className="article-item">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/30422584/">Premature Ventricular Contraction</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Articles;