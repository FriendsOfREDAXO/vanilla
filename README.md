# REDAXO-Addon: Vanilla

REDAXO 5 Addon um jQuery-Events in Vanilla JS abzufangen.

Verfügbare Events:
`$rex:ready`
`$pjax:start`
`$pjax:success`
`$pjax:end`
`$pjax:click`
`$pjax:error`

```javascript
document.addEventListener('$rex:ready', () => console.log('REDAXO is ready'));
document.addEventListener('$pjax:success', () => console.log('Pjax succeeded'));
```

Weitere Events hinzufügen:

```javascript
delegatejQueryEvent('jquery:event');
document.addEventListener('$jquery:event', () => console.log('Event fired'));
```

Alpinejs Directive:

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
