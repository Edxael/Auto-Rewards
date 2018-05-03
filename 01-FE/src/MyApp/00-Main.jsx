import React from 'react'

import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './css/style.css'
import { client } from './EndPoint/EndPoint'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import MenuN from './Menus/01-No-LogIn'
import MenuY from './Menus/02-Yes-LogIn'


import LogIn from './00-ZLogIn'
import Terms from './01-Terms'
import MyProfile from './02-MyProfile'
import UpdateProfile from './03-UpdateProfile'
import UpdatePassword from './04-UpdatePassword'
import PointsHisto from './05-PointsHisto'
import MyBenefits from './06-MyBenefits'
import RedeemPoints from './07-RedeemPoints'
import Review from './08-Review'
import ConfScreen from './09-ConfScreen'



export default class extends React.Component{
    state = { open: false, loged: false }

    render(){

        return(
            <div>
                <ApolloProvider client={client}>
                    <MuiThemeProvider>
                        <HashRouter>
                            <div >

                                <AppBar title="Rewards" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={ () => { this.setState({ open: true }) } }  />

                                { this.state.loged ? <MenuY/> : <MenuN/> }
                        
                                <hr/>
                        
                                <Route exact path="/" component={LogIn}/>
                                <Route path="/1" component={Terms}/>
                                <Route path="/2" component={MyProfile}/>
                                <Route path="/3" component={UpdateProfile}/>
                                <Route path="/4" component={UpdatePassword}/>
                                <Route path="/5" component={PointsHisto}/>
                                <Route path="/6" component={MyBenefits}/>
                                <Route path="/7" component={RedeemPoints}/>
                                <Route path="/8" component={Review}/>
                                <Route path="/9" component={ConfScreen}/>
        
                                <br/>
                                <hr/>
                                <div>By: Edmundo</div>
                        
                            </div>
                        </HashRouter>
                    </MuiThemeProvider>
                </ApolloProvider>
            </div>
        )
    }
}


{/* <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >

<MenuItem primaryText="My Profile" containerElement={<Link to="/2" />} onClick={ () => { this.setState({ open: false }) } } />
<MenuItem primaryText="Update Profile" containerElement={<Link to="/3" />} onClick={ () => { this.setState({ open: false }) } } />
<MenuItem primaryText="Points Histo" containerElement={<Link to="/5" />} onClick={ () => { this.setState({ open: false }) } } />
<MenuItem primaryText="Member Benefits" containerElement={<Link to="/6" />} onClick={ () => { this.setState({ open: false }) } } />
<MenuItem primaryText="Redeem Points" containerElement={<Link to="/7" />} onClick={ () => { this.setState({ open: false }) } } />

<MenuItem primaryText="Terms n Cond" containerElement={<Link to="/1" />} onClick={ () => { this.setState({ open: false }) } } />
    
</Drawer> */}