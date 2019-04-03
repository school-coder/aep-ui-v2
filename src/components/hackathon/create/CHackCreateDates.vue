<template>
    <section>
      <div class="row container-fluid" id="create-basic-info-wrapper">
          <form class="col-lg-6">
              <div class="form-group">
                  <label for="id-hk-startdate">Registration start date</label>
                  <datepicker input-class="form-control" v-model="hackathon.registrationStartDate"></datepicker>
              </div>
              <div class="form-group">
                  <label for="id-hk-endate">Registration end date</label>
                  <datepicker input-class="form-control" v-model="hackathon.registrationEndDate"></datepicker>
              </div>
              <div class="form-group">
                  <label for="id-hk-startdate">Winning announcement date</label>
                  <datepicker input-class="form-control" v-model="hackathon.winningAnnouncementDate"></datepicker>
              </div>
          </form>
      </div>
    </section>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  props: ['hackathon'],
  components: {
    Datepicker
  }
}
</script>

<style>

</style>
