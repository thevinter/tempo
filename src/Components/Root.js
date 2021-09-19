import React, {Component} from "react";
import {Text} from 'atomize'

function Root(){
    return(
    <div>
        <Text tag="h1" textSize="display1">
            welcome to tempo.
        </Text>
        <Text tag="h1" textSize="paragraph">
            this is a social network where you have to wait 24h before any of your content is posted. 
        </Text>
        <Text tag="h1" textSize="paragraph">
            this aims to reduce time spent on the platform and encourage civil discussion.
        </Text>
    </div>
    )
}

export default Root;