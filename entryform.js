var app = new Vue({
el: '#app',
data: {
    message: 'Hello, Vue.js!!',
},
});

var app2 = new Vue({
el: '#tab',
data: {
    entries: [
    {text: 'hoge', key: 1},
    {text: 'fuga', key: 2},
    {text: 'foo', key: 3},
    {text: 'bar', key: 4}
    ],
    newText: 'Text'
},
methods: {
    addEntry: function() {
    this.entries.push({
        text: this.newText,
        key: this.entries.length + 1
    })
    this.newText = ''
    }
},
computed: {
    odd: function () {
    return this.entries.filter(x => x.key %2 == 0)
    },
    even: function () {
    return this.entries.filter(x => x.key %2 == 1)
    }
}
})