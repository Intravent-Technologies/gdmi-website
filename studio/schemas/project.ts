import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    }),
    defineField({
      name: "goal",
      title: "Goal (₦)",
      type: "number",
    }),
    defineField({
      name: "raised",
      title: "Raised (₦)",
      type: "number",
    }),
    defineField({
      name: "partners",
      title: "Partners",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Outreach", "Infrastructure", "Conference"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["active", "completed"],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
