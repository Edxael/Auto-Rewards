import React from 'react'
import Paper from 'material-ui/Paper'
import MS from './MobX/MobXStorage'
import { Redirect } from 'react-router-dom'

export default class extends React.Component{
    render(){

        return(
            <div>
                <Paper className="pap-terms-Title" zDepth={2}>
                    <h3>Member Benefits</h3>
                </Paper>

                <Paper className="paper-terms" zDepth={2}>
                    <p>Crystal Rewards Points, Free Night Stays. You earn as you stay and how you redeem your reward is your chose. Priority Late Check-out. Upon request and when available. Easy Access. Account statements, info, and Special offers.</p>   
                    <p>Your qualifying stays determine your rewards. The more you stay with us, the more generous your rewards.</p>

                    <h5>Want your Crystal Reward Faster?</h5>
                    <h5>Call 800-662-2525 or make your reservation at www.crystalinns.com</h5>
                    <p>Earn your rewards quicker by booking directly with us by calling our call center or going to our website.</p>
                    <p>Points will be awarded to your account upon check out. When you want to review your points, simply access it through our online system. For point reward redemption, log into your account. Then, simply chose how you would like to redeem your points: gift card or free night stay. Whatever your reward, you will be sent an email notification with a unique booking code and access link.</p>

                    <h5>Eligible Stays:</h5>
                    <p>All stays are eligible to earn points with Crystal Rewards. When you book directly with a hotel, our call center or our website, your points are doubled. No points or stay credits are earned for “No Show” situations where a guest does not arrive even with a credit card guaranteed reservation.</p>

                    <h5>Join Now and Start Earning Points. Remember, earn points FASTER by calling 800-662-2525 or using www.crystalinns.com.</h5>
                    <br/>

                    <h4>Participating Points Reward Partners:</h4>

                    <div className="bene-tow-col">
                        <div> 
                            <div>Aerie</div>
                            <div>Aeropostale</div>
                            <div>Amazon</div>
                            <div>American Eagle</div>
                            <div>Applebee's</div>
                            <div>Arby's</div>
                            <div>Babies "R" Us</div>
                            <div>Baby Gap</div>
                            <div>Banana Republic</div>
                            <div>Barnes & Noble</div>
                            <div>Bass Pro Shop</div>
                            <div>Beans & Brews</div>
                            <div>Bebe</div>
                            <div>Best Buy</div>
                            <div>Bucca di Beppo</div>
                            <div>Buffalo Wild Wings</div>
                            <div>Burger King</div>
                            <div>Cabela's</div>
                            <div>California Pizza Kitchen</div>
                            <div>Carrabba's</div>
                            <div>Chic-fil-A</div>
                            <div>Chili's</div>
                            <div>Chipotle</div>
                            <div>Clair's</div>
                            <div>Cold Stone Creamery</div>
                            <div>Cracker Barrel</div>
                            <div>Dairy Queen</div>
                            <div>Denny's</div>
                            <div>Dickey's</div>
                            <div>Disney</div>
                            <div>Domino's</div>
                            <div>Ebay</div>
                            <div>Einstein Bros. Bagel</div>
                            <div>Express</div>
                            <div>Famous Footwear</div>
                            <div>Fandango</div>
                            <div>Firehouse Subs</div>
                            <div>Fleming's</div>
                            <div>Foot Locker</div>
                            <div>Forever 21</div>
                            <div>GameStop</div>
                            <div>Gap</div>
                            <div>GNC</div>
                            <div>Gordmans</div>
                            <div>Guess</div>
                            <div>Gymboree</div>
                            <div>Harley Davidson</div>
                            <div>Home Depot</div>
                            <div>Hooters</div>
                            <div>Hot Topic</div>
                            <div>Iggy's</div>
                            <div>IHOP</div>
                            <div>iTunes</div>
                            <div>Jamba Juice</div>
                            <div>Jason's Deli</div>
                            <div>JC Penney</div>
                            <div>Joe's Crab Shack</div>
                            <div>Kohl's     </div>
                        </div>


                        <div>
                            <div>Land's End</div>
                            <div>Limited Too</div>
                            <div>Little C</div>
                            <div>LL Bean</div>
                            <div>Longhorn Steakhouse</div>
                            <div>Lowe's</div>
                            <div>Macaroni Grill</div>
                            <div>Macy's</div>
                            <div>Maggiano's</div>
                            <div>Maverik</div>
                            <div>McDonald's</div>
                            <div>Mimi's Café</div>
                            <div>Nike</div>
                            <div>Noodles & Co</div>
                            <div>Nordstrom</div>
                            <div>Old Navy</div>
                            <div>Olive Garden</div>
                            <div>Outback Steakhouse</div>
                            <div>Overstock</div>
                            <div>PacSun</div>
                            <div>Panda Express</div>
                            <div>Papa John's</div>
                            <div>Payless Shoe</div>
                            <div>Pei Wei</div>
                            <div>Petco</div>
                            <div>PetSmart</div>
                            <div>PF Chang's</div>
                            <div>Pottery Barn</div>
                            <div>Quiznos</div>
                            <div>Red Lobster</div>
                            <div>Red Robin</div>
                            <div>Red Rock Brewery</div>
                            <div>Rubio's</div>
                            <div>Ruby Tuesday</div>
                            <div>Rue21</div>
                            <div>Sears</div>
                            <div>Sketchers</div>
                            <div>Smashburger</div>
                            <div>Smith's</div>
                            <div>Spafinder</div>
                            <div>Staples</div>
                            <div>Starbucks</div>
                            <div>Subway</div>
                            <div>Sunglass Hut</div>
                            <div>Taco Bell</div>
                            <div>Taco Time</div>
                            <div>Talbots</div>
                            <div>Target</div>
                            <div>Texas Roadhouse</div>
                            <div>TGI Friday's</div>
                            <div>The Cheesecake Factory</div>
                            <div>TJ Maxx</div>
                            <div>Torrid</div>
                            <div>Toys "R" Us</div>
                            <div>Wendy's</div>
                            <div>Winger's</div>
                            <div>Zappos</div>
                        </div>
                    </div>
                    <br/>

                    <h5>Online Features:</h5>
                    <ul>
                        <li>Make a reservation.</li>
                        <li>Redeem Points. Free room nights at hotel.</li>
                        <li>Access your account. Change your pin. Check your point balance.</li>
                        <li>Special Promotions. Learn what’s happening.</li>
                        <li>Comprehensive guide. Member benefits. Rewards. Terms & Conditions.</li>
                    </ul>

                    <p>Information on your points.</p>

                </Paper>

                { MS.loged ? <div></div> : <Redirect push to="/" /> }
            </div>
        )
    }
}

