import { SlugValidationContext } from 'sanity'

export async function isUniqueAcrossLanguage(slug: string, context: SlugValidationContext) {
    const { document, getClient } = context
    if (!document?.language) {
        return true
    }

    const client = getClient({ apiVersion: '2023-04-09' })
    const id = document._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        language: document.language as string,
        slug,
    }

    // Look for any document that has the same slug, AND the same language, but a DIFFERENT _id
    const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`

    return await client.fetch(query, params)
}
