import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'


export default class extends React.Component{
    render(){

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Terms & Conditions</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                <TextField value="Ayumi" hintText="Hint Text" floatingLabelText="First Name:" floatingLabelFixed={true} />
                <br />

                    
                </Paper>
                
            </div>
        )
    }
}
