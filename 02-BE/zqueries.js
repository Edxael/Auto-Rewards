mutation {
    createUser(data: { fname: "Asuka", lname: "L. Soryu", phone: "801-888-9999", email: "asuka@nerv.net", address: "158 E. 200 S", zip: "84106", city: "Salt Lake City", State: "UT", subcription: true, points: 3678, password: "eva02", trans: {create: [{tdate: "03/24/2018", item: "Night Stay", pcost: 1500}, {tdate: "02/07/2018", item: "Night Stay", pcost: 1500}, {tdate: "01/12/2018", item: "Rubios $25 G.C.", pcost: 2000}, {tdate: "12/31/2017", item: "Night Stay", pcost: 1500}, {tdate: "11/27/2017", item: "Night Stay", pcost: 1500}]}, addpoints: {create: [{edate: "01/24/2018", quantity: 800}, {edate: "12/13/2017", quantity: 900}, {edate: "11/20/2017", quantity: 700}, {edate: "10/29/2017", quantity: 400}, {edate: "09/01/2017", quantity: 100}]} }) {
      id
      fname
      lname
      email
    }
  }










===[ Create User ]======================================================================
mutation{ createUser(data: {
    fname: "Asuka",
    lname: "L. Soryu",    
    phone: "801-888-9999",
    email: "asuka@nerv.net",
    address: "158 E. 200 S",
    zip: "84106",
    city: "Salt Lake City",
    state: "UT",
    subcription: true,
    squestion: "cancun",
    points: 3678,
    password: "eva02",
    trans: {
      create: [ { tdate: "03/24/2018", item: "Night Stay", pcost: 1500 }, 
                { tdate: "02/07/2018", item: "Night Stay", pcost: 1500 }, 
                { tdate: "01/12/2018", item: "Rubios $25 G.C.", pcost: 2000 }, 
                { tdate: "12/31/2017", item: "Night Stay", pcost: 1500 }, 
                { tdate: "11/27/2017", item: "Night Stay", pcost: 1500 }] 
            },
    addpoints: {
      create: [ { edate: "01/24/2018", quantity: 800}, 
                        { edate: "12/13/2017", quantity: 900 }, 
                        { edate: "11/20/2017", quantity: 700 }, 
                        { edate: "10/29/2017", quantity: 400 }, 
                        { edate: "09/01/2017", quantity: 100 }]
              }
    }){
      id
      fname
      lname
      email
    }
  }

---------------------------------------------------------------------------------------


===[ Get One with everything ]=========================================================
query{
    user(where: { email: "asuka@nerv.net" }){
      id
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
      points
      password
      trans{
        id
        tdate
        item
        pcost
      }
      addpoints{
        id
        edate
        quantity
      }
    }
  }

---------------------------------------------------------------------------------------


===[ Mutation to Update User ]=========================================================
mutation{
  updateUser(
    where: { email: "asuka@nerv.net" }
    data: { fname: "Azukita", lname: "Mongomery",  }
  ){
    fname
    lname
    email
    phone
  }
}

---------------------------------------------------------------------------------------

