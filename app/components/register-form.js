import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'books/config/environment';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    email: [
        validator('ds-error'),
        validator('presence', true),
        // validator('presence', { presence: true, message:computed('model.{email,i18n.locale}', function () {
        //     return get(this, 'model.i18n').t('errors.empty');
        //   }) }),
        validator('format', { type: 'email' })
    ],
    password: [
        validator('ds-error'),
        validator('presence', true),
        validator('length', {
            min: 4,
            max: 8
        })
    ]
});

export default Component.extend(Validations,{
    i18n: service(),
    iAmRobot: true,
    reset: false,
    siteKeyCaptcha: ENV['ember-cli-google'].recaptcha.siteKey,
    isFormValid: computed.alias('validations.isValid'),
    isSubmit: false,

    actions: {
        async saveReview(e) {
            e.preventDefault();
            if (this.get('isFormValid')) {
                this.get('onSubmit')({
                    email: this.get('email'),
                    password: this.get('password'),
                });
            } else {
                this.set('isSubmit', true)
            }
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
