class FacebookUtil {
    
    fbIstance = undefined;

    constructor(appId, appVersion) {
        const { FB } = window;
        if (!FB) {
            throw new Error('Facebook not initialized');
        }

        this.fbIstance = FB;
        // Initializing facebook API with APP ID
        this.fbIstance.init({
            appId: appId,
            autoLogAppEvents: true,
            xfbml: true,
            version: appVersion
        });
    }

    login = () => new Promise((resolve, reject) => {
        this.fbIstance.login(response => {
            const {authResponse} = response;            
            if (!authResponse) {
                reject(new Error('Error on facebook login'));
            }else {
                resolve(authResponse);
            }
        }, {scope: 'public_profile,email'});
    });

    getUserData = () => new Promise((resolve, reject) => {
        this.fbIstance.api('/me', {fields: "id,name,picture, email"}, function({
            error,
            name,
            email,
            picture
        }) {
            if (error) {
                reject(new Error('Error while fetching user data'))
            } else {
                resolve({name, email, picture});
            }
        });
    });
}

const FBUtil = new FacebookUtil('1624742564354986', 'v6.0');

export default FBUtil;