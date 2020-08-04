import React from 'react'

import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os professores disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <input type="text" name="subject" id="subject" placeholder=" " />
                        <label htmlFor="subject">Matéria</label>
                    </div>
                    <div className="input-block">
                        <input type="text" name="weekday" id="weekday" placeholder=" " />
                        <label htmlFor="weekday">Dia da semana</label>
                    </div>
                    <div className="input-block">
                        <input type="text" name="time" id="time" placeholder=" " />
                        <label htmlFor="time">Horário</label>
                    </div>
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
