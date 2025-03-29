import { BiSolidCategoryAlt } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export const categoriesType = defineType({
    name: 'category',
    type: 'document',
    title: 'Category',
    icon: BiSolidCategoryAlt,
    fields: [
        defineField({
            name: 'name',
            title: 'Category Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: rule => rule.required(),
            hidden: ({document}) => !document?.name,
            options: {
                source: 'name'
            }
        })
    ]
})