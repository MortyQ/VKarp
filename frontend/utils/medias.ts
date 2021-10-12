export function getStrapiMedia(url: any) {
  if (url.startsWith('/')) {
    return `${process.env.strapiBaseUri}${url}`
  }
  return url
}
