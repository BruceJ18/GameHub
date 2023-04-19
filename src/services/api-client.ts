import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        
        key: '273209b7f0054f31b17085c9bd453e04'
    }
})

