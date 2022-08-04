import Component from '@ember/component';
import ENV from 'books/config/environment';

export default Component.extend({
    iAmRobot: true,
    reset: false,
    siteKeyCaptcha:ENV['ember-cli-google'].recaptcha.siteKey,

    actions: {
        async saveReview(e) {
            e.preventDefault();
            this.get('onSubmit')({
                email: this.get('email'),
                password: this.get('password'),
            });
        },

        async verified(key) {
            try {
                const { success } = await (await fetch(`${ENV.backendUrl}/recaptcha?key=${key}`)).json();
                this.set('iAmRobot', !success);
            } catch (error) {
                this.set('reset', true);
            }
        },

        expired() {
            this.set('iAmRobot', true);
        }
    },
});
