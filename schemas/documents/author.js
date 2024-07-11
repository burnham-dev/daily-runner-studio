import { IoPersonCircleOutline } from 'react-icons/io5';

export default {
    name: 'author',
    type: 'document',
    title: 'Authors',
    icon: IoPersonCircleOutline,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) => { return Rule.required() }
      },
      {
        name: 'avatar',
        type: 'image',
        title: 'Avatar',
        validation: (Rule) => { return Rule.required() }
      }
    ]
  }