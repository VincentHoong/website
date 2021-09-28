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
                content: 'We use global accreditation standards in our SaaS software to improve Leadership and Governance, Patient Safety and Quality of Care in hospitals. We use Algorithms and Analytics to monitor and measure Performance Metrics for quality improvement.'
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
                                tag: 'v-icon',
                                class: 'text-h1 secondary--text font-weight-bold mb-8',
                                text: 'mdi-trophy'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text text-left font-weight-bold mx-sm-8 mb-8',
                                text: 'Vision – All Hospitals adopt Data-Driven Decision Making (D3M) practices'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left font-weight-bold mx-sm-8',
                                text: 'Hospitals need clear visibility of operations, to take the right action, at the right time, for the right reason'
                            },
                        ],
                        [
                            {
                                tag: 'v-icon',
                                class: 'text-h1 secondary--text font-weight-bold mb-8',
                                text: 'mdi-bullseye-arrow'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text text-left font-weight-bold mx-sm-8 mb-8',
                                text: 'Mission – Raising standards in Hospitals!<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left font-weight-bold mx-sm-8',
                                text: 'Hospitals need clear visibility of operations, to take the right action, at the right time, for the right reason'
                            },
                        ],
                    ]
                },
                {
                    background: 'background-red-red.png',
                    class: 'px-8',
                    cols: [
                        [
                            {

                                tag: 'v-img',
                                class: 'ma-sm-10 ma-4',
                                src: 'hospital-overview.png'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'A SaaS company with a difference.'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Pulse Data Technologies (PDT) is a tech startup with a multi-disciplinary team with proven industry expertise and knowhow in hospital operations, global accreditation standards, data sciences and software development.<br><br>' +
                                      'We have developed our Pulse System with automated algorithms and global accreditation standards to drive your decision making to help hospitals achieve better leadership and governance, patient safety and quality of care!<br><br>' +
                                      'We believe in providing Doctors, Nurses and Employees with validated data in daily operations to enable timely and effective action for a better outcome and patient experience.'
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
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'We look to future proofing hospitals.'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: '<ul><li>We support hospitals to gain good insight of what drives the operational standards.</li>' +
                                      '<li>We infuse these with data driven intelligence and data visualisation digital tools.</li>' +
                                      '<li>Collectively, these elements form the foundation for Digital Transformation of hospitals.</li></ul>'
                            }
                        ],
                        [
                            {

                                tag: 'v-img',
                                class: 'ma-sm-10 ma-4',
                                src: 'doctors-2.png'
                            }
                        ]
                    ],
                },
                {
                    background: 'background-red-green.png',
                    class: 'px-8',
                    cols: [
                        [
                            {

                                tag: 'v-img',
                                class: 'ma-sm-10 ma-4',
                                src: 'management-1.png'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text font-weight-bold text-left mb-8',
                                text: 'We are here to help you on your digital transformation journey!'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mb-4',
                                text: 'Pulse Data Technologies is a long-term partner to hospitals by:'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mx-4',
                                text: '<ul><li>improving clinical and non-clinical process efficiencies</li>' +
                                      '<li>integrating our Pulse System into your transformation strategies</li>' +
                                      '<li>helping you develop your digital culture</li>' +
                                      '<li>introducing data sciences and analytics into your operations</li></ul>'
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
                                tag: 'div',
                                class: 'text-h4 secondary--text mb-8',
                                text: '01.'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text mb-8',
                                text: 'HOSPITAL ACCREDITATION & STANDARDS'
                            },
                            {
                                tag: 'div',
                                class: 'black--text mb-4',
                                text: 'Our deep knowledge and expertise of International Accreditation and regional Accreditation Standards, is the basis and foundation for Pulse.<br><span class="transparent--text">_</span>'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h4 secondary--text mb-8',
                                text: '02.'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text mb-8',
                                text: 'EXTENSIVE KNOWLEDGE OF HOSPITAL OPERATIONS'
                            },
                            {
                                tag: 'div',
                                class: 'black--text mb-4',
                                text: 'With extensive experience in hospital operations and a strong track-record in technology software adoption, we have incorporated hospital user perspectives for seamless adoption.'
                            }
                        ],
                        [
                            {
                                tag: 'div',
                                class: 'text-h4 secondary--text mb-8',
                                text: '03.'
                            },
                            {
                                tag: 'div',
                                class: 'text-h5 primary--text mb-8',
                                text: 'TECHNOLOGY AND DATA ANALYTICS IN HEALTHCARE'
                            },
                            {
                                tag: 'div',
                                class: 'black--text mb-4',
                                text: 'Technology and Data Analytics have been integrated into Pulse to support hospitals in their Digital Transformation strategies and beyond.<br><span class="transparent--text">_</span>'
                            }
                        ]
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped src="@/views/aboutUs/aboutUs.css"></style>