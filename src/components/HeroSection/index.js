import React from 'react'
import { Button } from '../ButtonElements'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className= "hero-container">
            <h1>Travel more</h1>
            <p>Plan your next trip today</p>
            <div classname= "hero-btns">
                <Button fontbig big primary>Get started</Button>
            </div>

        </div>
    )
}   

export default HeroSection