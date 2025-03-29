import { defineField, defineType } from "sanity";

export const navMenuType = defineType({
    name: 'navMenu',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'array',
            of: [{ type: 'reference', to: [{type: 'navlink'}]}]
        })
    ]
})