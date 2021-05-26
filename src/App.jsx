import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
}from 'react-router-dom'

import Home from './pages/home'
import Dasboard from './pages/dashboard'

export default function App() {

    const [zip, setZip] = useState(0)

    const currentZip = zip

    return (
        <Router>
        
                <main>
                    <Route path="/" exact>
                        <Home zip={zip} setZip={setZip} />
                    </Route>
                <Route path='/dashboard/:zipCode'>
                    <Dasboard />        
                </Route>
                </main>
            
        </Router>
    )
}
