const optOutQueryKey = 'plus'

export function isOptOut() {
  return window.location.search.indexOf(`${optOutQueryKey}=false`) !== -1
}

export function optOutUrl() {
  let query = window.location.search
  if (query) {
    query += `&${optOutQueryKey}=false`
  } else {
    query = `?${optOutQueryKey}=false`
  }
  return window.location.origin + window.location.pathname + query
}

export function reconstruct(title: string) {
  {
    // popup 창 못 띄우게 만들기
    window.open = () => null
  }
  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<title>${title}</title>`,
    '</head>',
  ].join('')
}
