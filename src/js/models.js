var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  initialize: function(){
    console.log("I'm alive!");
  }
});

var myBook = new BookModel();
myBook.set('title', 'where the wild gun man');
console.log(myBook);

