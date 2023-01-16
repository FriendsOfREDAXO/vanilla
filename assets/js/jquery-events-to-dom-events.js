const delegatejQueryEvent = (event, params = ['event']) => {
    const handler = event.startsWith('$')
        ? (...args) => window.$(document).trigger(event.slice(1), args[0].detail)
        : (...args) => {
            const detail = params.reduce((acc, cur, idx) => {
                acc[cur] = args[idx]
                return acc
            }, {})
            detail.event.target.dispatchEvent(
                new CustomEvent(`$${event}`, {
                    detail,
                    bubbles: true,
                    cancelable: true,
                })
            )
        }
    event.startsWith('$')
        ? document.addEventListener(event, handler)
        : window.$(document).on(event, handler)
    return handler
}

// basic redaxo/pjax events
delegatejQueryEvent('rex:ready');
delegatejQueryEvent('pjax:start', ['event', 'xhr', 'options']);
delegatejQueryEvent('pjax:success', ['event', 'data', 'status', 'xhr', 'options']);
delegatejQueryEvent('pjax:end', ['event', 'xhr', 'options']);
delegatejQueryEvent('pjax:click', ['event', 'options']);
delegatejQueryEvent('pjax:error', ['event', 'xhr', 'textStatus', 'error', 'options']);
