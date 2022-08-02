import Component from '@ember/component';

export default Component.extend({

  actions: {

    async test(e) {
      e.preventDefault();
      console.log("meeting-card");
      this.sendAction('test2');
      //console.log(this.sendAction);
      //let temp = await this.get("meeting");
      //console.log("temp", temp);

      // const qwe = this.get("store").findRecord("meeting", temp.id);

      //console.log("temp2", temp.reports.dataReport);

      //let temp = await his.get("store").findAll("meeting");
      //let temp2 = await temp.reports;
      //this.send("RouteActionSearch");
    }
  }
});
