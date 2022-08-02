import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    test2(id) {
      //console.log("test2");
      this.send("sendData", id);
    }
  }
});
