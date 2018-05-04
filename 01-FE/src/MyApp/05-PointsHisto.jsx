import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'


import Paper from 'material-ui/Paper'



export default class extends React.Component{
    state = { city: '', state: '' }

    render(){


        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Earned Points</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>

                    <p>No point on your account</p>
                    
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}
