import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas} from './schemas'
import { templates } from './templates'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'The Daily Runner',

  projectId: 'bu9fofk6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure
    }), 
    visionTool()
  ],

  schema: {
    types: schemas,
    templates: templates
  },

   // prev is the result from previous plugins and can be composed
   productionUrl: async (prev, context) => {
      const {client, dataset, document} = context
      const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;

      if (document._type === 'post') {
        // you can now use async/await 🎉
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          {postId: document._id}
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `${projectUrl}/posts/${slug}?${params}`
      }

      return prev
   }
})
