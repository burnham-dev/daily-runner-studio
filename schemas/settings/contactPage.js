export default {
    name: 'contactPage',
    title: 'Contact',
    type: 'document',
    fields: [
        {
          name: 'headline',
          type: 'string',
          title: 'Headline',
          validation: (Rule) => { return Rule.required() }
        },
        {
          name: 'content',
          title: 'Content',
          validation: Rule => Rule.required(),
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          type: 'image',
          name: 'heroImage',
          title: 'Hero Image'
        }
    ]
  }