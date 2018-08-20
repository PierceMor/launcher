import axios from 'axios'

export default {
    getUser: function() {
        return axios.get('/api/user');
    },
    deleteUser: function(){
        return axios.delete('/api/user' + id );
    },
    saveUser: function (){
        return axios.post('/api/user', userData )
    }
}