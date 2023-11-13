import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import { motion } from "framer-motion";
function MainComponent(){
    return(
        <div className="landing-page">
            <div className="left-container">
               <motion.h1 className="track-crypto-heading"
                    initial={{opacity:0, x:50}}
                    animate={{opacity:1, x:0} }
                    transition={{duration:1}}
                
                >
                    Track Crypto</motion.h1>
                <motion.h1 className="real-time-heading"
                initial={{opacity:0, x:50}}
                animate={{opacity:1, x:0} }
                transition={{duration:1, delay:0.5}}
                
                >Real Time.</motion.h1>
                <motion.p className="info-text"
                
                initial={{opacity:0, x:50}}
                    animate={{opacity:1, x:0} }
                    transition={{duration:0.75}}
                
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div className="btn-flex"
                initial={{opacity:0, x:50}}
                animate={{opacity:1, x:0} }
                transition={{duration:1}}>
                <Button text={"DashBoard"}/>
                <Button text={"Share"} outlined={true}/>

            </motion.div>
            
            </div>
           
           
            <div className="right-container">
                <img src="https://crypto-dashboard-avi.netlify.app/static/media/gradient.12a666ed10b3b442b534.png" alt="img" className="gradient"  />
                <motion.img src="https://crypto-dashboard-avi.netlify.app/static/media/iphone.080029ada53f0cd57453.png"  alt="iphone" className="iphone" 
                initial={{y:-10}}
                    animate={{y:10} }
                    transition={{type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity}}/>
            </div>
        </div>
    )
}
export default MainComponent;