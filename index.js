const app = new Vue({
    el : '#app',
    data : {
        heading : "To Do App Using Vue",
        title : '',
        done : false,
        todos : []
    },
    methods : {
        addTodo(){
            console.log("form submitted")
            let todo = {
                title : this.title,
                done : this.done
            }
            this.todos.push(todo)
            console.log(this.todos)
        }
    }
})