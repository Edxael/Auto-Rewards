import { extendObservable } from 'mobx'


class MyStorage {
    constructor(){
        extendObservable(this, {
            loged: true,
            uemail: 'asuka@nerv.net'
        })
    }
}


var MyStore = new MyStorage()
export default MyStore
