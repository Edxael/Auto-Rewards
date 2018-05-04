import React from 'react'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'
import gql from "graphql-tag"
import { client } from './EndPoint/EndPoint'
import * as storage from './MobX/LocMem.js'



import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'



export default class extends React.Component{
    state = { city: '', state: '', fname: '', lname: '', phone: '', email: '', address: '', zip: '', subcription: false, squestion: '' }




    async componentDidMount(){
        console.log("Component Did Mount")
        let info = await client.query({
            query: gql`
            query {
                user(where: { email: "${storage.get('email')}" }){
                    fname
                    lname
                    phone
                    email
                    address
                    zip
                    city
                    state
                    subcription
                    squestion
                }
              }
            `})
            .then((result) => { return result.data.user } )
            .catch( console.log("Error Catched") )
        
        await console.log("La Data: ", info )
        await this.setState({ fname: info.fname, lname: info.lname, phone: info.phone, email: info.email, address: info.address, zip: info.zip, subcription: info.subcription, squestion: info.squestion, city: info.city, state: info.state })
        console.log(this.state)
    }





    render(){


        const UpdateMyProfile = async () => {
            console.log('Updating profile...')

            let temp1 = await client.mutate({
                mutation: gql`
                mutation{
                  updateUser(
                      data: { fname: "${this.state.fname}", lname: "${this.state.lname}", phone: "${this.state.phone}", email: "${this.state.email}", address: "${this.state.address}", zip: "${this.state.zip}", city: "${this.state.city}", state: "${this.state.state}" subcription: ${this.state.subcription}, squestion: "${this.state.squestion}" }
                      where: { email: "${MS.uemail}" }
                        ){
                          id
                          fname
                        }
                  }
                `}).then((result) => { return result.data.createUser } )
              
              await console.log("User Deleted: ", temp1 )
              await this.setState({ singerName: '', singerId: '' })
        }

        return(
            <div>
                <Paper className="G-Pap-Title" zDepth={2}>
                    <h3>My Profile</h3>
                </Paper>

                <Paper className="G-Pap-Content" zDepth={2}>

                <TextField value={this.state.fname} hintText="First Name" floatingLabelText="First Name:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ fname: v }) } } />
                <br />

                <TextField value={this.state.lname} hintText="Last Name" floatingLabelText="Last Name:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ lname: v }) } } />
                <br />

                <TextField value={this.state.phone} hintText="Phone Number" floatingLabelText="Phone Number:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ phone: v }) } } />
                <br />
                
                <TextField value={this.state.email} hintText="Email" floatingLabelText="Email:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ email: v }) } } />
                <br />

                <TextField value={this.state.address} hintText="Address" floatingLabelText="Address:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ address: v }) } } />
                <br />

                <TextField value={this.state.zip} hintText="Zip Code" floatingLabelText="Zip Code:" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ zip: v }) } } />
                <br />

                <SelectField floatingLabelText="City" value={this.state.city} onChange={this.handleChange} >
                    <MenuItem value={"Salt Lake City"} primaryText="Salt Lake City" onClick={ () => { this.setState({ city: "Salt Lake City" }) } }/>
                    <MenuItem value={"Provo"} primaryText="Provo" onClick={ () => { this.setState({ city: "Provo" }) } } />
                    <MenuItem value={"Orem"} primaryText="Orem" onClick={ () => { this.setState({ city: "Orem" }) } } />
                    <MenuItem value={"Sandy"} primaryText="Sandy" onClick={ () => { this.setState({ city: "Sandy" }) } } />
                    <MenuItem value={"Ogden"} primaryText="Ogden" onClick={ () => { this.setState({ city: "Ogden" }) } } />
                </SelectField>
                <br />

                <SelectField floatingLabelText="State" value={this.state.state} onChange={this.handleChange} >
                    <MenuItem value={"UT"} primaryText="UT" onClick={ () => { this.setState({ state: "UT" }) } }/>
                    <MenuItem value={"AZ"} primaryText="AZ" onClick={ () => { this.setState({ state: "AZ" }) } }/>
                    <MenuItem value={"NV"} primaryText="NV" onClick={ () => { this.setState({ state: "NV" }) } }/>
                    <MenuItem value={"TX"} primaryText="TX" onClick={ () => { this.setState({ state: "TX" }) } }/>
                    <MenuItem value={"CA"} primaryText="CA" onClick={ () => { this.setState({ state: "CA" }) } }/>
                </SelectField>
                <br /><br/>

                <Checkbox className="subscribe-ch-box" checked={this.state.subcription} onCheck={ () => { this.setState({ subcription: !this.state.subcription }) } }
                    label="Check this box to subscribe for special offers and discounts to Crystal Inn Hotel and Suites."
                />
                <br /><br/>

                
                <p className="sec-question" >Security Question:</p>
                <TextField value={this.state.squestion} hintText="Favorite Vacation Spot" floatingLabelText="What is your favorite vacation spot?" floatingLabelFixed={true} onChange={ (e, v) => { this.setState({ squestion: v }) } } />
               
                <br /><br />

                <hr/>
                
                <div className="div-center">
                    <RaisedButton label="Update Profile" primary={true} onClick={ UpdateMyProfile } />
                </div>
                    
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}

