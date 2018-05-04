# Information 

Notes:

Material UI
https://www.material-ui.com/#/
https://github.com/mui-org/material-ui
https://www.npmjs.com/package/material-ui



Manage Complex State in React Apps with MobX
https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx



react-responsive-ui
https://www.npmjs.com/package/react-responsive-ui





The roboto: I took it out from package.json
"typeface-roboto": "0.0.54"
// import "typeface-roboto"







======================================================================================
======================================================================================
======================================================================================
======================================================================================

Before Local storage:
-------------------------------------

<HashRouter>
                                <div >

                                    <AppBar title="Rewards" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={ () => { this.setState({ open: true }) } }  />

                                    { this.state.loged ? 
                                            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
                                                <MenuItem primaryText="My Profile" containerElement={<Link to="/2" />} onClick={ () => { this.setState({ open: false }) } } />
                                                <MenuItem primaryText="Update Profile" containerElement={<Link to="/3" />} onClick={ () => { this.setState({ open: false }) } } />
                                                <MenuItem primaryText="Points Histo" containerElement={<Link to="/5" />} onClick={ () => { this.setState({ open: false }) } } />
                                                <MenuItem primaryText="Member Benefits" containerElement={<Link to="/6" />} onClick={ () => { this.setState({ open: false }) } } />
                                                <MenuItem primaryText="Redeem Points" containerElement={<Link to="/7" />} onClick={ () => { this.setState({ open: false }) } } />
                                                <MenuItem primaryText="Terms n Cond" containerElement={<Link to="/1" />} onClick={ () => { this.setState({ open: false }) } } />
                                            </Drawer>
                                        : 
                                            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
                                                <MenuItem primaryText="Please LogIn"  onClick={ () => { this.setState({ open: false }) } } />
                                            </Drawer>
                                    }
                                
                            
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
                                    <div>By: Edmundo Rubio</div>
                            
                                </div>
                            </HashRouter>



Notes:

Material UI
https://www.material-ui.com/#/
https://github.com/mui-org/material-ui
https://www.npmjs.com/package/material-ui



react-responsive-ui
https://www.npmjs.com/package/react-responsive-ui



Alternative to Redux:
https://hanno.co/blog/mobx-redux-alternative/


Redux:
https://www.youtube.com/watch?v=OSSpVLpuVWA&t=349s
https://www.youtube.com/watch?v=sX3KeP7v7Kg
https://www.youtube.com/watch?v=kJeXr1K3nyg


The roboto: I took it out from package.json
"typeface-roboto": "0.0.54"
// import "typeface-roboto"


import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

 <Provider store={store}>
 </Provider>

=======================================
REDUX NOTES-1: https://www.youtube.com/watch?v=OSSpVLpuVWA&t=349s
const reducer = (state, action) => {
    if(action.type === 'changeState'){
        return action.payload.newState
    }
    return 'Old State'
}

const store = createStore(reducer)



const action = {
    type: 'changeState',
    payload: { newState: 'Las Mananitas' }
}

store.dispatch(action)





console.log("MyStore: ", store.getState())
=======================================

=======================================
REDUX NOTES-2:
const ProductsReducer = (state = [], action) => {
    return state
}

const UserReducer = (state = '', action) => {
    switch (action.type) {
        case 'updateUser':
            return action.payload

    }
    return state
}


const allReducers = combineReducers({
    products: ProductsReducer,
    user: UserReducer
})


const store = createStore(allReducers, {
    products: [{ name: 'iphone' }],
    user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
)


const updateUerAction = {
    type: 'updateUser',
    payload: { user: 'Alexander' }
}
store.dispatch(updateUerAction)
=======================================





========================
Create user:
mutation{
  createUser(data: { 
    		name: "Ayanami Ray", 
    		email: "ray@nerv.net", 
    		password: "eva01" }){
    id
    name
    email
    password
  }
}

========================