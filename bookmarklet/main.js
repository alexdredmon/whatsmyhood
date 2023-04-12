const x = window.location.href;
const y = x.split('@');
if (y.length > 1) {
  const z = y[1].split(',')
  if (z.length > 1) {
    fetch(`https://api.whatsmyhood.com/neighborhood?latitude=${z[0]}&longitude=${z[1]}`)
    .then(response => response.json())
    .then(data => {
      const neighborhoods = data.neighborhoods;
      const joined = neighborhoods.join('\n')
      window.alert(joined)
    })
  }
}
