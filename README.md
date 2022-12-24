# REDAXO-Addon: Vanilla

REDAXO 5 Addon um jQuery-Events in Vanilla JS abzufangen.

## Events

Event | Parameter
----- | ----------
`$rex:ready` | [event, data, status, xhr]
`$pjax:start` | [event, xhr, status, error]
`$pjax:success` | [event, xhr, status]
`$pjax:end` | [event, xhr, settings]
`$pjax:click` | [event, xhr]
`$pjax:error` | [event, elements]

## Verwendung

```javascript
document.addEventListener('$rex:ready', () => console.log('REDAXO is ready'));
document.addEventListener('$pjax:success', event => console.log('Pjax succeeded', event.detail.xhr, event.detail.status));
```

Weitere Events hinzufügen:

```javascript
delegatejQueryEvent('jquery:event');
document.addEventListener('$jquery:event', () => console.log('Event fired'));
```

Weitere Events mit Parametern hinzufügen:

```javascript
delegatejQueryEvent('jquery:event', ['event', 'param']);
document.addEventListener('$jquery:event', event => console.log('Event fired', event.detail.param));
```

### Alpine.js

Alpine.js Directive:

```javascript
document.addEventListener('alpine:init', () => {
    Alpine.directive('rex-ready', (element, {expression}, {evaluate, cleanup}) => {
        let readyHandler = () => {
            evaluate(expression)
        }

        window.addEventListener('$rex:ready', readyHandler);

        cleanup(() => {
            window.removeEventListener('$rex:ready', readyHandler)
        })
    });
});
```

```html
<div x-data="{}"
     x-rex-ready="console.log('REDAXO is ready!')">
</div>
```


## Credits

**jquery-events-to-dom-events**
https://github.com/leastbad/jquery-events-to-dom-events
