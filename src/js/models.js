var Stack = Backbone.Model.extend({
  defaults: {
    title: null,
    instructor: null,
    language: null
  },
  initialize: function () {
    this.set('instructor', 'Michael Choi');
  }
});

var stack_1 = new Stack({
  title: 'Ruby on Rails',
  language: 'Ruby'
});

var stack_2 = new Stack({
  title: 'MEAN',
  language: 'Javascript'
});

console.log(stack_1);
console.log(stack_2);
