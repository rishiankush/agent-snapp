
const setDataInStorage = (key, value) => localStorage.setItem(key,JSON.stringify(value));

const getDataFromStorage = (key) => {
    let value = localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
}

const clearDataFromStorage = () => localStorage.clear();

const unset = (key) => {
    if(getDataFromStorage(key) !== null)
        return localStorage.removeItem(key);
    else
        return null;
}

class AppLocalStorage {

    appKey = '';
    facebookIdKey = '';
    userSessionTokenKey = '';
    userNameKey = '';
    userImageKey = '';
    userEmail = '';
    userIdKey = '';

    constructor(appinit = {}) {
        const {
            appKey = 'agentSnapp',
            facebookIdKey = 'facebookId',
            userSessionTokenKey = 'token',
            userNameKey = 'name',
            userImageKey = 'image',
            userEmailKey = 'email',
            userIdKey = 'userId'
        } = appinit;

        this.appKey = appKey;
        this.facebookIdKey = facebookIdKey;
        this.userSessionTokenKey = userSessionTokenKey;
        this.userNameKey = userNameKey;
        this.userImageKey = userImageKey;
        this.userEmailKey = userEmailKey;
        this.userIdKey = userIdKey;    
    }

    getAppData = () => getDataFromStorage(this.appKey);
    
    setAppData = (value) => setDataInStorage(this.appKey, value);

    setItemData = (itemKey, itemValue) => {
        
        if (!itemKey) {
            throw new Error(`Key name not passed to save value for`);
        }

        if (!itemValue) {
            throw new Error(`Value not passed while saving for key ${itemKey}`);
        }
        
        let appData = (this.getAppData() || {});
        appData = {
            ...appData,
            [itemKey]: itemValue
        };
        this.setAppData(appData);
    }

    getItemData = (itemKey) => {
        if (!itemKey) {
            throw new Error(`Key name not passed to save value for`);
        }
        const appData = this.getAppData();
        const value = appData.hasOwnProperty(itemKey) ? appData[itemKey]: null;
        return value
    }    

    setUserId = (userId) => this.setItemData(this.userIdKey, userId);
    getUserId = () => this.getItemData(this.userIdKey);
    
    setFacebookId = (facebookId) => this.setItemData(this.facebookIdKey, facebookId);
    getFacebookId = () => this.getItemData(this.facebookIdKey);

    setSessionToken = (token) => this.setItemData(this.userSessionTokenKey, token);
    getSessionToken = () => this.getItemData(this.userSessionTokenKey);

    setUsername = (userName) => this.setItemData(this.userNameKey, userName);
    getUsername = () => this.getItemData(this.userNameKey);

    setUserImage = (userImage) => this.setItemData(this.userImageKey, userImage);
    getUserImage = () => this.getItemData(this.userImageKey);

    setUserEmail = (userEmail) => this.setItemData(this.userEmailKey, userEmail);
    getUserEmail = () => this.getItemData(this.userEmailKey);

    setUserId = (userId) => this.setItemData(this.userIdKey, userId);
    getUserId = () => this.getItemData(this.userIdKey);

    setUserData = ({
        facebookId,
        token,
        userName,
        userImageLink,
        userEmail,
        userId
    }) => {
        if (facebookId) {
            this.setFacebookId(facebookId);
        }

        if (token) {
            this.setSessionToken(token);
        }

        if (userName) {
            this.setUsername(userName);
        }

        if (userImageLink) {
            this.setUserImage(userImageLink);
        }

        if (userEmail) {
            this.setUserEmail(userEmail);
        }

        if (userId) {
            this.setUserId(userId);
        }
    }

    getUserData = () => this.getAppData();

    removeAppData = () => clearDataFromStorage();
}

const AppLocalStorageInstance = new AppLocalStorage();

export default AppLocalStorageInstance;