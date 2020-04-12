<template>
	<div class="wrapper">
		<div class="row mt-3">
			<div class="col-3 text-center">
				<button @click="doAnimation">{{ play ? 'Stop' : 'Start' }}</button>
			</div>
			<div class="col-6 text-center">
				Day {{ day }}
			</div>
			<div class="col-3 text-center">
				Total: {{ getTotal }}
			</div>
		</div>
		<div class="lines-wrapper">
			<div v-for="country in getCountries" :key="country.name" class="mb-2">
				
				<div v-if="country.start < day" :class="getClass(country.current)">
					<div class="text-right col-3">
						<small>{{ country.name }}</small>
					</div>
					<div class="text-right col-6 pl-0 pr-0 border-left">
						<div class="bg-primary line h-100" :style="getWidth(country.current)"></div>
					</div>
					<div class="col-3">
						<small>{{ formatNumber(country.current) }}</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "app",
	data () {
		return {
			day: 0,
			end: 100,
			play: false,
			countries: [
				{
					name: 'US',
					start: 80,
					end: 100,
					total: 530830
				},
				{
					name: 'UK',
					start: 80,
					end: 100,
					total: 85173
				},
				{
					name: 'Italy',
					start: 60,
					end: 100,
					total: 152271
				},
				{
					name: 'Spain',
					start: 60,
					end: 100,
					total: 166019
				},
				{
					name: 'China',
					start: 1,
					end: 60,
					total: 83134
				},
				{
					name: 'France',
					start: 70,
					end: 100,
					total: 130730
				},
				{
					name: 'Germany',
					start: 75,
					end: 100,
					total: 125834
				},
				{
					name: 'Iran',
					start: 60,
					end: 100,
					total: 71686
				},
				{
					name: 'Turkey',
					start: 80,
					end: 100,
					total: 52167
				},
				{
					name: 'Belgium',
					start: 75,
					end: 100,
					total: 29647
				},
				{
					name: 'Netherlands',
					start: 75,
					end: 100,
					total: 25746
				},
				{
					name: 'Switzerland',
					start: 75,
					end: 100,
					total: 25328
				},
				{
					name: 'Canada',
					start: 85,
					end: 100,
					total: 23717
				},
			]
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
		}

	},
	mounted () {

		setInterval(() => {if(this.play) this.day++}, 500);

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
	min-width: 500px;
	max-width: 900px;
}

.lines-wrapper {
	position: relative;
	overflow: hidden;
	height: 300px;
}

.count {
	position: absolute;
	width: 100%;
	transition: top 0.3s;
}

.line {
	width: 0;
	transition: width 0.3s;
}

@for $i from 0 through 13 {
	.position-#{$i + 1} {
		top: #{$i * 30}px;
	}
}
</style>