import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class extends React.Component{
    render(){
        return(
            <div>

                <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >

                    <MenuItem primaryText="Please LogIn"  onClick={ () => { this.setState({ open: false }) } } />

                </Drawer>

            </div>
        )
    }
}

