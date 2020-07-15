// Event definitions: https://developers.google.com/gtagjs/reference/event
// Parameter definition https://developers.google.com/gtagjs/reference/parameter

function sendLeadEvent (label, value = 0, currency = 'BRL') {
  sendCustomEvent('generate_lead', 'lead', label, { value, currency })
}

function sendPageViewEvent (category, label) {
  sendCustomEvent('page_view', category, label)
}

function sendScreenViewEvent (category, label, screenName) {
  sendCustomEvent('screen_view', category, label, { screen_name: screenName })
}

function sendSearchEvent (term) {
  sendCustomEvent('search', 'search', 'Website Search', { search_term: term })
}

function sendShareEvent (method, contentId, contentType = 'post') {
  sendCustomEvent('share', 'user_share', 'Content Shared', { method, content_id: contentId, content_type: contentType })
}

function sendViewPostEvent (contentId, contentType = 'post') {
  sendCustomEvent('select_content', 'view_post', 'Post Opened', { content_id: contentId, content_type: contentType })
}
