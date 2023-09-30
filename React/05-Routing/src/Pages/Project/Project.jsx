import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './project.css'
import IG from './Assets/IG.png'

function Project() {
    return (
        <>
        <div className='head'>
            <div className='headTitle'>
                Image Generator using Open AI
            </div>
            <div className='headDescription'>
                 To generate a images based on a prompt by user.
            </div>
            <img className='image' src={IG} alt="" />
            <div><a href="https://github.com/animeshsgit/Image_Generator_Using_OpenAI">Github Link</a></div>
            <div><a href="https://animeshsgit.github.io/Image_Generator_Using_OpenAI/">Live Link</a></div>
        </div>
        <div className='head'>
            <div className='headTitle'>
                Project 2
            </div>
            <div className='headDescription'>
                 project 2 description
            </div>
            <img className='image' src={IG} alt="" />
            <div><a href="https://github.com/animeshsgit/Image_Generator_Using_OpenAI">Github Link</a></div>
            <div><a href="https://animeshsgit.github.io/Image_Generator_Using_OpenAI/">Live Link</a></div>
        </div>
        </>
    );
}

export default Project