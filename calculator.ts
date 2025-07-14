function deriveFinalPrice(inputPrice: number) {
  const finalPrice = inputPrice + inputPrice * 0.19;
  const outputEl = document.getElementById('final-price') as HTMLElement;
  outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
}

const formEl = document.querySelector('form') as HTMLFormElement;

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  const fd = new FormData(event.currentTarget as HTMLFormElement);
  const inputPrice = fd.get('price');
  if (typeof inputPrice === 'string') {
  deriveFinalPrice(+inputPrice);
}
});
