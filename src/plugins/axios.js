import Vue from 'vue'
import axios from 'axios'

Vue.use({
	install(Vue) {
		Vue.prototype.$http = axios.create({
			baseURL: 'https://stock-34cf8-default-rtdb.firebaseio.com/'
		})
	}
}) 
