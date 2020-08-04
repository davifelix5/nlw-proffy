import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import TeacherList from './TeacherList'
import TeacherForm from './TeacherForm'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/study" component={TeacherList} />
                <Route path="/teach" component={TeacherForm} />
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes