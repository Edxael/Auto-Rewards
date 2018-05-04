import { extendObservable } from 'mobx'


class MyStorage {
    constructor(){
        extendObservable(this, {
            loged: true,
            uemail: ''
        })
    }
}


var MyStore = new MyStorage()
export default MyStore
