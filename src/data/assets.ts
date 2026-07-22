// Helpers for referencing files in /public/images (filenames contain spaces and
// punctuation, so every URL is passed through encodeURI).

export const asset = (file: string): string =>
  encodeURI(`${import.meta.env.BASE_URL}images/${file}`)

export const LOGO = asset('logo.webp')
export const ALL_IN_ONE = asset('all in one.webp')
export const LOGO_VIDEO = asset('logo Animation video.mp4')
