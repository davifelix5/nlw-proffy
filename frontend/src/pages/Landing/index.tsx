import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import logoImage from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/teach.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'

import './styles.css'

function LandingPage() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections')
            .then(res => {
                const { total } = res.data
                setTotalConnections(total)
            })
    }, [])

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
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/teach" className="teach">
                        <img src={teachIcon} alt="Ensinar" />
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões realizadas <img src={purpleHeartIcon} alt="Coração" />
                </span>
            </div>
        </div>
    )
}

export default LandingPage
