import axios from 'axios'

export default {
    getUser: function() {
        return axios.get('/api/user');
    },
    deleteUser: function(id){
        return axios.delete('/api/user' + id );
    },
    saveUser: function (userData){
        return axios.post('/api/user', userData ); 
    }
}