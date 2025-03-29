import { FaLink } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const navlinkType = defineType({
    name: 'navlink',
    type: 'document',
    icon: FaLink,
    fields: [
        defineField({
            name: 'linkName',
            title: 'Link Name',
            type: 'string'
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string'
        })
    ]
})