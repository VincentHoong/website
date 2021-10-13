<template>
  <div>
    <v-img src="@/assets/images/background-green.png" class="px-8">
      <v-row justify="center" class="my-8 px-4">
        <v-col cols="12" sm="6">
          <div class="text-h5 primary--text mb-8">
            Should you have any queries, kindly provide your contact details as follows:
          </div>
          <v-form ref="form" @submit.prevent="sendEmail">
            <v-text-field label="Name *" outlined dense v-model="email.name" :rules="[fieldValidationRules.required]"></v-text-field>
            <v-text-field label="Email Address *" outlined dense v-model="email.from" :rules="[fieldValidationRules.required]"></v-text-field>
            <v-select label="Contact Reason *" outlined dense v-model="email.subject" :rules="[fieldValidationRules.required]" :items="selection.subject"></v-select>
            <v-textarea label="Message *" outlined dense no-resize v-model="email.message" :rules="[fieldValidationRules.required]"></v-textarea>
            <v-btn class="primary rounded-0" large type="submit" :loading="loading" :disabled="loading">
              Contact Us
              <v-icon right>mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
              <tr>
                <td class="pa-2"><v-icon>mdi-map-marker</v-icon></td>
                <td class="pa-2 black--text">
                  Common Ground Bangsar South<br>
                  Level 2, Tower 3, Avenue 7 Horizon 2,<br>
                  Bangsar South City, Bangsar South,<br>
                  59200 Kuala Lumpur</td>
              </tr>
              <tr>
                <td class="pa-2"><v-icon>mdi-phone</v-icon></td>
                <td class="pa-2 black--text">+603 2711 2736</td>
              </tr>
              <tr>
                <td class="pa-2"><v-icon>mdi-email</v-icon></td>
                <td class="pa-2 black--text">inquiries@pulsedt.tech</td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-img>
    <div class="primary white--text pa-4">
      <table>
        <tbody>
          <tr>
            <td class="pr-4">
              <v-img src="@/assets/images/banner-invert.png" contain
                      max-width="15vw" max-height="10vh"></v-img>
            </td>
            <td class="text-body-2">
              Copyright © 2021<br>
              Pulse Data Technologies Sdn. Bhd. (202001028644).<br>
              All Rights Reserved.<br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import fieldValidationRules from '@/mixins/fieldValidationRules.js';
export default {
  data() {
    return {
      email: {
        name: '',
        from: '',
        subject: 'Request a Demo',
        message: ''
      },
      fieldValidationRules: fieldValidationRules,
      loading: false,
      selection: {
        subject: [
          'General Infromation',
          'Request a Demo',
          'Contact Sales',
          'Media',
          'Partner'
        ]
      }
    }
  },
  methods: {
    sendEmail() {
      let vm = this;
      if (vm.$refs.form.validate()) {
        vm.loading = true;
        vm.curl("GET", "users/sendEmail", vm.email)
        .then((res) => {
          if (res.data  === true) {
            vm.notify('Email sent!');
            vm.email = {
              name: '',
              from: '',
              subject: 'Request a Demo',
              message: ''
            };
            vm.$refs.form.resetValidation();
          } else {
            vm.notify(res.data);
          }
        })
        .catch((error) => {
          vm.notify(error);
        })
        .finally(() => {
          vm.loading = false;
        })
      }
    }
  }
}
</script>

<style scoped src="@/components/App/Skeleton/Footer.css"></style>