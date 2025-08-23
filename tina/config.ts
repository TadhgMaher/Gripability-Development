import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.VITE_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "content",
        label: "Site Content",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "headline_en",
                label: "Headline (English)",
              },
              {
                type: "string",
                name: "headline_de",
                label: "Headline (German)",
              },
              {
                type: "string",
                name: "subheadline_en",
                label: "Subheadline (English)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "subheadline_de",
                label: "Subheadline (German)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "background_image",
                label: "Background Image",
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              {
                type: "string",
                name: "headline_en",
                label: "Headline (English)",
              },
              {
                type: "string",
                name: "headline_de",
                label: "Headline (German)",
              },
              {
                type: "string",
                name: "text1_en",
                label: "First Paragraph (English)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text1_de",
                label: "First Paragraph (German)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text2_en",
                label: "Second Paragraph (English)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text2_de",
                label: "Second Paragraph (German)",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "products",
            label: "Products Section",
            fields: [
              {
                type: "string",
                name: "headline_en",
                label: "Section Headline (English)",
              },
              {
                type: "string",
                name: "headline_de",
                label: "Section Headline (German)",
              },
              {
                type: "object",
                name: "xhand",
                label: "X.Hand Product",
                fields: [
                  {
                    type: "string",
                    name: "name_en",
                    label: "Product Name (English)",
                  },
                  {
                    type: "string",
                    name: "name_de",
                    label: "Product Name (German)",
                  },
                  {
                    type: "string",
                    name: "description_en",
                    label: "Description (English)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "description_de",
                    label: "Description (German)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "images",
                    label: "Product Images",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "tbrush",
                label: "T.Brush Product",
                fields: [
                  {
                    type: "string",
                    name: "name_en",
                    label: "Product Name (English)",
                  },
                  {
                    type: "string",
                    name: "name_de",
                    label: "Product Name (German)",
                  },
                  {
                    type: "string",
                    name: "description_en",
                    label: "Description (English)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "description_de",
                    label: "Description (German)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "images",
                    label: "Product Images",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "e3hand",
                label: "E.Hand (E3) Product",
                fields: [
                  {
                    type: "string",
                    name: "name_en",
                    label: "Product Name (English)",
                  },
                  {
                    type: "string",
                    name: "name_de",
                    label: "Product Name (German)",
                  },
                  {
                    type: "string",
                    name: "description_en",
                    label: "Description (English)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "description_de",
                    label: "Description (German)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "images",
                    label: "Product Images",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "bhand",
                label: "B.Hand Product",
                fields: [
                  {
                    type: "string",
                    name: "name_en",
                    label: "Product Name (English)",
                  },
                  {
                    type: "string",
                    name: "name_de",
                    label: "Product Name (German)",
                  },
                  {
                    type: "string",
                    name: "description_en",
                    label: "Description (English)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "description_de",
                    label: "Description (German)",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "images",
                    label: "Product Images",
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "consultation",
            label: "Consultation Section",
            fields: [
              {
                type: "string",
                name: "headline_en",
                label: "Headline (English)",
              },
              {
                type: "string",
                name: "headline_de",
                label: "Headline (German)",
              },
              {
                type: "string",
                name: "text_en",
                label: "Description Text (English)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text_de",
                label: "Description Text (German)",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              {
                type: "string",
                name: "headline_en",
                label: "Headline (English)",
              },
              {
                type: "string",
                name: "headline_de",
                label: "Headline (German)",
              },
              {
                type: "string",
                name: "email",
                label: "Email Address",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "direct_en",
                label: "Direct Contact Text (English)",
              },
              {
                type: "string",
                name: "direct_de",
                label: "Direct Contact Text (German)",
              },
            ],
          },
        ],
      },
    ],
  },
});
