var Workspace = Backbone.Router.extend({
  routes: {
      "home":           "home",   // #home
      "users":          "users",  // #users
      "users/:userId":  "user"    // #users/123
  },

  home: function() {
      //render home view
  },

  users: function() {
      //render user list view
  },

  user: function(userId) {
      //render user view
  }
});