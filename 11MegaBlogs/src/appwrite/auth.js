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
        return await this.account.createEmailPasswordSession()
    }


    async getCurrentUser (){
        return await this.account.get()
    }

    async logout (){
        return await this.account.deleteSessions();
    }
}

const authService = new AuthService();

export default authService