import React from 'react';
import ReactNative from '../../images/mobile-computer.png'
import Api from '../../images/boy-and-laptop.png'
import data from '../../images/icons-production.png'
import './midContent.css';



const MidContent = () => {

    return(
        <div className="MidContent">

            <div className="MoreTechnology">

                <div className="reactNative">
                    <img src={ReactNative} />

                    
                    <div className='mobile'>
                      <h1> Mobile development</h1>

                      <p> Created react native projects from figma designs. Technology used expo and android stimulator </p>
                    </div>
                </div>

                 <div className="api">
                    <img src={Api} />


                      <div className='mobile'>
                      <h1> Frontend development</h1>

                      <p>Developed front-end user interfaces using the client’s required technologies, collaborating closely with Figma designers and the project manager in an Agile environment </p>
                    </div>
                </div>


                 <div className="data">
                    <img src={data} />


                    
                                    <div className='mobile'>
                      <h1> Tech Lead / Mentor </h1>

                      <p>Ensured all project deliverables were completed on schedule and presented professionally during client Zoom meetings. Additionally, onboarded and mentored new developers and engineers, helping them quickly get up to speed and supporting their growth into stronger contributors.
                      </p>
                    </div>
                </div>


            </div>

            <div className="Projects">
                <h1>Project i have worked on</h1>


                 <div  className="ProjectTechnology">

                <div className="reactNative">
                    <img src={ReactNative} />

                    
                    
                </div>

                 <div className="api">
                    <img src={Api} />


                                    
                </div>




            </div>


            </div>

        </div>
    )
}

export default MidContent;