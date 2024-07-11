export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
          name: 'logo',
          type: 'image',
          title: 'Logo',
          __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
          validation: (Rule) => { return Rule.required() }
        }
    ]
  }