import fetchJsonp from 'fetch-jsonp'

export default {
  get (url) {
    return fetchJsonp(`${url}&output=jsonp`)
      .then(response => response.json())
  }
}
