document.getElementById('addPanelBtn').addEventListener('click', function () {
  const panelCount = document.querySelectorAll('.panel-block').length + 1;

  // Если количество полотен >= 4, не добавляем больше
  if (panelCount > 4) {
    alert('Максимальна кількість полотен - 4');
    return;
  }

  // Создаем новое полотно
  const newPanel = document.createElement('section');
  newPanel.className = 'block panel-block';
  newPanel.id = 'panelSection' + panelCount;

  // Вставляем HTML с нужными полями для каждого нового полотна
  newPanel.innerHTML = `
    <h2>Полотно №${panelCount}</h2>
    <div class="row">
      <label>Висота дверей (H1), мм: <input type="number" value="" class="priceInput"></label>
      <label>Ширина дверей (W1), мм: <input type="number" value="" class="priceInput"></label>
      <label>Модель дверей:
        <select class="priceInput">
          <option>Manchester</option>
          <option>Napoli</option>
          <option>Geneva</option>
          <option>New York</option>
          <option>Paris</option>
          <option>London</option>
        </select>
      </label>
      <label>Тип перемичок:
        <select class="priceInput">
          <option>№1 (10x10)</option>
          <option>№2 (20x10)</option>
          <option>№3 (30x10)</option>
          <option>№4 (40x10)</option>
          <option>№5 (12x1,5)</option>
          <option>№6 (20x1,5)</option>
          <option>№7 (25x1.5)</option>
        </select>
      </label>
      <label>Тип розсувної системи:
        <select class="priceInput">
          <option>Classic з доводчиком</option>
          <option>Classic без доводчика</option>
          <option>Classic з двухстороннiм доводчиком</option>
          <option>Не вiдчиняються</option>
        </select>
      </label>
      <label>Напрями вiдкриття:
        <select class="priceInput">
          <option>Не вiдчиняються</option>
          <option>Право</option>
          <option>Лiво</option>
        </select>
      </label>
      <label>Наповнення:
        <select class="priceInput">
          <option>Скло звичайне ESG 4мм</option>
          <option>Скло звичайне сатин ESG 4мм</option>
          <option>Скло Diamond ESG 4мм</option>
          <option>Скло Diamond сатин ESG 4мм</option>
          <option>Скло бронза ESG 4мм</option>
          <option>Скло бронза сатин ESG 4мм</option>
          <option>Скло графіт ESG 4мм</option>
          <option>Скло графіт сатин ESG 4мм</option>
        </select>
      </label>
      <label>Розташування дверної ручки:
        <select class="priceInput">
          <option>Правовучі одна сторона</option>
          <option>Правовучі дві сторони</option>
          <option>Ліворучі одна сторона</option>
          <option>Ліворучі дві сторони</option>
          <option>Правовучі та ліворучі одна сторона</option>
          <option>Правовучі та ліворучі дві сторони</option>
        </select>
      </label>
      <label>Тип дверної ручки:
        <select class="priceInput">
          <option>№1</option>
          <option>№2</option>
        </select>
      </label>
    </div>
    <span class="delete-panel">✖</span>  <!-- Крестик для удаления -->
  `;

  // Добавляем новое полотно в контейнер
  panelsContainer.appendChild(newPanel);

  // Привязываем обработчик для удаления полотна по крестику
  const deleteButton = newPanel.querySelector('.delete-panel');
  deleteButton.addEventListener('click', function () {
    newPanel.remove(); // Удаляем полотно
  });
});
