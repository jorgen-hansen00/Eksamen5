const contact = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "Sender",
            type: "string"
        },
        {
            name: "message",
            title: "Beskjed",
            type: "text"
        }
    ],
    preview: {
        select: {
            name: "name",
            created: "_createdAt"
        },
        prepare({name, created}) {
            return {
                title: `From: ${name}`,
                subtitle: `Date: ${created ? new Date(created).toDateString() : null}`
            }
        }
    }
}
export default contact;