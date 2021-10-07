<template>
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9322952343687!2d101.66563984999472!3d3.1126158977223537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49f64a1f2ded%3A0xd8ebc78babb59971!2sCommon%20Ground%20Menara%20BT%20Bangsar%20South!5e0!3m2!1sen!2smy!4v1633570586692!5m2!1sen!2smy"
            width="100%" height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"></iframe>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/App/Skeleton/Footer.vue'
export default {
    components: {
      Footer
    }
}
</script>

<style scoped src="@/views/contactUs/contactUs.css"></style>