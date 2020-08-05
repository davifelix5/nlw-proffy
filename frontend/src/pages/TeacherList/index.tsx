import React from 'react'

import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os professores disponíveis">
                <form id="search-teachers">
                    <Input
                        label="Matéria"
                        name="subject"
                    />
                    <Input
                        label="Dia da semana"
                        name="weekday"
                    />
                    <Input
                        label="Horários"
                        name="time"
                        type="time"
                    />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList
