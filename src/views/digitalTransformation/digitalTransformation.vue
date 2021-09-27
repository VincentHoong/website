<template>
    <div>
        <ContentBuilder :sections="sections"/>
        <Footer/>
    </div>
</template>

<script>
import ContentBuilder from '@/components/ContentBuilder/ContentBuilder.vue'
import Footer from '@/components/App/Skeleton/Footer.vue'
export default {
    components: {
      ContentBuilder,
      Footer
    },
    data() {
        return {
            sections: [
                {
                    background: 'background-white.png',
                    class: this.$vuetify.breakpoint.mobile?'':'px-8',
                    height: 700,
                    cols: [
                        [
                            {
                                tag: 'div',
                                class: 'text-h4 primary--text text-left font-weight-bold mx-8 mb-8',
                                text: 'Digital Transformation strategies in hospitals are held back by data challenges'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mx-8',
                                text: 'A high percentage of hospitals store data in silos, face data integration issues and poor legacy systems – making digital transformation very difficult.'
                            },
                            {
                                tag: 'v-carousel',
                                items: [
                                    'banner-1.png',
                                    'banner-2.png',
                                    'banner-3.png',
                                    'banner-4.png',
                                    'banner-5.png'
                                ]
                            }
                        ]
                    ]
                },
                {
                    background: 'background-red-green.png',
                    class: 'px-8',
                    cols: [
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8 mx-4',
                                text: 'Hospitals need data that enables quick decision making'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mx-4',
                                text: '“Traditionally, review committees in hospitals were making decisions based on things happening last month or trends from 60 days ago;<br>' +
                                        'Getting visibility of data in real-time, analyzing that quickly, and bringing that to the leaders so the CEO or CNO can act on it, is a best practice.”<br><br>' +
                                        '<b>Darin M. Vercillo, MD, co-founder, and CEO of Central Logic</b>'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'':'ma-10',
                                src: 'hospital-overview-2.png'
                            }
                        ]
                    ]
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    cols: [
                        [
                            {
                                tag: 'v-tabs',
                                tabs: [
                                    {
                                        tabTitle: 'Pulse Digitally Transforms',
                                        src: 'doctor-globe.png',
                                        title: 'We enable data capture to enable data stories',
                                        text: 'We help transform Data into great and compelling stories for insight and learning to support urgent and better decision making in your Hospital, resulting in better outcomes and Patient satisfaction.'
                                    },
                                    {
                                        tabTitle: 'Precision Health',
                                        src: 'matrix.png',
                                        title: 'We facilitate analytics of treatments and best outcomes',
                                        text: 'We help Hospitals begin their journey into Precision Health with analytics of diagnosis, treatment protocols, patient demographics and positive outcomes. Hospitals are equipped with analysis that guides their Precision Health initiatives.'
                                    },
                                    {
                                        tabTitle: 'Democratize Data',
                                        src: 'strethoscope.png',
                                        title: 'We centralize key data metrics and democratize access',
                                        text: 'The capture, analysis, interpretation and resulting action is the responsibility of ALL personnel in Hospitals. Digitally mature Hospitals ensure All personnel have access to key data for quick and effective decision making.'
                                    },
                                    {
                                        tabTitle: 'Improved Patient Experience',
                                        src: 'doctors-patients-2.png',
                                        title: 'From Admission to Discharge – Hospitals deliver a better Patient Experience',
                                        text: 'We support the entire journey of Patients from Admission to Discharge by tracking key performance metrics of leadership, patient safety and quality of care. Hospitals operate at higher standards.'
                                    }
                                ]
                            }
                        ]
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped src="@/views/digitalTransformation/digitalTransformation.css"></style>