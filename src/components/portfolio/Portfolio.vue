<template>
	<v-layout row wrap>
		<Stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" />
	</v-layout>
</template>

<script>
import Stock from './Stock'
// import {mapGetters} from 'vuex'

export default {
	components: {Stock},
	computed: {

		// ...mapGetters({
		// 	stocks: 'stockPortfolio'
		// })

		stockPortfolio() {
			return this.$store.getters.stockPortfolio
		}
	}
}
</script>

<style>
</style>