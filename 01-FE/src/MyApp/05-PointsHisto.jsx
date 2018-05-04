import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'
import gql from "graphql-tag"
import { client } from './EndPoint/EndPoint'
import * as storage from './MobX/LocMem.js'

import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import {indigo500} from 'material-ui/styles/colors'



export default class extends React.Component{
    // state = { histo: [{edate: "00/00/00", quantity: 00 }] }
    state = { histo: [{id:"ksd1", edate: "00/00/00", quantity: 0 }] }

    async componentDidMount(){
        console.log("Component Did Mount")
        let info = await client.query({
            query: gql`
            query {
                user(where: { email: "${storage.get('email')}" }){
                    addpoints{
                        id
                        edate
                        quantity
                      }
                }
              }
            `})
            .then((result) => { return result.data.user } )
            .catch( console.log("Error Catched") )
        
        // await console.log("La Data: ", info.addpoints)
        await this.setState({ histo: info.addpoints })
        console.log(this.state)
    }


    render(){


        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>History of Earned Points.</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                    
                        <List>
                            { this.state.histo.map((x) => { return <ListItem 
                                                                        key={x.id}
                                                                        leftIcon={<CommunicationEmail color={indigo500} />}
                                                                        primaryText={`You earn: ${x.quantity} points`}
                                                                        secondaryText={`Date earned: ${x.edate}`}
                                                                    /> }) }
                        </List>
                      
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}
