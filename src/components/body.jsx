import React from 'react'
import './style/body.css'
import "./style/header.scss";
import { Timeline } from '../data/timeline.js'

import Particles from "react-tsparticles";
import { option } from "./utility/paritcle";

export default function Body() {

    const particlesInit = (main) => {
        console.log(main);

    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <div style={{ fontFamily: "Cabin, sans-serif" }} class="container-fluid bg-dark ">
                <section className="particle-section">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{ ...option }}
                    />
                </section>

                <div className="events">
                    <h1 >Events</h1>
                    <div class="row ">
                        <div class="col-md-8 mx-auto">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-timeline2">

                                        {
                                            Timeline && Timeline.map(item => {
                                                return (
                                                    <>

                                                        <a class="timeline" href={`#events-${item.id}`}>
                                                            <span class="icon fa fa-globe"></span>
                                                            <p class="timeline-content"  >
                                                                <h3 class="title">{item.title}</h3>
                                                                <p class="description"  >
                                                                    starts from {item.date} {"  "},  {item.time}
                                                                </p>
                                                            </p>
                                                        </a>


                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


