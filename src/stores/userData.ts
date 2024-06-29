import {defineStore} from "pinia";

export const userDataStore = defineStore(
    'userDataStore',
    {
        state: () => ({
            name: localStorage.getItem('name') || ''
        }),
        actions: {
            setName(name: string) {
                localStorage.setItem('name', name)
            },
            clearName() {
                localStorage.removeItem('name')
            }
        },
        getters: {
            getName: () => {
                return localStorage.getItem('name')
            }
        }
    }
)
