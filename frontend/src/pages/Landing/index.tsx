import React from 'react'

import logoImage from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/teach.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function LandingPage() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImage} alt="Logo do Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img
                    src={landingImage}
                    alt="Ilustração da plataforma de estudo"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="" className="teach">
                        <img src={teachIcon} alt="Ensinar" />
                        Ensinar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 500 conexões realizadas <img src={purpleHeartIcon} alt="Coração" />
                </span>
            </div>
        </div>
    )
}

export default LandingPage
