import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/62623519?v=4"
                    alt="Professor Davi"
                />
                <div>
                    <strong>Davi Félix</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Apaixonado por aplicar os cálculos e entender o
                ambiente que o circula
                        <br />
                        Deixe-se contagiar pela sua paixão pela Física
                        e tudo que envolve ciência e eu garanto que
                        não irá se arrepender
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Ícone WhatsAPp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}


export default TeacherItem
