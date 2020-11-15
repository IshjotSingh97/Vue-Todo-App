const app = new Vue({
    el : '#app',
    data : {
        heading : "To Do App Using Vue",
        id : 1,
        title : '',
        done : false,
        todos : []

    },
    methods : {
        reset(){
            console.log("reset called")
            this.id++
            this.title = ''
            this.done = false
        },
        addTodo(){
            console.log("form submitted")
            let todo = {
                id = this.id 
                title : this.title,
                done : this.done
            }
            this.todos.push(todo)
            console.log(this.todos)
            this.reset()
        }

    }
})