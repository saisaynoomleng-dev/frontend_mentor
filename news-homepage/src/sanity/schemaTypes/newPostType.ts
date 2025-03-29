import { BiDetail } from "react-icons/bi";
import { MdOutlinePostAdd, MdPermMedia } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const newPostType = defineType({
    name: 'newPost',
    title: 'New Post',
    icon: MdOutlinePostAdd,
    groups: [
        { name: 'details', title: 'Details', icon: BiDetail },
        { name: 'media', title: 'Media', icon: MdPermMedia }
    ],
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'details'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'Unique ID to fetch data, Just Generate',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: rule => rule
                .required()
                .info('Required to generate a page on the website'),
            group: 'details'
        }),
        defineField({
            name: 'subtitle',
            title: 'Sub Title',
            type: 'string',
            group: 'details',
            validation: rule => rule
                .required()
                .min(20)
                .info(`Recommended to have at least 20 characters`),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}]
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
            group: 'details'
        })
    ]
})