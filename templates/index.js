export const templates = (prev) => [
  // NOTE: the builder is gone
  {
    id: 'category-child',
    title: 'Category: Child',
    schemaType: 'category',
    parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
    // This value will be passed-in from desk structure
    value: ({parentId}) => ({
      parent: {_type: 'reference', _ref: parentId},
    }),
  },
  ...prev, // (same as `T.defaults()`)
]