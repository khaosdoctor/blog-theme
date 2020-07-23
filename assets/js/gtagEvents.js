// Event definitions: https://developers.google.com/gtagjs/reference/event
// Parameter definition https://developers.google.com/gtagjs/reference/parameter
// SendCustomEvent is defined in the code injection part of ghost

function sendLeadEvent (label, value = 0, currency = 'BRL') {
  sendCustomEvent('generate_lead', 'lead', label, { value, currency })
}

function sendConvertionEvent (email = '',) {
  sendCustomEvent('sign_up', 'newsletter', `Newsletter Signup from ${email}`)
}

function sendPageViewEvent (category, label) {
  sendCustomEvent('page_view', category, label)
}

function sendClickEvent (category, label) {
  sendCustomEvent('click', category, label)
}

function sendErrorEvent (label, description, fatal = false) {
  sendCustomEvent('exception', 'error', label, { description, fatal })
}

function sendScreenViewEvent (category, label, screenName) {
  sendCustomEvent('screen_view', category, label, { screen_name: screenName })
}

function sendSearchEvent (term) {
  sendCustomEvent('search', 'search', 'Website Search', { search_term: term })
}

function sendShareEvent (method, contentId, label = 'Content Shared', contentType = 'post') {
  sendCustomEvent('share', 'user_share', label, { method, content_id: contentId, content_type: contentType })
}

function sendViewPostEvent (contentId, contentType = 'post', label = 'Post Opened') {
  sendCustomEvent('select_content', 'view_post', label, { content_id: contentId, content_type: contentType })
}

