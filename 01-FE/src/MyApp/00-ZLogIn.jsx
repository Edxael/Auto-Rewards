import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'


export default class extends React.Component{
    state = { uemail: '', upass: '' }

    render(){

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Log In 2</h3>
                </Paper>

                <Paper className="G-Pap-Content LogIn-Paper" zDepth={2}>

                    <TextField type="text" value={this.state.uemail} hintText="User Email" floatingLabelText="Email:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ uemail: v }) } } />
                    <br />

                    <TextField type="password" value={this.state.upass} hintText="Password" floatingLabelText="Password:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ upass: v }) } } />
                    <br />
                    
                </Paper>
                
            </div>
        )
    }
}








