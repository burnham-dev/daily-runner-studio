import {FiFileText} from 'react-icons/fi';

export default {
    name: 'blog',
    type: 'document',
    title: 'Posts',
    icon: FiFileText,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required().min(5).max(60)
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle'
      },
      {
        name: 'featuredImage',
        type: 'image',
        title: 'Featured Image',
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'Alt Text'
          }
        ],
        options: {
          hotspot: true
        }
      },
      {
        name: 'content',
        title: 'Content',
        validation: Rule => Rule.required(),
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alt Text',
                options: {
                  isHighlighted: true
                }
              }
            ],
            options: {
              hotspot: true
            }
          }
        ]
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        validation: Rule => Rule.required().max(150),
        type: 'text',
        rows: 5
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [
          {
            type: 'reference',
            to: [{
              type: 'category'
            }]
          }
        ]
      },
      {
        name: 'author',
        type: 'reference',
        to: [{type: 'author'}],
        title: 'Author',
        validation: Rule => Rule.required()
      },
      {
        name: 'featured',
        type: 'boolean',
        title: 'Feature Post',
        description: 'If active, post will be featured in the home page carousel.'

      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
        }
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Publish Date',
        validation: Rule => Rule.required()
      },
    ]
  }