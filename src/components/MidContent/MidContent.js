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
                      <h1> Api development</h1>

                      <p> Created react native projects from figma designs. Technology used expo and android stimulator </p>
                    </div>
                </div>


                 <div className="data">
                    <img src={data} />


                    
                                    <div className='mobile'>
                      <h1> Api development</h1>

                      <p> Created react native projects from figma designs. Technology used expo and android stimulator </p>
                    </div>
                </div>


            </div>

            <div className="Projects">
                <h1>Project i have worked on</h1>

            </div>

        </div>
    )
}

export default MidContent;