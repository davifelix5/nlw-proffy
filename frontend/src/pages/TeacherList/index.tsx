import React, { useState, FormEvent } from 'react'

import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'

function TeacherList() {

    const [subject, setSubject] = useState('')
    const [weekday, setWeekday] = useState('')
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])

    async function handleFilterTeachers(event: FormEvent) {
        event.preventDefault()
        const params = {
            subject,
            weekday,
            time
        }
        const { data } = await api.get('classes', { params })
        setTeachers(data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os professores disponíveis">
                <form id="search-teachers" onSubmit={handleFilterTeachers}>
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
                    <Select
                        name="weekday"
                        label="Dia da semana"
                        message="Selecione um dia"
                        value={weekday}
                        onChange={e => setWeekday(e.target.value)}
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
                        label="Horários"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        name="time"
                        type="time"
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {
                    teachers.length
                        ?
                        teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher} />)
                        :
                        <div className="initial-message">
                            Pesquise professores disponíveis pelo formulário acima
                        </div>
                }
            </main>
        </div>
    )
}

export default TeacherList
