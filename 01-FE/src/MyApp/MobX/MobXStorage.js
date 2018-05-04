import { extendObservable } from 'mobx'


class MyStorage {
    constructor(){
        extendObservable(this, {
            loged: false,
            uemail: ''
        })
    }
}


var MyStore = new MyStorage()
export default MyStore
