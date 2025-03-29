import { defineArrayMember, defineField, defineType } from "sanity";
import { FaMicroblog } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi'

export const blogType = defineType({
    name: 'blog',
    title: 'Blog',
    icon: FaMicroblog,
    type: 'document',
    groups: [
        { name: 'media', title: 'Media', icon: MdPermMedia },
        { name: 'details', title: 'Details', icon: BiDetail}
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule
                .required()
                .info(`Title is Required in Every blog post`),
            group: 'details',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            group: 'details',
            validation: rule => rule
                .required()
                .info(`Requried to generate a page on the website`),
            hidden: ({document}) => !document?.title
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],

        }),
        defineField({
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}],
            group: 'details',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: rule => rule.required().info(`Required to generate a page on the website`)
        }),
        defineField({
            name: 'subtitle',
            type: 'string',
            title: 'Sub Title',
            group: 'details',
            validation: rule => rule
                .required()
                .min(20)
                .info('Subtitles are recommended to have at least 20 characters'),
        }),
        defineField({
            name: 'description',
            title: 'Blog Description',
            type: 'blockContent',
            validation: rule => rule
                .required()
                .min(100)
                .info('Each blog post must have at least 100 characters'),
            group: 'details'
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: rule => rule.required()
                })
            ],
            group: 'media',
            options: {
                hotspot: true
            }
        }),
    ],
    preview: {
        select: {
            blogTitle: 'title',
            image: 'image',
            publishedAt: 'publishedAt',
            category: 'category.name'
        },
        prepare({blogTitle, image, publishedAt, category}){
            const blogTitleFormatted = blogTitle || 'Title Not Specified';
            const date = new Date(publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric',
                day: '2-digit',
            });
            
            return{
                title: blogTitleFormatted,
                subtitle: `${category} | ${date}`,
                media: image || FaMicroblog
            }
        }
    }

})