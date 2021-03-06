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
                content: 'Pulse addresses key challenges in Hospitals - Data, Analytics, Communications and Action. Pulse is focused on driving positive action for improvement in Hospitals by enabling the right action for the right reason at the right time.'
            }
        ]
    },
    data() {
        return {
            sections: [
                {
                    background: 'background-red.png',
                    class: 'px-8',
                    rows: [
                        [
                            [
                                {
                                    tag: 'v-img',
                                    class: 'mx-10',
                                    src: 'every-device.png'
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
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mx-sm-8 mb-8',
                                    text: 'Our Pulse Analytics and Productivity Suite is a SaaS Platform for Hospitals.<br>' +
                                            'The Platform addresses key challenges in Hospitals:<br>' +
                                            'Data, Analytics, Communications and Timely Action.<br>'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left mx-sm-8',
                                    text: 'As Accreditation and Healthtech Consultants, we appreciate the need for a software solution to help raise hospital standards of care and patient safety.<br>' +
                                            'We also believe in the combined value of key performance metrics with data analysis.<br>' +
                                            'The Pulse Team has conceptualised, designed and engineered a revolutionary Healthtech solution for Hospitals – Pulse!'
                                }
                            ]
                        ]
                    ]
                },
                {
                    background: 'background-red-red.png',
                    class: 'px-8',
                    align: 'start',
                    rows: [
                        [
                            [
                                {
                                    tag: 'v-icon',
                                    class: 'text-h3 mb-4 primary--text',
                                    text: 'mdi-chart-areaspline'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Good data tells good stories!<br><span class="transparent--text">_</span>'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Pulse consolidates hospital performance data that tell interesting stories about your leadership and governance, patient safety and quality of care.'
                                }
                            ],
                            [
                                {
                                    tag: 'v-icon',
                                    class: 'text-h3 mb-4 primary--text',
                                    text: 'mdi-emoticon-happy'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Ensuring a positive Patient Experience!'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'All hospitals today are driven by the need to ensure a positive Patient Experience or risk losing out to competitors.'
                                }
                            ],
                            [
                                {
                                    tag: 'v-icon',
                                    class: 'text-h3 mb-4 primary--text',
                                    text: 'mdi-stairs-up'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Technology Adoption and Digital Culture'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Hospitals are adopting new Technologies to drive clinical and operational efficiencies and to develop a Digital Culture.'
                                }
                            ],
                            [
                                {
                                    tag: 'v-icon',
                                    class: 'text-h3 mb-4 primary--text',
                                    text: 'mdi-shield-star'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Responsibility For Data<br><span class="transparent--text">_</span>'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Hospitals are accepting that the responsibility of good data for improvement is the responsibility of all Doctors, Nurses and Employees.'
                                }
                            ],
                            [
                                {
                                    tag: 'v-icon',
                                    class: 'text-h3 mb-4 primary--text',
                                    text: 'mdi-cursor-default-click'
                                },
                                {
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'Interactive User Interface and User Experience'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left',
                                    text: 'Pulse provides you with a user friendly interface focused on delivering the best user experience and simplified flow to ensure wide acceptance and adoption.'
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
                                    tag: 'div',
                                    class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                    text: 'To capture and validate data from the operations floor of a hospital 24/7 is Digital Transformation!'
                                },
                                {
                                    tag: 'div',
                                    class: 'black--text text-left mb-8',
                                    text: 'With Pulse, you have the gift of mobility!. Capture and verify incidents and events that occur around the hospital with just a few taps on your mobile application. Gain an overall view of your hospital’s operations from your own devices whenever you need it. Mobility is key!'
                                },
                                {
                                    tag: 'v-btn',
                                    class: 'primary mr-4 mb-4',
                                    text: 'About Pulse App',
                                    to: 'pulse-app'
                                },
                                {
                                    tag: 'v-btn',
                                    class: 'primary mr-4 mb-4',
                                    text: 'About Pulse Dash',
                                    to: 'pulse-dash'
                                }
                            ],
                            [
                                {
                                    tag: 'v-img',
                                    class: 'ma-10',
                                    src: 'desktop-descriptive-2.png'
                                }
                            ]
                        ]
                    ] 
                },
                {
                    background: 'background-red-green.png',
                    class: 'px-8',
                    rows: [
                        [
                            [
                                {
                                    tag: 'v-img',
                                    class: 'icon mb-8',
                                    src: 'fall-management.png'
                                },
                                {
                                    tag: 'div',
                                    class: 'primary--text font-weight-bold mb-8 mx-4',
                                    text: 'How many patient falls did you have over the last year? <span class="transparent--text">________________</span>'
                                }
                            ],
                            [
                                {
                                    tag: 'v-img',
                                    class: 'icon mb-8',
                                    src: 'needle-stick-injury.png'
                                },
                                {
                                    tag: 'div',
                                    class: 'primary--text font-weight-bold mb-8 mx-4',
                                    text: 'How many do you learn from, and avoid further needle stick injuries? <span class="transparent--text">________________</span>'
                                }
                            ],
                            [
                                {
                                    tag: 'v-img',
                                    class: 'icon mb-8',
                                    src: 'department-and-committee.png'
                                },
                                {
                                    tag: 'div',
                                    class: 'primary--text font-weight-bold mb-8 mx-4',
                                    text: 'How well are your departments and committees performing?<span class="transparent--text">________________</span>'
                                }
                            ],
                            [
                                {
                                    tag: 'v-img',
                                    class: 'icon mb-8',
                                    src: 'hand-hygiene.png'
                                },
                                {
                                    tag: 'div',
                                    class: 'primary--text font-weight-bold mb-8 mx-4',
                                    text: 'How do you monitor and improve your nurses hand-hygiene compliance?'
                                }
                            ]
                        ],
                        [
                            [
                                {
                                    tag: 'div',
                                    class: 'primary--text mx-sm-16 text-h5',
                                    text: 'These are some of the questions of key performance metrics that our Pulse Analytics and Productivity Suite helps Hospitals monitor, analyze and improve.'
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

<style scoped src="@/views/aboutPulse/aboutPulse.css"></style>