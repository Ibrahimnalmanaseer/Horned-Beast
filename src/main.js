import React from "react";
import Horned from "./hornedBeast";
import markhor from './images/markhor.jpg';
import nubian from './images/nubianibex.jpg'


class Main extends React.Component{

    render(){


        return(

            <div>
                <Horned beastName='Markhor' beastDisc='The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat. It’s extremely endangered, with an estimated 
                2,500 left in the wild in part due to hunting for its absurdly spectacular corkscrewed horns, which can grow to more than five feet long.' 
                imgSrc={markhor}
                
                />

             <br></br>
             <hr></hr>
                <Horned beastName='Nubian Ibex' beastDisc='The Nubian ibex’s gigantic, backward-curling horns are even more impressive when you consider that the ibex uses them to smash into male competitors while on top of scary mountains in North Africa and Arabia. There are a few different types of ibex and nobody’s quite sure whether they’re 
                the same species or not, so please, alpine ibex fans, don’t be upset that the Nubian variety is up here instead.' 
                imgSrc={nubian}
                
                />





                
                           
            </div>
        )
    }




}

export default Main;


/* <h3>animal name </h3>
                <img src='#' alt='#' title=''></img>
                <p> discription </p> */