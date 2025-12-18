# ESAP AI Sanity Studio

This is the Sanity Studio for managing case studies content.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Create a `.env` file and add your Sanity project ID:
   ```
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=production
   ```
   
   **Note**: Sanity Studio uses `SANITY_STUDIO_` prefix for environment variables (not `NEXT_PUBLIC_`).

3. Run the studio:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3333](http://localhost:3333) in your browser

## Creating Your First Case Study

1. Log in to Sanity Studio
2. Click "Create new" → "Case Study"
3. Fill in the required fields:
   - **Title**: The case study title
   - **Slug**: Auto-generated from title (or customize)
   - **Subtitle**: Brief description
   - **Tags**: Add relevant tags (e.g., "vision 2025", "Voice", "AI Control")
   - **Hero Images**: Upload exactly 2 images
   - **Timeline**: Add timeline entries with:
     - Date
     - Title
     - Description
     - Exactly 3 images per entry
   - **Published At**: Set publication date
   - **Featured**: Toggle if this is a featured case study

4. Click "Publish" to make it live

## Deploying Studio

To deploy the studio to Sanity's hosting:

```bash
pnpm deploy
```

This will make your studio available at `https://your-project.sanity.studio`
