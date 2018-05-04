import React from 'react'
import gql from "graphql-tag"
import { observer } from 'mobx-react'
import MS from './MobX/MobXStorage'
import { client } from './EndPoint/EndPoint'
import { Redirect } from 'react-router-dom'
import * as storage from './MobX/LocMem.js'
// storage.get('email')

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class LogIn extends React.Component{
    state = { uemal: '', upass: '', redirect: false, open: false }

    render(){


        const LogMeIn = async () => {
            console.log("On State: ", this.state.uemal, this.state.upass)

          
            let temp1 = await client.query({
                query: gql`
                query {
                    user(where: { email: "${this.state.uemal}" }){
                        password
                    }
                  }
                `})
                .then((result) => { return result.data.user } )
                .catch( console.log("Error Catched") )
            
            await console.log("La Data: ", temp1 )



            if((temp1 === null) || (temp1.password !== this.state.upass)){
                console.log("Wront Email or Password") 
                
                this.setState({ uemal: '', upass: '', open: true })
            }else if (temp1.password === this.state.upass){
                console.log("Correct Password.................")
                storage.add('email', this.state.uemal)
                // MS.uemal = this.state.uemal 
                console.log("Email Saved: ", storage.get('email') )
                this.setState({ redirect: true, uemal: '', upass: '' })
                console.clear()
                MS.loged = true
            }
        }

        const modalActions = [<FlatButton
                                label="Close"
                                primary={true}
                                onClick={ () => { this.setState({ open: false }) } }
                            />]


        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Log In</h3>
                </Paper>

                <Paper className="G-Pap-Content LogIn-Paper" zDepth={2}>

                    <TextField type="text" value={this.state.uemal} hintText="Email" floatingLabelText="Email:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ uemal: v }) } } />
                    <br />

                    <TextField type="password" value={this.state.upass} hintText="Password" floatingLabelText="Password:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ upass: v }) } } />
                    <br />

                     
                     { MS.loged ? <Redirect push to="/1" /> : <RaisedButton label="Log In" primary={true} onClick={ LogMeIn } /> } 

                     { this.state.open ? 
                             <Dialog
                             title="Wrong: Email or Passwor"
                             actions={modalActions}
                             modal={true}
                             open={this.state.open}
                           >
                             Please review your Email & Password then try again.
                           </Dialog>
                     : <div></div> } 
                    
                    
                </Paper>
                
            </div>
        )
    }
}

export default observer(LogIn)


