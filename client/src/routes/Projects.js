import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import USFK from "../assets/usfk.png";
import Graph from "../assets/graph.png";
import Slack from "../assets/slack.jpg";
import Mask from "../assets/syno.jpg";



function Project() {
    return (
        <div className="project-wrapper">
            <p className="project-wrapper-title"> Projects_</p>

            <div className="project-container">
                <div className="project-container-each">
                    <div className="project-container-each-picture"> <img src={Graph} className="project-picture" alt="Graph"/> </div>
                    <div className="project-container-each-desc">
                        <div>
                            <p className="project-container-each-desc-title"> PYTHON GRAPH / ALGORITHM LIBRARY </p>
                            <p className="project-container-year"> May. 2021 </p>
                        </div>
                        <p className="project-container-each-desc-exp">
                            An Object-Oriented programming design and implementation of graph library.
                            The library handles graph operations such as Strongly Connected Components (SCC), 
                            Minimum Spanning Tree (MST), and Single-Source Shortest Paths (SSSP) 
                            with the help of advanced computer science algorithms such as Kosaraju, Kruskal ad Dijkstra Algorithms.
                        </p>
                        <ul className="project-stacks">
                            <li> Python </li>
                            <li> Graph Algorithms </li>
                        </ul>
                        <div className="project-icons">
                            <FaGithubSquare size={35} onClick={() => window.open("https://github.com/jiselectric/CSCI3383_Project", "__blank")}/> 
                        </div>
                    </div>
                </div>

                <hr className="line-break"/>

                <div className="project-container-each">
                    <div className="project-container-each-picture"> <img src={Mask} className="project-picture" alt="Mask"/> </div>
                    <div className="project-container-each-desc">
                        <div>
                            <p className="project-container-each-desc-title"> SYNOTEX: FACE SCANNER FOR MASK DETECTION </p>
                            <p className="project-container-year"> Jan. 2021 </p>
                        </div>
                        <p className="project-container-each-desc-exp">
                            A mobile application that scans the face size of a user that would recommend the company's mask products that fit the facial size. 
                            The ensemble learning classification model trained from a public dataset published in 2004, 2010, 
                            and 2015 to train a model to project the length from ear-bears to philtrum. Currently available in Andriod Playstore.
                        </p>
                        <ul className="project-stacks">
                            <li> React-Native </li>
                            <li> Python </li>
                            <li> Flask </li>
                            <li> AWS </li>
                        </ul>
                        <div className="project-icons">
                            <AiOutlineGlobal size={35} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.lynxbus", "__blank")}/>
                        </div>
                    </div>
                </div>

                <hr className="line-break"/>

                <div className="project-container-each">
                    <div className="project-container-each-picture"> <img src={USFK} className="project-picture" alt="USFK"/> </div>
                    <div className="project-container-each-desc">
                        <div>
                            <p className="project-container-each-desc-title"> USFK COVID-19 HOTLINE </p>
                            <p className="project-container-year"> Jan. 2020 </p>
                        </div>
                        <p className="project-container-each-desc-exp">
                            A web service composed of live updates, self-assessment, 
                            hotspot tracker, and contact features to inform the United States Forces Korea (USFK) 
                            community on COVID-19 information. 
                            The service provided random digits to the user which the hospital's 
                            hotline agent could utilize to quickly browse through the stored assessment data.                             
                        </p>
                        <ul className="project-stacks">
                            <li> HTML </li>
                            <li> CSS </li>
                            <li> JavaScript </li>
                            <li> Flask </li>
                            <li> Beautiful Soup </li>
                            <li> MySQL </li>
                            <li> AWS </li> 
                        </ul>
                        <div className="project-icons">
                            <AiOutlineGlobal size={35} className="icon-left" onClick={() => window.open("http://www.usfkcorona.com/", "__blank")}/> 
                            <FaGithubSquare size={35} onClick={() => window.open("https://github.com/jiselectric/549-corona", "__blank")}/> 
                        </div>
                    </div>
                </div>

                <hr className="line-break"/>

                <div className="project-container-each">
                    <div className="project-container-each-picture"> <img src={Slack} className="project-picture" alt="Slack"/> </div>
                    <div className="project-container-each-desc">
                        <div>
                            <p className="project-container-each-desc-title"> SLACK APP : 'MAPBOT' </p>
                            <p className="project-container-year"> Jun. 2019 </p>
                        </div>
                        <p className="project-container-each-desc-exp"> A Slack application that automatically sends the Google Map preview 
                        and corresponding URL to the users when activated.  </p>
                        <ul className="project-stacks">
                            <li> HTML </li>
                            <li> CSS </li>
                            <li> JavaScript </li>
                            <li> Heroku </li>
                        </ul>
                        <div className="project-icons">
                           <FaGithubSquare size={35} onClick={() => window.open("https://github.com/jiselectric/slack-mapbot", "__blank")}/> 
                        </div>
                    </div>
                </div>
            </div>

            <hr className="about-line-break"/>
        </div>
    )
}

export default Project;