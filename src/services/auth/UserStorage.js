class User {
    constructor() {
        this._data = {id: '', token: ''};
    }

    add(item) {
        this._data.push(item);
    }

    getId() {
        return this._data.id;
    }

    getToken() {
        return this._data.token;
    }

    setId(value) {
        this._data.id = value;
    }

    setToken(value) {
        this._data.token = value;
    }

    remove() {
        this._data.id = '';
        this._data.token = '';
    }                   
}

const user = new User();
Object.freeze(user);

export default user;

  