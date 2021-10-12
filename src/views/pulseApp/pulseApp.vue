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
    metaInfo: {
        meta: [
            {
                name: 'description',
                content: 'Accredited hospitals know the value of good data, analysis of data and quality improvement based on validated data. Your risk and quality practices are digitally transformed and patterns emerge - future proofing your hospital.'
            }
        ]
    },
    data() {
        return {
            sections: [
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    rows: [
                        [
                            [
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Data capture and validation simplified. Mobility is key!'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Report incidents and schedule events through pre-set digital forms. With just a couple of clicks, anyone in the hospital can now report an incident and schedule events with automated alerts and notifications.'
                                }
                            ],
                            [
                                {

                                    tag: 'v-img',
                                    class: 'ma-sm-10 ma-4',
                                    src: 'doctors-3.png'
                                }
                            ]
                        ]
                    ]
                },
                {
                    background: 'background-red-red.png',
                    class: 'px-8',
                    rows: [
                        [
                            [
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Simplified Data Capture across Departments and hospital wide'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left mb-8',
                                    text: 'Consolidate data with easy access that can shorten the communication process between doctors, nurses and all hospital employees.'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Calendar and Event Management'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Built-in scheduler that allows you to schedule meetings with alert notifications and automatic reminders. This applies to unscheduled and ad-hoc events.'
                                }
                            ],
                            [
                                {
                                    tag: 'v-img',
                                    class: 'phone',
                                    src: 'mobile-forms.png'
                                }
                            ],
                            [
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Alert Notifications for Action<br><span class="transparent--text">_</span>'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left mb-8',
                                    text: 'Automated push notification for all tasks that require your attention within the app.<br><span class="transparent--text">_</span><br><span class="transparent--text">_</span>'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Data Approval / Verification / Authentication'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'In-built data verification and authentication process which ensures only relevant data is captured and analysed.<br><span class="transparent--text">_</span>'
                                }
                            ]
                        ]
                    ]
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    rows: [
                        [
                            [
                                {

                                    tag: 'v-img',
                                    class: 'ma-sm-10 ma-4',
                                    src: 'doctors-4.png'
                                }
                            ],
                            [
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'An app built with the hospital user in mind. Your very own personal assistant!'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Imagine being able to capture and subsequently verify data from anywhere around the hospital as and when incidents happen. The Pulse app enables this and has digitised the entire process. Capturing digital data in your hospital, analysing data, learning and taking action has never been easier!'
                                }
                            ]
                        ]
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped src="@/views/pulseApp/pulseApp.css"></style>