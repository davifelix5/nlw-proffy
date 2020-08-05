import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api'

import './styles.css'

export interface Teacher {
    id: number,
    subject: string,
    price: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function handleCreateConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img
                    src={teacher.avatar}
                    alt={`Professor ${teacher.name}`}
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.price}</strong>
                </p>
                <a
                    onClick={handleCreateConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsAppIcon} alt="Ícone WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}


export default TeacherItem
