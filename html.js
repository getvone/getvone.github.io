    if (window.location.pathname.endsWith('.html')) {
      const cleanPath = window.location.pathname.replace(/\.html$/, '')
      window.history.replaceState(null, '', cleanPath)
    }
