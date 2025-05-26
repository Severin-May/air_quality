import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const About = () => {
    const content_topics = ["Keywords:", "Programming Languages:", "Documentation:", "Source Code Repository:",
        "Mathematics:", "Bibliography:", "Acknowledgments:", "Supervisor:", "Developer:"];
    const details = [];

    const content = [
        { topic: "Keywords:", details: "Air pollution, Machine Learning, XGB Regressor, Random Forest Regressor, Extra Trees Regressor, Neural Networks, PM2.5, PM10, AQI" },
        { topic: "Stack:", details: "JavaScript (React.js), Python (pandas, scikit-learn, numpy), Node.js, Babel, Webpack, SCSS" },
        { topic: "Acknowledgments:", details: "My supervisor, Hossam" },
        { topic: "Supervisor:", details: "AL-Magsoosi Husam Kareem Farhan" },
        { topic: "Developer:", details: "Aichurok Kanatbekova" },
    ];

    return (
        <div className="articles-container">
            <div>
                <h1 className="title">
                    This program is the final result of a Project Lab independent course at BME University, Computer Science (MSc). 
                    It was developed using the following tools and resources:
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
                        <div className="about-details"><a href="https://github.com/Severin-May/air_quality_be">backend</a> <a href="https://github.com/Severin-May/air_quality">frontend</a></div>
                    </li>
                </ul>
            </div>

            <div>

            </div>
        </div>
    );
}

export default About;