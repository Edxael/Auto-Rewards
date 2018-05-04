import React from 'react'
import Paper from 'material-ui/Paper'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'

export default class extends React.Component{
    render(){

        return(
            <div>
                <Paper className="pap-terms-Title" zDepth={2}>
                    <h3>Terms & Conditions</h3>
                </Paper>

                <Paper className="paper-terms" zDepth={2}>
                    <ol>
                        <li className="li-Terms" >MacCall Management, LLC the Operator of the Crystal Inn Hotels & Suites, LLC (the”Operator”) offers travelers a frequent guest and rewards program (”Crystal Rewards” or “Program”). These Terms and Conditions (the “Program Rules”) govern the Crystal Rewards Program and the Operator’s relationship with the members of the Program (”Members”, individually a “Member” or “You”). Membership in the Program is subject to Program Rules set forth below and supersede all previous Program Rules. By opening a Program account (”Account”), or by using your Account, you agree that 1) You have read, understood and accepted these Program Rules; and 2) You consent to the Operator’s processing of data that is personal to you, and disclosure of such data to third parties, in accordance with the Operator’s privacy statement set forth below.</li>
                        <li className="li-Terms" >Operator may add, modify, or delete Program Rules with or without notice, and may terminate the Program at any time and the Member’s right to accumulate points or redeem points shall terminate upon termination of the Program. The number of points required to redeem any reward in the Program may substantially increase at any time, or any reward may be withdrawn, or restrictions on any reward may be imposed at any time.</li>
                        <li className="li-Terms" >You may not transfer your points to anyone or by any means, including through a will or divorce decree.</li>
                        <li className="li-Terms" >ou may not combine your points with points belonging to anyone else, including your spouse.</li>
                        <li className="li-Terms" >You may only maintain one Program Account. If you open more than one Program Account and have more than one membership number, Operator will credit points to only one Account and terminate the other.</li>
                        <li className="li-Terms" >You may not sell or barter points or redeem points for cash.</li>
                        <li className="li-Terms" >Crystal Rewards points in a Member’s Account do not constitute property of the Member. Points have no fixed value, are not transferable and are not redeemable for cash or any other form of credit. Points have no value until presented by the Member for redemption in accordance with the Terms and Conditions.</li>
                        <li className="li-Terms" >perator may modify the points listed in your Program Account based on actual stay information.</li>
                    </ol>   
                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}
             

// { MS.loged ? <div>_</div> : <Redirect push to="/" /> } 