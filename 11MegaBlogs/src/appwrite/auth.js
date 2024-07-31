import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;



    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.Account = new Account(this.client)

    }


    async createAccount ({email,password,name}){

        const userAccount = await this.account.create(ID.unique(),email, password, name)

        if (userAccount) {
            return this.login({email, password})
        } else {
            return userAccount
        }
    }

    async login (){
       
        try {
            return await this.account.createEmailPasswordSession()
        } catch (error) {
            console.log("Appwrite serive :: login :: error", error);
        }
    }


    async getCurrentUser (){
       
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }

    async logout (){
      
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: deleteSessions :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService