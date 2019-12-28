Reddit Scraper:

```javascript
const scroll = () => { setTimeout(scroll, 10); window.scrollTo(0, $('body').height()) }

$('.link.promotedlink.promoted .title a').each((index, e) => console.log(e.innerHTML))
```
