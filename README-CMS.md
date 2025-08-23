# Gripability Website with TinaCMS

This project has been set up with TinaCMS to allow easy content management for the website owner.

## For the Website Owner - How to Edit Content

### Quick Start

1. Navigate to `your-website.com/#/admin`
2. Log in with your TinaCMS credentials
3. Edit text content and manage photos directly in the browser

### What You Can Edit

- **Hero Section**: Main headline and description text
- **About Section**: Company description paragraphs
- **Products**: Product names, descriptions, and image galleries
- **Consultation Section**: Contact form descriptions
- **Contact Information**: Email, phone, and service descriptions

### Managing Photos

- Upload new product photos
- Replace existing images
- Organize image galleries for each product

## For Developers - Setup Instructions

### 1. TinaCMS Cloud Setup

1. Go to [tina.io](https://tina.io) and create an account
2. Create a new project and connect your GitHub repository
3. Get your `Client ID` and `Token` from the TinaCMS dashboard

### 2. Environment Configuration

1. Copy `.env.example` to `.env`
2. Add your TinaCMS credentials:

```
VITE_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
VITE_TINA_BRANCH=main
```

### 3. Content Management

- Content is stored in `public/site-content.json`
- TinaCMS will automatically update this file when content is edited
- The file is committed to your repository, so changes are version controlled

### 4. Development

```bash
npm install
npm run dev
```

### 5. Deployment

```bash
npm run build
```

The built files will include the TinaCMS admin interface at `/admin/index.html`

## How It Works

1. **Content Storage**: All editable content is stored in a JSON file
2. **Language Support**: Content includes both English and German versions
3. **Image Management**: TinaCMS handles image uploads and storage
4. **Auto-deployment**: Changes trigger automatic site rebuilds
5. **Version Control**: All changes are tracked in Git

## Content Structure

The content is organized into sections:

- `hero`: Main banner content
- `about`: Company information
- `products`: Product details and images
- `consultation`: Contact form content
- `contact`: Contact information

Each text field has `_en` and `_de` versions for English and German.

## Support

For technical support with TinaCMS setup, refer to the [TinaCMS documentation](https://tina.io/docs/) or contact your developer.
