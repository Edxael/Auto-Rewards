import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'
import gql from "graphql-tag"
import { client } from './EndPoint/EndPoint'
// import * as storage from './MobX/LocMem.js'

import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import {indigo500} from 'material-ui/styles/colors'



export default class extends React.Component{
    state = { users: [] }

    async componentDidMount(){
        console.log("Component Did Mount")
        let info = await client.query({
            query: gql`
            query{
                users{
                  id
                  fname
                  lname
                  email
                  password
                  points
                }
              }
            `})
            .then((result) => { return result.data.users } )
            .catch( console.log("Error Catched") )
        
        await console.log("Users Data: ", info)
        await this.setState({ users: info })
        // console.log(this.state)
    }


    render(){


        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>All Users.</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                <div>Hello</div>
                    
                        <List>
                            { this.state.users.map((x) => { return <ListItem 
                                                                        key={x.id}
                                                                        leftIcon={<CommunicationEmail color={indigo500} />}
                                                                        primaryText={`Name: ${x.fname} ${x.lname}`}
                                                                        secondaryText={`Points: ${x.points}`}
                                                                    /> }) }
                        </List>
                      
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}
