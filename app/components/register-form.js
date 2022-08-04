import Component from '@ember/component';

export default Component.extend({
    actions: {
        async saveReview(e) {
            e.preventDefault();
            this.get('onSubmit')({
                email: this.get('email'),
                password: this.get('password'),
            });
        }
    }
});
