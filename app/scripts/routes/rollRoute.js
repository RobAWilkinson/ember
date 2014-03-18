EmberApp.rollRoute = Ember.Route.extend({
  model: function() {
    return [EmberApp.roll.create(), EmberApp.roll.create(), EmberApp.Roll.create() ];
  },

  setupController: function(controller, model) {
    controller.set("content", model);
  }
});
