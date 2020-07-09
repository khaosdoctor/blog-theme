const readingProgress = (contentArea, progressBar) => {
  // Grab content area and progress bar
  const content = document.querySelector(contentArea)
  const progress = document.querySelector(progressBar)
  const readingTimeLabel = document.querySelector('.byline-reading-time')

  // Sets the max attribute of the label so we can put the reading time floating box
  progress.setAttribute('max', readingTimeLabel.textContent.split(' ').filter(e => !isNaN(parseInt(e))).pop() || 1)

  // Minutes remaining label template
  const label = value => `${value} minuto${value !== 1 ? "s" : ""} restante${value !== 1 ? "s" : ""}`

  // Set the progress bar label to maximum time remaining if data attribute is present
  if (progress.hasAttribute('data-reading-progress')) {
    progress.dataset.readingProgress = label(progress.max)
  }

  const frameListening = () => {
    // Get the content area position,
    // the vertical centre of the browser window,
    // the minutes remaining without decimal places
    const contentBox = content.getBoundingClientRect()
    const midPoint = window.innerHeight / 2
    const minsRemaining = Math.round(progress.max - progress.value)

    // Update the label if data attribute is present
    if (progress.hasAttribute('data-reading-progress')) {
      progress.dataset.readingProgress = label(minsRemaining)
    }

    // Default the progress bar to 0 before content is in view
    if (contentBox.top > midPoint) {
      progress.value = 0
    }

    // Default the progress bar to maximum when the content is past view
    if (contentBox.top < midPoint) {
      progress.value = progress.max
    }

    // Start updating the progress value when content as reached the vertical centre
    // Stop updating when the content is past the vertical centre
    if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
      // Calculate the progress bar value
      progress.value =
        (progress.max * Math.abs(contentBox.top - midPoint)) /
        contentBox.height
    }

    // Continue to request animation frames
    window.requestAnimationFrame(frameListening)
  }

  // Begin requesting animation frames
  window.requestAnimationFrame(frameListening)
}

// Init, main content selector and progress bar selector
readingProgress(".post-full-content", ".reading-progress-bar")
