import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'


import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'



export default class extends React.Component{
    state = { city: '', state: '' }

    render(){

        const RedeemMyPoints = async () => {
            console.log('Redeem...')
        }

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Redeem Points</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                <h3>Avaliable Points: 4512</h3>

                <Table>

                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Points</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableRowColumn>Free Night Stay</TableRowColumn>
                            <TableRowColumn>Enjoy a free night stay at any Crystal Inn</TableRowColumn>
                            <TableRowColumn>1,500</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>$ 25.00 Gift Card</TableRowColumn>
                            <TableRowColumn>Gift card from participating partners</TableRowColumn>
                            <TableRowColumn>2,000</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>$ 50.00 Gift Card</TableRowColumn>
                            <TableRowColumn>Gift card from participating partners</TableRowColumn>
                            <TableRowColumn>4,000</TableRowColumn>
                        </TableRow>
                    </TableBody>

                </Table>
                

                
                <br />

                <hr/>
                <div className="div-center">
                    <RaisedButton label="Redeem Points" primary={true} onClick={ RedeemMyPoints } />
                </div>
                    
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}

