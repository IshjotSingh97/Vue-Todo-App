const formComponent = {
	data(){
		return {
			id : 1,
			title : ''
		}
	},
	methods : {
		add : ()=>{
			console.log("add method started")
		}
	},
	mounted(){
		console.log(this.title)
		this.id++;
		console.log(this.id)
	}



}

const formComponentLogger = Vue.createApp(formComponent).mount('#todoform')