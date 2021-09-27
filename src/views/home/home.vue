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
                    background: 'background-red.png',
                    class: 'px-8',
                    cols: [
                        [
                            {
                                tag: 'div',
                                class: 'text-h4 primary--text font-weight-bold',
                                text: 'CLEAR AS DAY!'
                            },
                            {
                                tag: 'div',
                                class: 'text-h4 primary--text mb-8',
                                text: 'Data that drives action!'
                            },
                            {
                                tag: 'div',
                                class: 'black--text font-weight-bold mb-8',
                                text: 'Hospitals need clear visibility of operations, to take the right action, at the right time, for the right reason'
                            },
                            {
                                tag: 'v-btn',
                                class: 'rounded-0 primary mr-4 mb-4',
                                text: 'About Pulse',
                                to: 'about-pulse'
                            },
                            {
                                tag: 'v-btn',
                                class: 'rounded-0 primary mr-4 mb-4',
                                text: 'Contact Us',
                                to: 'contact-us'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: '',
                                src: 'laptop-mobile.png'
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
                                tag: 'div',
                                class: 'text-h5 primary--text',
                                text: 'Data Capture<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'ma-10':'',
                                src: 'mobile-forms-2.png'
                            },
                            {
                                tag: 'div',
                                class: 'black--text',
                                text: 'A Mobile App To Capture Data From Hospital Operations'
                            }
                        ],
                        [
                            {
                                tag: 'v-icon',
                                class: 'text-center',
                                text: 'mdi-plus'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text',
                                text: 'Data Analysis<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'ma-10':'',
                                src: 'processor.png'
                            },
                            {
                                tag: 'div',
                                class: 'black--text',
                                text: 'A Pulse Engine To Aggregate And Analyse Your Data'
                            }
                        ],
                        [
                            {
                                tag: 'v-icon',
                                class: 'text-center',
                                text: 'mdi-plus'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text',
                                text: 'Visualize Performance'
                            },
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'ma-10':'',
                                src: 'desktop-descriptive.png'
                            },
                            {
                                tag: 'div',
                                class: 'black--text',
                                text: 'Converts Data Into Knowledge To Drive Decision Making'
                            }
                        ]
                    ],
                },
                {
                    background: 'background-red-green.png',
                    class: 'px-8',
                    height: '700',
                    cols: [
                        [
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'Key Performance Metrics, digitally transformed!<br><span class="transparent--text">_</span>',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'Monitor, Measure and Analyse your hospital’s Key Performance Metrics to design and successfully execute Quality Improvement Programmes.<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'Improves Clinical Processes for better operational efficiencies!',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'Post-C19 pandemic, operational efficiencies of clinical departments separate the good from the poor, the winners from the rest.<br><span class="transparent--text">_</span>'
                            }
                        ],
                        [
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'Secure Internal Communications, 24/7!<br><span class="transparent--text">_</span>',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'Still using SMS? Email overload? Whatsapp overload? Pulse provides your Doctors, Nurses and Employees with a secure internal communications platform.'
                            },
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'Promotes on-the-job learning through data driven decision making! ',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'Pulse supports your Digital Transformation strategies to include “learning health systems” for clinical best practices through data-driven decision making (D3M).'
                            }
                        ],
                        [
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'A Better Understanding of operations!<br><span class="transparent--text">_</span>',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'When your doctors, Nurses and Employees have access to key operational data, they feel empowered to deliver superior standards of care and patient safety.'
                            },
                            {
                                tag: 'v-card',
                                class: 'rounded-0 pa-6 my-4',
                                title: 'Supports and sustains your Digital Culture!<br><span class="transparent--text">_</span>',
                                titleClass: 'primary--text font-weight-bold',
                                text: 'Developing a Digital Culture in your Hospital requires a “knowledge ecosystem”, a system that enables visibility of operations, continuous feedback, learning and improvement.'
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
                                tag: 'div',
                                class: 'text-h4 primary--text text-left mb-8',
                                text: 'When your Doctors and Nurses are driven by data, you develop Certainty, Consistency and Confidence!'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mb-4',
                                text: 'The Pulse System aims to help you:'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: '<ul><li>improve your standards of patient safety and quality of care,</li>' +
                                        '<li>direct you actions towards greater efficiency,</li>' +
                                        '<li>deliver a better patient experience and</li>' +
                                        '<li>create a better environment for doctors, nurses and employees.</li></ul>'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'':'ma-10',
                                src: 'doctors-1.jpg'
                            },
                        ]
                    ]
                },
                {
                    background: 'background-red-red.png',
                    class: 'px-8',
                    cols: [
                        [
                            {
                                tag: 'v-img',
                                class: this.$vuetify.breakpoint.mobile?'':'ma-10',
                                src: 'doctors-patients-1.jpg'
                            },
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h4 primary--text text-left mb-8',
                                text: 'The Pulse Analytics and Productivity Suite'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mb-4',
                                text: '<ul><li>Monitor key performance metrics like Patient Falls, HAI’s and Medication Errors</li>' +
                                        '<li>Analyze your operational data with Automated Algorithms</li>' +
                                        '<li>Discover gaps in your service delivery and clinical processes</li>' +
                                        '<li>Improve your standards with effective Quality Improvement Programs</li></li></ul>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Our Pulse System prompts you into action through alerts, notifications and analytics based on international accreditation standards.'
                            }
                        ]
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped src="@/views/home/home.css"></style>