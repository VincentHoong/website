<template>
  <div>
        <v-parallax v-for="(section, sectionKey) in sections" :key="'section'+sectionKey"
                    :height="$vuetify.breakpoint.mobile?'':(section.height || '500')" class="py-10"
                    :src="section.background && require('@/assets/images/'+section.background)"
                    :class="section.class">
            <v-row :align="section.align || 'center'" justify="center">
                <v-col v-for="(col, colKey) in section.cols" :key="'section'+sectionKey+'col'+colKey"
                        cols="12" :sm="Math.floor(12/section.cols.length)" class="text-center">
                    <template v-for="(element, elementKey) in col">
                        <div v-if="element.tag == 'div'"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)"
                            v-html="element.text">
                        </div>
                        <v-img v-else-if="element.tag == 'v-img'"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)"
                            contain>
                            {{ element.text }}
                        </v-img>
                        <v-btn v-else-if="element.tag == 'v-btn'" :to="element.to"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)"
                            large>
                            {{ element.text }}
                            <v-icon right>mdi-arrow-right</v-icon>
                        </v-btn>
                        <v-icon v-else-if="element.tag == 'v-icon'"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)">
                            {{ element.text }}
                        </v-icon>
                        <v-carousel v-else-if="element.tag == 'v-carousel'" height="400"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)"
                            cycle show-arrows-on-hover>
                            <v-carousel-item v-for="(item, itemKey) in element.items" :key="'section'+sectionKey+'col'+colKey+'element'+elementKey+'carousel'+itemKey"
                                                :src="item && require('@/assets/images/'+item)"
                                                class="mx-12" contain>
                            </v-carousel-item>
                        </v-carousel>
                        <v-tabs v-else-if="element.tag == 'v-tabs'"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)"
                            :vertical="!$vuetify.breakpoint.mobile" show-arrows>
                            <template  v-for="(tab, tabKey) in element.tabs">
                                <v-tab :key="'section'+sectionKey+'col'+colKey+'element'+elementKey+'tab'+tabKey">
                                    {{ tab.tabTitle }}
                                </v-tab>
                                <v-tab-item :key="'section'+sectionKey+'col'+colKey+'element'+elementKey+'tab-item'+tabKey">
                                    <v-row>
                                        <v-col cols="12" sm="4">
                                            <v-img :src="tab.src && require('@/assets/images/'+tab.src)" class="ma-4"></v-img>
                                        </v-col>
                                        <v-col cols="12" sm="8">
                                            <v-card flat class="text-left">
                                                <v-card-title>{{ tab.title }}</v-card-title>
                                                <v-card-text>{{ tab.text }}</v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                            </template>
                        </v-tabs>
                        <v-card v-else-if="element.tag == 'v-card'"
                            :key="'section'+sectionKey+'col'+colKey+'element'+elementKey"
                            :class="element.class" :src="element.src && require('@/assets/images/'+element.src)">
                            <v-card-title :class="'text-left ' + element.titleClass" v-html="element.title"></v-card-title>
                            <v-card-text :class="'text-left ' + element.textClass" v-html="element.text"></v-card-text>
                        </v-card>
                    </template>
                </v-col>
            </v-row>
        </v-parallax>
    </div>
</template>

<script>
export default {
    props: {
        sections: Array
    }
}
</script>

<style scoped src="@/components/ContentBuilder/ContentBuilder.css"></style>