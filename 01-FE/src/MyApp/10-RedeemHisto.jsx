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
    state = { histo: [{id:"ksd1", tdate: "00/00/00", item: "None", pcost: 0 }] }

    async componentDidMount(){
        console.log("Component Did Mount")
        let info = await client.query({
            query: gql`
            query {
                user(where: { email: "${storage.get('email')}" }){
                    trans{
                        id
                        tdate
                        item
                        pcost
                      }
                }
              }
            `})
            .then((result) => { return result.data.user } )
            .catch( console.log("Error Catched") )
        
        await console.log("La Data: ", info)
        await this.setState({ histo: info.trans })
        console.log(this.state)
    }


    render(){


        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>History of Redimed Points.</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                    
                        <List>
                            { this.state.histo.map((x) => { return <ListItem 
                                                                        key={x.id}
                                                                        leftIcon={<CommunicationEmail color={indigo500} />}
                                                                        primaryText={`${x.item} for ${x.pcost} points.`}
                                                                        secondaryText={`Date: ${x.tdate}`}
                                                                    /> }) }
                        </List>
                      
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}

