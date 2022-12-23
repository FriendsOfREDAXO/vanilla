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
                    cancelable: true
                })
            )
        }
    event.startsWith('$')
        ? document.addEventListener(event, handler)
        : window.$(document).on(event, handler)
    return handler
}

const abnegatejQueryEvent = (event, handler) => {
    event.startsWith('$')
        ? document.removeEventListener(event, handler)
        : window.$(document).off(event, handler)
}

// basic redaxo/pjax events
delegatejQueryEvent('rex:ready');
delegatejQueryEvent('pjax:start');
delegatejQueryEvent('pjax:success');
delegatejQueryEvent('pjax:end');
delegatejQueryEvent('pjax:click');
delegatejQueryEvent('pjax:error');
