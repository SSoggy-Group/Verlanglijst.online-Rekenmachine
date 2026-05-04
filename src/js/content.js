(function() {
  const banner = document.createElement('div');
  banner.id = 'live-total-banner';
  Object.assign(banner.style, {
    position: 'fixed',
    padding: '10px 15px',
    backgroundColor: 'black',
    color: 'white',
    bottom: '10px',
    right: '10px',
    display: 'block'
  });
  document.body.appendChild(banner);

  function collectPrices() {
    return Array.from(
      document.querySelectorAll('span.product-price')
    ).filter(el => !el.closest('#live-total-banner'));
  }

  function parsePrice(text) {
    let num = text.replace(/[^\d,.-]/g, '').replace(',', '.');
    return parseFloat(num) || 0;
  }

  function calculateSum() {
    const els = collectPrices();
    const sum = els.reduce((tot, el) => tot + parsePrice(el.textContent), 0);
    banner.textContent = '€ ' + sum.toFixed(2);
  }

  setInterval(calculateSum, 1000);
})();
