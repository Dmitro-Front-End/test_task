import axios from 'axios'


const initial = axios.create({
    baseURL : 'https://dummyjson.com',
})


export const chat = {
    getComments : () => initial.get('/comments')
}