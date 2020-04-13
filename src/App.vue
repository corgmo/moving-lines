<template>
	<div class="wrapper pl-2 pr-2">
		<div class="row mt-3">
			<div class="col-12 text-center">
				<button class="play-button w-100" @click="doAnimation" v-html="playButton"></button>
			</div>
		</div>
		<div class="lines-wrapper border mt-3 mb-3">
			<div v-for="country in getCountries" :key="country.name" :class="getClass(country.current)">
				<div class="text-right col-4 col-sm-3 pl-0 pr-0">
					<small>{{ country.name }}</small>
				</div>
				<div class="text-right col-5 col-sm-6 pl-2 pr-2">
					<div class="bg-primary line h-100" :style="getWidth(country.current)"></div>
				</div>
				<div class="col-3 pl-0 pr-0">
					<small>{{ formatNumber(country.current) }}</small>
				</div>
			</div>
		</div>
		<div class="row mt-3 mb-3">
			<div class="col-6 text-center">
				Day {{ day }}
			</div>
			<div class="col-6 text-center">
				Total: {{ getTotal }}
			</div>
		</div>
	</div>
</template>

<script>

import CountryList from '@/country-list';

export default {
	name: "app",
	data () {
		return {
			day: 0,
			end: 100,
			play: false,
			countries: CountryList
		}
	},
	methods: {
		getWidth (current) {
			return current <= this.getMaxCurrent ? 'width:' + (current * 100 / this.getMaxCurrent) + '%' : '';
		},

		getClass (current) {
			let countries = JSON.parse(JSON.stringify(this.getCountries));
			countries.sort((a, b) => {
				if(a.current > b.current) return -1;
				if(a.current < b.current) return 1;
				return 0;
			})

			let order = 1;
			countries.forEach((country, i) => {
				if(current == country.current) order = i + 1;
			});
			return `row count position-${ order }`;
		},

		formatNumber (i) {
			return Math.round(i).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		},

		doAnimation () {

			if(this.day == this.end) this.day = 0;

			this.play = !this.play;

		}
	},
	computed: {
		getMaxCurrent () {
			let countries = JSON.parse(JSON.stringify(this.getCountries));
			return countries.sort((a, b) => a.current - b.current)[countries.length - 1].current;
		},

		getCountries () {

			return this.countries.map(country => {

				country.current = country.start < this.day ? (country.total / (country.end - country.start)) * (this.day - country.start) : 0;

				if(this.day > country.end) country.current = country.total;

				return country;

			})
		},

		getTotal () {
			return this.formatNumber(
				this.getCountries.reduce((a, b) => ({current: a.current + b.current})).current
			);
		},

		playButton () {
			return this.play ? 'Stop <span class="far fa-stop-circle"></span>' : 'Start <span class="far fa-play-circle"></span>'
		}

	},
	mounted () {

		setInterval(() => {if(this.play) this.day++}, 550);

	},
	watch: {

		day () {
			if(this.day >= this.end) this.play = false;
		}

	}
};
</script>

<style lang="scss" scoped>
.wrapper {
	max-width: 900px;
	margin: 0 auto;
}

.lines-wrapper {
	position: relative;
	overflow: hidden;
	height: 305px;
}

.count {
	position: absolute;
	top: 110%;
	width: 100%;
	opacity: 0;
	transition: top 0.5s ease-in-out, opacity 0.5s;
}

.line {
	transition: width 0.5s ease-in-out;
}

@for $i from 0 through 9 {
	.position-#{$i + 1} {
		top: #{($i * 30) + 5}px;
		opacity: 1;
	}
}

.play-button {
	max-width: 250px;
}
</style>