const panelsContainer = document.getElementById('panels');
const totalPriceEl = document.getElementById('totalPrice');

// Добавим 4 полотна по умолчанию
for (let i = 1; i <= 4; i++) {
  const block = document.createElement('section');
  block.className = 'block';
  block.innerHTML = `
    <h2>Полотно №${i}</h2>
    <div class="row">
      <label>Висота дверей (H1), мм: <input type="number" value="2650" class="priceInput"></label>
      <label>Ширина дверей (W1), мм: <input type="number" value="525" class="priceInput"></label>
      <label>Модель дверей: <select class="priceInput">
        <option>Manchester</option>
        <option>Napoli</option>
      </select></label>
      <label>Тип направляючих: <select class="priceInput">
        <option>№1 (10х10)</option>
        <option>№2 (20х10)</option>
        <option>№6 (20х1.5)</option>
      </select></label>
      <label>Тип розсувної системи: <select class="priceInput">
        <option>Classic з доводчиком</option>
        <option>Soft</option>
      </select></label>
      <label>Наповнення: <input type="text" value="Скло ESG 4мм" class="priceInput"></label>
    </div>
  `;
  panelsContainer.appendChild(block);
}

// Пока просто тестовый расчёт
function recalculateTotal() {
  const inputs = document.querySelectorAll('.priceInput');
  let price = 0;
  inputs.forEach(input => {
    if (input.tagName === 'INPUT') {
      price += parseFloat(input.value) || 0;
    }
  });
  totalPriceEl.textContent = price.toFixed(2);
}

// Обновлять цену при изменении
document.addEventListener('input', () => recalculateTotal());
