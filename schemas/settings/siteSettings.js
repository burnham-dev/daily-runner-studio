export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
          name: 'logo',
          type: 'image',
          title: 'Logo',
          __experimental_actions: ['update', 'publish'], 
          validation: (Rule) => { return Rule.required() }
        }
    ]
  }