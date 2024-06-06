// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        tokenExpiration: localStorage.getItem('tokenExpiration') ? new Date(localStorage.getItem('tokenExpiration')!) : null,
    }),
    actions: {
        setToken(token: string, expirationInMinutes: number) {
            this.token = token
            const expirationDate = new Date()
            expirationDate.setMinutes(expirationDate.getMinutes() + expirationInMinutes)
            this.tokenExpiration = expirationDate

            localStorage.setItem('token', token)
            localStorage.setItem('tokenExpiration', expirationDate.toISOString())

            // Automatically clear token when it expires
            setTimeout(() => {
                this.clearToken()
            }, expirationInMinutes * 60 * 1000)
        },
        clearToken() {
            this.token = ''
            this.tokenExpiration = null
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiration')
        },
        checkTokenValidity() {
            if (this.tokenExpiration && new Date() > this.tokenExpiration) {
                this.clearToken()
            }
        },
        isTokenValid() {
            return this.token && this.tokenExpiration && new Date() <= this.tokenExpiration
        }
    },
})

// Ensure token validity is checked when the store is initialized
const authStore = useAuthStore()
authStore.checkTokenValidity()
