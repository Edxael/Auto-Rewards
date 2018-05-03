import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class extends React.Component{
    render(){
        return(
            <div>

                <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >

                    <MenuItem primaryText="My Profile" containerElement={<Link to="/2" />} onClick={ () => { this.setState({ open: false }) } } />
                    <MenuItem primaryText="Update Profile" containerElement={<Link to="/3" />} onClick={ () => { this.setState({ open: false }) } } />
                    <MenuItem primaryText="Points Histo" containerElement={<Link to="/5" />} onClick={ () => { this.setState({ open: false }) } } />
                    <MenuItem primaryText="Member Benefits" containerElement={<Link to="/6" />} onClick={ () => { this.setState({ open: false }) } } />
                    <MenuItem primaryText="Redeem Points" containerElement={<Link to="/7" />} onClick={ () => { this.setState({ open: false }) } } />

                    <MenuItem primaryText="Terms n Cond" containerElement={<Link to="/1" />} onClick={ () => { this.setState({ open: false }) } } />
                    
                </Drawer>
                
            </div>
        )
    }
}