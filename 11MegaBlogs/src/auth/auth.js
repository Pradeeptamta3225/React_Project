import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    Client = new Client();
    account;



    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf. appwriteProjectId)
        this.Account = new Account(this.Client)

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


    async getUser (email, password){
        return await this.account.get(email,password)
    }

    async logout (){
        return await this.account.deleteSessions();
    }
}