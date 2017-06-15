Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('photos', {
    path: '/',
    template: 'photos'
  });

  this.route('tests', {
    path: '/tests',
    template: 'tests'
  });

  this.route('addphoto', {
    path: '/add',
    template: 'addphoto'
  });

  this.route('photo', {
    path: '/photos/:_id',
    template: 'photo',
    data: function(){
      templateData = {
        photo: Photos.findOne({_id: this.params._id})
      };
      return templateData;
    }
  });
});
