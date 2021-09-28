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
                    cols: [
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'AI-driven analytics of your key performance metrics in a single platform'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'With PulseDash you can work smarter, spot trends faster, and predict outcomes accurately.'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'ma-sm-10 ma-4',
                                src: 'desktop-overview.png'
                            }
                        ]
                    ],
                },
                {
                    background: 'background-red-green.png',
                    class: 'px-8',
                    height: 600,
                    cols: [
                        [
                            {
                                tag: 'v-icon',
                                class: 'text-h3 secondary--text font-weight-bold mb-4',
                                text: 'mdi-file-document'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'Data Capture Forms – DIY!<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mb-8',
                                text: 'Our Pulse system allows you flexibility to customise data entry forms that suit your Hospitals environment and comfort levels of your personnel.'
                            },
                            {
                                tag: 'v-icon',
                                class: 'text-h3 secondary--text font-weight-bold mb-4',
                                text: 'mdi-chart-line'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'Valuable Analytics for better insights'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'All data uploaded into the Pulse system automatically generates better insight into your Hospitals operations and is the basis for Predictive Analytics.'
                            }
                        ],
                        [
                            {
                                tag: 'v-icon',
                                class: 'text-h3 secondary--text font-weight-bold mb-4',
                                text: 'mdi-doctor'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'Effective Control of employee access and authority'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mb-8',
                                text: 'You may select and control access, authority and permission levels to all sections within Pulse for greater responsibility and employee discipline.'
                            },
                            {
                                tag: 'v-icon',
                                class: 'text-h3 secondary--text font-weight-bold mb-4',
                                text: 'mdi-calendar-clock'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'Dynamic operational calendars and trackers'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'The Pulse dynamic calendar has alerts, reminders and tracking of key performance metrics activities that are required for better standards in your Hospital.'
                            }
                        ]
                    ],
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    cols: [
                        [
                            {
                                tag: 'v-img',
                                class: 'ma-sm-10 ma-4',
                                src: 'desktop-descriptive-2.png'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'Your hospital performance data, easily captured and analysed to drive you to action!'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Reveal the true power of your hospital’s data and bring clarity to each situation. The PulseDash allows you to analyze data visually at any granularity, without being a data expert and provides everything you need to help you deliver more through the use of greater insight.'
                            }
                        ]
                    ],
                }
            ]
        }
    }
}
</script>

<style scoped src="@/views/pulseDash/pulseDash.css"></style>