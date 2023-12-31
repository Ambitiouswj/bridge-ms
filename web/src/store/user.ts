import { defineStore } from "pinia";
import router from "../router";
import { pinia } from ".";
export const useUserStore = defineStore('user', {
    persist: true,
    state: () => {
        return {
            account:"",
            username:'',
            units_id:"",
            units_name:'',
            is_login:false,
        }
    },
    actions: {
        logout() {
            this.account=""
            this.is_login=false
            this.username=""
            this.units_id = ""
            this.units_name = ''
            sessionStorage.removeItem("is_login")
            router.push('login')
        }
    }
})

export function useUserStoreWithOut() {
    return useUserStore(pinia)
}