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
                                class: 'text-h4 primary--text text-left font-weight-bold mx-sm-8 mb-8',
                                text: 'Meet Our Team'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left mx-sm-8',
                                text: 'The Team consists of experienced leaders with personalities aligned to a common objective of helping hospitals raise their operational standards. Passion, energy, responsibility and a proven track record of success make the Pulsers Team an irresistible force!'
                            },
                        ]
                    ]
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    height: 650,
                    cols: [
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/andrey.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Andrey G. Abraham<br>' +
                                      'Founder<br>' +
                                      'Chief Executive Officer<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Andrey is a lawyer with an MBA and Digital Transformation Platform strategies expertise from M.I.T. Trusted and well regarded by Hospital clients for his disciplined and results driven approach to standards and accreditation, Andrey is passionate about Leadership, Digital Culture and Innovation. Driven by the agenda of Future Proofing hospitals, he leads the Team with keen insight and a passion to serve hospitals.'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/noelani.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Dr. Noelani D’cruz<br>' +
                                      'Founder<br>' +
                                      'Director<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Dr. Nel is an experienced Clinical Head in hospitals particularly in the design and set-up of Departments. She focuses on Policies, SOP’s, organisational structures, employee workloads, flow of patients and staff through departments, reporting systems and allied health. Dr. Nel brings pragmatic and real-world experience of hospital operations to the Team.'
                            }
                        ]
                    ],
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    height: 750,
                    cols: [
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/swati.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Swati Khandelwal<br>' +
                                      'Co-Founder<br>' +
                                      'Hospital Accreditation Specialist Quality Measures and Policies.<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Ms. Khandelwal is a graduate in Health Management with an MBA from IIM, India. She has consulted for hospitals in South Asia, Africa and the Middle East. Highly skilled and highly regarded for conducting Quality Measures, Operational Gaps, Internal Audits, Quality Improvement and Performance Metrics for Hospitals.<br><span class="transparent--text">_</span>'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/harvinder.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Harvinder Wasan<br>' +
                                      'Co-Founder<br>' +
                                      'Hospital Accreditation Specialist Infection Control and Risk<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Ms. Harvinder is a Postgraduate in General Administration (PGDM/MBA), specializing in Healthcare Management. She has more than 20 years experience in Healthcare Gap Assessments, Risk Assessment, Quality, OHSAS and Environment Management. She is passionate about Training and Development of Nurses with a focus on Infection Control.'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/subhra.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Subhra Bishnu<br>' +
                                      'Co-Founder<br>' +
                                      'Data Science and Analytics / Data Driven Public Policy Exponent<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Subhra Bishnu is Co-Founder of a leading Data Science and Analytics Training Organization in India. He has a double postgraduate in Political Science and Management with more than 15 years in Data Science and Analytics. He is a Public Policy Exponent and Specialises in Data Driven Governance and Decision Making.'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/priyadarshini.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Priyadarshini Bishnu<br>' +
                                      'Co-Founder<br>' +
                                      'Data Science and Analytics Education<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Priyadarshini Bishnu is a leading Data Science and Analytics Training exponent in India. She has led and developed one of India’s leading Analytics Training and Education institutions serving large multinationals. Priyadarshini specialises in the digitisation of educational programs and is a leading educational consultant.<br><span class="transparent--text">_</span>'
                            }
                        ]
                    ]
                },
                {
                    background: 'background-white.png',
                    class: 'px-8',
                    height: 750,
                    cols: [
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/harish.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Harish Jayapalan<br>' +
                                      'Co-Founder<br>' +
                                      'Head of Business Development<br>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Harish is energetic, passionate and totally focused on delivering positive results! He led the successful implementation of digital transformation projects in over 70 private hospitals. He brings with him high quality success in serving hospitals in Malaysia. Well respected in the industry, Harish has built a solid reputation of sincerity, honesty and professional responsibility! Above all else, Harish delivers results!'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/vincent.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Vincent Hoong<br>' +
                                      'Co-Founder<br>' +
                                      'Technical Lead<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Vincent has the rare ability to see the Big Picture and relate it to fine technical details. He has a rock solid and successful track record of serving the software needs of hospitals in Malaysia. Highly skilled in unraveling the complexities of workflows in hospitals, Vincent appreciates the technology challenges in hospitals, and, also has the solutions!<br><span class="transparent--text">_</span><br><span class="transparent--text">_</span>'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/pavitra.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Pavitra Siva Nayaham<br>' +
                                      'Co-Founder<br>' +
                                      'Head of Client Success<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Pavitra has the energy, passion and cool-head needed to drive technology adoption in hospitals. Pavitra is well liked in the industry and well respected for her impressive track record of success in serving hospitals in Malaysia. Pavitra understands the high pressure environment of hospitals and has the client’s interests in mind which guarantees success!<br><span class="transparent--text">_</span><br><span class="transparent--text">_</span>'
                            }
                        ],
                        [
                            {
                                tag: 'v-img',
                                class: 'photo mb-4',
                                src: 'team/iqbal.png'
                            },
                            {
                                tag: 'div',
                                class: 'primary--text font-weight-bold mb-8 ' + (this.$vuetify.breakpoint.mobile?'':'text-left'),
                                text: 'Iqbal Yusoff<br>' +
                                      'Co-Founder<br>' +
                                      'Head of Product<br><span class="transparent--text">_</span>'
                            },
                            {
                                tag: 'div',
                                class: 'black--text text-left',
                                text: 'Iqbal, an Engineer by training, brings with him the technical eye for detail and planning. Well-read and passionate about healthcare and serving hospitals, Iqbal has developed a reputation for careful planning, detailed analysis, sound decision making and execution! Iqbal is highly skilled in perceiving the needs of hospital clients and a welcome asset to our Team!<br><span class="transparent--text">_</span><br><span class="transparent--text">_</span><br><span class="transparent--text">_</span>'
                            }
                        ]
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped src="@/views/ourTeam/ourTeam.css"></style>