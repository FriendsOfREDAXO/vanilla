# REDAXO-Addon: Vanilla

REDAXO 5 Addon um jQuery-Events in Vanilla JS abzufangen.

Verfügbare Events:
`rex:ready`
`pjax:start`
`pjax:success`
`pjax:end`
`pjax:click`
`pjax:error`

```javascript
document.addEventListener('$rex:ready', () => console.log('REDAXO is ready'));
document.addEventListener('$pjax:success', () => console.log('Pjax succeeded'));
```

Weitere Events hinzufügen:

```javascript
delegatejQueryEvent('jquery:event');
document.addEventListener('$jquery:event', () => console.log('Event fired'));
```


## Credits

**jquery-events-to-dom-events**
https://github.com/leastbad/jquery-events-to-dom-events
