const formatUrl = (url:string) => {

  url = url.toLowerCase()
  // Add http:// to the beginning of the string if it doesn't already exist
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  // Remove any www. that appears at the beginning of the string
  url = url.replace('www.','');

  return url;
}

export {
  formatUrl
}