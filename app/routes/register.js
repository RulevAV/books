import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
          email: '',
          username: '',
          password: '',
          passwordConfirmation: ''
        }
      },
    
      resetController(controller, isExiting, transition) {
        this._super(...arguments);
        if (isExiting) {
          controller.resetErrors();
        }
      }
});
