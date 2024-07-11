export default {
    name: "submission",
    title: "Contact Submissions",
    type: "document",
    __experimental_actions: ['update', 'delete', 'publish'], 
    fields: [
        {
          name: "date",
          title: "Date",
          type: "datetime",
          readOnly: true
        },
        {
            name: "firstName",
            title: "Name",
            type: "string",
            readOnly: true
        },
        {
            name: "lastName",
            title: "Name",
            type: "string",
            readOnly: true
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            readOnly: true
        },
        {
            name: "message",
            title: "Message",
            type: "text",
            readOnly: true
        },
    ],
    preview: {
        select: {
          firstName: 'firstName',
          lastName: 'lastName',
          date: 'date'
        },
        prepare(selection) {
          const { firstName, lastName, date } = selection
          return {
            title: `${firstName} ${lastName}`,
            subtitle: new Date(date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }) + ' ' + new Date(date).toLocaleTimeString()
          }
        }
      }
  }