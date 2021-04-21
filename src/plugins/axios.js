import Vue from 'vue'
import axios from 'axios'

Vue.use({
	install(Vue) {
		Vue.prototype.$http = axios.create({
			baseURL: 'https://vue-project-2f025-default-rtdb.firebaseio.com/'
		})
	}
}) 
