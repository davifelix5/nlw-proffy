import React, { useState, FormEvent } from 'react'

import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

import './styles.css'

function TeacherForm() {

    const history = useHistory()

    const [scheduleItems, setScheduleItems] = useState([
        { weekday: '', from: '', to: '' }
    ])
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [price, setPrice] = useState('')

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { weekday: '', from: '', to: '' }
        ])
    }

    async function handleCreateClass(event: FormEvent) {
        event.preventDefault()
        const classData = {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            price: Number(price),
            schedule: scheduleItems.map(item => {
                return { ...item, weekday: Number(item.weekday) }
            })
        }
        try {
            await api.post('classes', classData)
            history.push('/')
            alert('Cadastro realizado com sucesso')

        } catch (err) {
            alert('Ocorreu um erro! Tente novamente')
        }
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const newScheduleItems = scheduleItems.map((scheduleItem, itemIndex) => {
            if (itemIndex === index) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem
        })
        setScheduleItems(newScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Bem vindo! Registre-se para dar aulas!"
                description="O primeiro passo é preencher esse formulário"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>
                            Seus dados
                        </legend>
                        <Input
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            label="Nome Completo"
                        />
                        <Input
                            name="avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                            label="Avatar"
                        />
                        <Input
                            name="whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                            label="WhatsApp"
                        />
                        <Textarea
                            name="bio"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                            label="Biografia"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Sobre a aula
                        </legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            message="Selecione uma matéria"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            options={[
                                { value: 'Português', label: 'Português' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Inglês', label: 'Inglês' },
                            ]}
                        />
                        <Input
                            name="price"
                            value={price}
                            type="number"
                            onChange={e => setPrice(e.target.value)}
                            label="Preço da hora de aula"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Adicionar horário
                            </button>
                        </legend>
                        {scheduleItems.map((schedule, index) => (
                            <div className="schedule-item" key={index}>
                                <Select
                                    name="weekday"
                                    label="Dia da semana"
                                    message="Selecione um dia"
                                    onChange={e => setScheduleItemValue(index, 'weekday', e.target.value)}
                                    value={schedule.weekday}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-Feira' },
                                        { value: '2', label: 'Terça-Feira' },
                                        { value: '3', label: 'Quarta-Feira' },
                                        { value: '4', label: 'Quinta-Feira' },
                                        { value: '5', label: 'Sexta-Feira' },
                                        { value: '6', label: 'Sábado' },
                                    ]}
                                />
                                <Input
                                    name="from"
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    label="Das"
                                    value={schedule.from}
                                    type="time"
                                />
                                <Input
                                    name="to"
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    label="Até"
                                    value={schedule.to}
                                    type="time"
                                />
                            </div>
                        ))}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante " />
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm
