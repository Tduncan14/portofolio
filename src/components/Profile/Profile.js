import React,{useState, useEffect, useReducer} from 'react';
import Treek from '../../images/treek.jpg'
import './Profile.css'





const Profile = () => {

    const [isPressed, setPressed] = useState(false);


      useEffect(() => {

        console.log('isPressed',isPressed)



      },[isPressed])



    return(
        <div className="profile">

            <div className="leftProfile">
                
               <h1 className="leftName">Treshawn Duncan</h1>

              <p>  I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences</p>

                 

             <p className="secondP">With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into mobile development with React Native and Expo to expand my skill set and deliver versatile, cross-platform solutions.</p>



             <button  onClick={()=> setPressed(!isPressed)} className="buttonMe"> contact me</button>
            </div>



            <div class="rightProfile">
                 <img src={Treek} />
            </div>



        </div>
    )
}


export default Profile