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
    state = { choise: 0, selected: [] }

    
    
      

    render(){

        const isSelected = (index) => {
            return this.state.selected.indexOf(index) !== -1;
          };


        const handleRowSelection = (selectedRows) => {
            this.setState({
                selected: selectedRows,
            });
        };


        const RedeemMyPoints = async () => {
            console.log('Redeem option: ', this.state.selected)
        }

        // selected={ () => { this.setState({ choise: 3 }) } } 

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>Redeem Points</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>
                <h3>Avaliable Points: 4512</h3>

                <Table onRowSelection={this.handleRowSelection} >

                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Points</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow selected={ isSelected(1)} >
                            <TableRowColumn>Free Night Stay</TableRowColumn>
                            <TableRowColumn>Free night stay.</TableRowColumn>
                            <TableRowColumn>1,500</TableRowColumn>
                        </TableRow>
                        <TableRow selected={ isSelected(2)} >
                            <TableRowColumn>$ 25.00 Gift Card</TableRowColumn>
                            <TableRowColumn>Gift card.</TableRowColumn>
                            <TableRowColumn>2,000</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(3)} >
                            <TableRowColumn>$ 50.00 Gift Card</TableRowColumn>
                            <TableRowColumn>Gift card.</TableRowColumn>
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

