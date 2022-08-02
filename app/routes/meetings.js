import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const temp = this.get("store").findAll("meeting");
    //this.get("store").findRecord("meeting", 1);
    return temp;
  },

  actions: {
    sendData(data) {
      console.log(data);
    }
  }
});
