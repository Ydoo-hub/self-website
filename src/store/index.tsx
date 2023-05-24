import { action, observable, makeObservable} from "mobx";
class HomeStore {

  @observable bilibili = 0;

  constructor(){
    makeObservable(this);
  }

  @action
  updata = (key: string, value: any) => {
    // @ts-ignore
    this[key] = value
  }
}

const homeStore = new HomeStore()
export default homeStore;