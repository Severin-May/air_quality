import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const About = () => {
    const content_topics = ["Keywords:", "Programming Languages:", "Documentation:", "Source Code Repository:",
        "Mathematics:", "Bibliography:", "Acknowledgments:", "Supervisor:", "Developer:"];
    const details = [];

    const content = [
        { topic: "Keywords:", details: "ECG, Binary Classification, Adaptive Transformations, Variable projection, Neural Networks" },
        { topic: "Stack:", details: "JavaScript (React.js), Python (Pytorch), Node.js, Babel, Webpack, SCSS" },
        { topic: "Acknowledgments:", details: "My supervisor, Tamás Dózsa, family and friends, ELTE CS faculty professors" },
        { topic: "Supervisor:", details: "Tamás Dózsa" },
        { topic: "Developer:", details: "Aichurok Kanatbekova" },
    ];

    return (
        <div className="articles-container">
            <div>
                <h1 className="title">
                    This program is the final result of a Bachelor's degree thesis project at ELTE University,
                    Computer Science (BSc). It was developed using the following tools and resources:
                </h1>
            </div>
            <div className="list-container">
                <ul className="faq-list">
                    {content.map(({ topic, details }, index) => (
                        <div key={index} className="article-list">
                            <li className="article-item">
                                <div className="about-details topic">{topic}</div>
                                <div className="about-details">{details}</div>
                            </li>
                        </div>
                    ))}
                    <li className="article-list">
                        <div className="about-details topic">Source code repositories:</div>
                        <div className="about-details"><a href="https://gitlab.com/minihorse5/ECG-classifier-backend">backend</a> <a href="https://gitlab.com/minihorse5/ecg-classifier-frontend">frontend</a></div>
                    </li>
                </ul>
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

export default About;