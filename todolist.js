Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.todoname }}</li>'
  })

  var app3 = new Vue({
    el: '#app3',
    data: {
      todolist: [
        { id: 0, todoname: 'First todo'},
        { id: 1, todoname: 'Private todo'},
      ]
    }
  })