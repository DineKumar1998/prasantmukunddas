async function fetchQuery(path: string, params: string = '') {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337/api'
  let url

  if (params !== '') {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}
export { fetchQuery }