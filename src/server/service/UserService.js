export default class UserService{
    constructor(){}

    getUserList(){
        return new Promise((resolve, reject) =>{
            resolve([
                {
                    id:'1',
                    name:'huangss'
                },
                {
                    id:'2',
                    name:'3'
                },
            ]);
        });
    };

    addUser(user){
        return new Promise((resolve, reject) =>{
            resolve(user);
        });
    };
}