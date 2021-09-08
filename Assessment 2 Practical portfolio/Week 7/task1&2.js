Vue.component("global-component",{
	props:{
		title:String,
		author:Object,
		likes:Number,
		comments:Number,
		
	},
	template:`
			<div><p><globalComponent></globalComponent></p> 
				<p>{{title}}</p>
				<p>by {{author.name}}</p>
				<p>likes - {{likes}}</p>
				<p>comments - {{comments}}</p>
				<button v-on:click="$emit(\'buy-coffee\')">Buy me a coffee</button>
			</div>
			`,
})

Vue.component("globalComponent",{
	template:"<h1>Global Registration</h1>",
})

var localComponent = {
	template: "<h1>Local Registration</h1>",
}

var app = new Vue({
	el: "#app",
	data: {
		post: {
			title:'How to create a globally registered component',
			author: {
				name: 'Brian Caldera',
			},
			likes: 1,
			comments: 0,
		},
	},
	components: {
		"local-component": localComponent,
	}, 
	methods: {
		buyCoffee: function() {
			alert("Thank you!");
		},
	
	},
})