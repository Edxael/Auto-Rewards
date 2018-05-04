import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'


import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



export default class extends React.Component{
    state = { city: '', state: '' }

    render(){

        const UpdateMyProfile = async () => {
            console.log('Updating profile...')
        }

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>My Profile</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>

                <TextField type="password" hintText="Old Password" floatingLabelText="Old Password:" floatingLabelFixed={true} />
                <br/><br/>
                

                <TextField type="password" hintText="New Password" floatingLabelText="New Password:" floatingLabelFixed={true} />
                <br/>

                <TextField type="password" hintText="New Password Again" floatingLabelText="New Password Again:" floatingLabelFixed={true} />
                <br/>
                <hr/>
                


                <div className="div-center">
                    <RaisedButton label="Update Password" primary={true} onClick={ UpdateMyProfile } />
                </div>
                    
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}
