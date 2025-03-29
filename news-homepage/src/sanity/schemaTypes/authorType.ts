import { FaUser } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    type: 'document',
    icon: FaUser,
    fields: [
        defineField({
            name: 'name',
            title: 'Author Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                })
            ]
        }),
        defineField({
            name: 'description',
            title: 'Author Bio',
            type: 'text'
        })
    ]
})