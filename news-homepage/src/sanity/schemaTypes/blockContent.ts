import { defineArrayMember, defineType } from "sanity";

export const blockContentType = defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal'},
                { title: 'H1', value: 'h1'},
                { title: 'H2', value: 'h2'},
                { title: 'H3', value: 'h3'},
                { title: 'H4', value: 'h4'},
                { title: 'H5', value: 'h5'},
                { title: 'H6', value: 'h6'},
                { title: 'Quote', value: 'blockquote'},
            ]
        }),
        defineArrayMember({
            type: 'image',
            options: {
                hotspot: true
            }
        })
    ]
})