import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
   async delete(meeteing){
      await meeteing.destroyRecord();
    }
  }
});
