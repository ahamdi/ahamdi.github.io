<template>
  <div class="open-api-container">
    <div v-if="hasSpec" id="swaggerContainer"></div>
  </div>
</template>

<script>
import axios from 'axios'
import yaml from 'js-yaml'
import { saveAs } from 'file-saver'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

const typeReferenceRegExpr = /^\s*\$ref:\s*(".*")$/gm

export default {
  name: "OpenApi",
  props: {
    page: {
      type: String,
      required: true
    }
  },
  computed:{
    hasSpec(){
      return typeof this.page === 'string' && this.page.length > 0
    }
  },
  watch: {
    page: {
      handler () {
        this.loadSwagger()
      }
    }
  },
  data(){
    return {
      finalSpec:null,
      finalSpecName:null,
      commonSchemasContent:null,
      typesReferenced:[]
    }
  },
  async mounted () {
    this.loadSwagger()
  },
  methods: {
    async loadSwagger(){
      const { servers = [] } = this.$themeConfig;
      const composedNameSpec = `${this.page}.yaml`;
      try{
        const {data} = await axios.get(this.fileUrl(composedNameSpec))
        const spec = yaml.load(data)
        SwaggerUI({
          spec: { ...spec, servers: servers.map(url => ({ url })) },
          dom_id: '#swaggerContainer',
          deepLinking: true,
          supportedSubmitMethods: [],
          presets: [
              SwaggerUI.presets.apis,
          ],
          plugins: [
              SwaggerUI.plugins.DownloadUrl
          ],
          layout: "BaseLayout"
        })
      }catch(err){
        console.error(err)
        this.finalSpec = null
        this.finalSpecName = null
        console.warn('Spec file not  found:', this.fileUrl(composedNameSpec));
      }
    },
    fileUrl(fileName){
      return `${location.origin}${this.$site.base}specs/${fileName}`
    },
  }
}
</script>

<style scope>
.open-api-vuepress .swagger-ui .info .title{
  padding-right: 120px;
}

.open-api-container pre{
    background: #7d8492;
}

.open-api-container .version-stamp pre{
  background-color: #89bf04!important;
}

</style>

