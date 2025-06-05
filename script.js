document.addEventListener('DOMContentLoaded', function() { 
  let panelCount = 1;
  let totalPrice = 0;

  // Функция обновления общей стоимости
  function updateTotalPrice() {
      totalPrice = 0;
      
      // 1. Обрабатываем первое полотно (по ID)
      const firstPanel = document.getElementById('panelSection1');
      if (firstPanel) {
          const glassPrice = parseFloat(document.getElementById('glassSelect').value) || 0;
          const handlePrice = parseFloat(document.getElementById('handleSelect').value) || 0;
          const systemPrice = parseFloat(document.getElementById('slidingsystemSelect').value) || 0;
          totalPrice += glassPrice + handlePrice + systemPrice;
      }

      // 2. Обрабатываем дополнительные полотна (по классам)
      document.querySelectorAll('.panel-block:not(#panelSection1)').forEach(panel => {
          const glassPrice = parseFloat(panel.querySelector('.glass-select')?.value) || 0;
          const handlePrice = parseFloat(panel.querySelector('.handle-select')?.value) || 0;
          const systemPrice = parseFloat(panel.querySelector('.system-select')?.value) || 0;
          totalPrice += glassPrice + handlePrice + systemPrice;
      });

      document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
  }

  // Функция переименования полотен (сохраняет порядок 1,2,3...)
  function renumberPanels() {
      const panels = document.querySelectorAll('.panel-block');
      let currentNumber = 2;
      
      panels.forEach(panel => {
          if (panel.id === 'panelSection1') {
              panel.querySelector('h2').textContent = 'Полотно №1';
              currentNumber = 2;
          } else {
              panel.id = 'panelSection' + currentNumber;
              panel.querySelector('h2').textContent = 'Полотно №' + currentNumber;
              currentNumber++;
          }
      });
      
      panelCount = currentNumber - 1;
  }

  // Создание нового полотна
  function createNewPanel(panelNumber) {
      const newPanel = document.createElement('section');
      newPanel.className = 'block panel-block';
      newPanel.id = 'panelSection' + panelNumber;

      newPanel.innerHTML = `
          <h2>Полотно №${panelNumber}</h2>
          <div class="row">
              <label>Висота дверей (H1), мм: <input type="number" class="size-input"></label>
              <label>Ширина дверей (W1), мм: <input type="number" class="size-input"></label>
              <label>Модель дверей:
                  <select class="model-select">
                      <option>Manchester</option>
                      <option>Napoli</option>
                      <option>Geneva</option>
                      <option>New York</option>
                      <option>Paris</option>
                      <option>London</option>
                  </select>
              </label>
              <label>Тип перемичок:
                  <select class="crossbar-select">
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
                  <select class="priceInput system-select">
                      <option value="0"> </option>
                      <option value="1056">Classic 80 O без доводчика</option>
                      <option value="2160">Classic 80 O з одностороннім доводчиком</option>
                      <option value="3120">Classic 80 O з двостороннім доводчиком</option>
                      <option value="3312">Classic 120 O з двостороннім доводчиком</option>
                      <option value="2976">Solo без доводчика</option>
                      <option value="5328">Solo з двостороннім доводчиком</option>
                      <option value="5280">Classic F без доводчика</option>
                      <option value="10800">Classic F з двостороннім доводчиком</option>
                      <option value="150">Монтажний комплект (кріплення роликів)</option>
                      <option value="300">Монтажний комплект (телескопік + робота + фарбування)</option>
                  </select>
              </label>
              <label>Напрями вiдкриття:
                  <select class="opening-select">
                      <option>Не вiдчиняються</option>
                      <option>Право</option>
                      <option>Лiво</option>
                  </select>
              </label>
              <label>Наповнення:
                  <select class="priceInput glass-select">
                      <option value="0"> </option>
                      <option value="800">Скло звичайне ESG 4мм</option>
                      <option value="1300">Скло звичайне сатин ESG 4мм</option>
                      <option value="1100">Скло Diamond ESG 4мм</option>
                      <option value="1600">Скло Diamond сатин ESG 4мм</option>
                      <option value="1200">Скло бронза ESG 4мм</option>
                      <option value="1700">Скло бронза сатин ESG 4мм</option>
                      <option value="1200">Скло графіт ESG 4мм</option>
                      <option value="1700">Скло графіт сатин ESG 4мм</option>
                      <option value="3500">Скло Stopsol Grey ESG 4мм</option>
                      <option value="3500">Скло Stopsol Bronze ESG 4мм</option>
                      <option value="3000">Скло Флус ESG 4мм</option>
                      <option value="1250">Скло звичайне ESG 6мм</option>
                      <option value="1500">Скло звичайне сатин ESG 6мм</option>
                      <option value="2000">Скло Diamond ESG 6мм</option>
                      <option value="2500">Скло Diamond сатин ESG 6мм</option>
                      <option value="2000">Скло бронза ESG 6мм</option>
                      <option value="2500">Скло бронза сатин ESG 6мм</option>
                      <option value="2000">Скло графіт ESG 6мм</option>
                      <option value="2500">Скло графіт сатин ESG 6мм</option>
                      <option value="3500">Скло Stopsol Grey ESG 6мм</option>
                      <option value="3500">Скло Stopsol Bronze ESG 6мм</option>
                      <option value="1800">Дзеркало 6 мм звичайне</option>
                      <option value="1700">Скло звичайне ESG 8мм</option>
                      <option value="2350">Скло звичайне сатин ESG 8мм</option>
                      <option value="2650">Скло Diamond ESG 8мм</option>
                      <option value="3250">Скло Diamond сатин ESG 8мм</option>
                      <option value="2800">Скло бронза ESG 8мм</option>
                      <option value="3250">Скло бронза сатин ESG 8мм</option>
                      <option value="2800">Скло графіт ESG 8мм</option>
                      <option value="3250">Скло графіт сатин ESG 8мм</option>
                  </select>
              </label>
              <label>Розташування дверної ручки:
                  <select class="handle-position-select">
                      <option>Правовуч одна сторона</option>
                      <option>Правовуч дві сторони</option>
                      <option>Ліворуч одна сторона</option>
                      <option>Ліворуч дві сторони</option>
                      <option>Правовуч та ліворуч одна сторона</option>
                      <option>Правовуч та ліворуч дві сторони</option>
                  </select>
              </label>
              <label>Тип дверної ручки:
                  <select class="priceInput handle-select">
                      <option value="0"></option>
                      <option value="672">№1</option>
                      <option value="144">№2</option>
                      <option value="384">№3</option>
                      <option value="960">№4</option>
                  </select>
              </label>
          </div>
          <span class="delete-panel">✖</span>
      `;

      // Обработчики для нового полотна
      newPanel.querySelectorAll('.priceInput').forEach(input => {
          input.addEventListener('change', updateTotalPrice);
      });

      newPanel.querySelector('.delete-panel').addEventListener('click', function() {
          // Добавляем класс для анимации удаления
          newPanel.classList.add('remove');
          
          // Удаляем элемент после завершения анимации
          setTimeout(() => {
              newPanel.remove();
              renumberPanels();
              updateTotalPrice();
          }, 500);
      });

      return newPanel;
  }

  // Инициализация первого полотна
  const firstPanel = document.getElementById('panelSection1');
  if (firstPanel) {
      firstPanel.querySelectorAll('#glassSelect, #handleSelect, #slidingsystemSelect').forEach(select => {
          select.addEventListener('change', updateTotalPrice);
      });
      
      // Обработчик удаления для первого полотна
      const firstPanelDeleteBtn = firstPanel.querySelector('.delete-panel');
      if (firstPanelDeleteBtn) {
          firstPanelDeleteBtn.addEventListener('click', function() {
              if (document.querySelectorAll('.panel-block').length > 1) {
                  firstPanel.classList.add('remove');
                  setTimeout(() => {
                      firstPanel.remove();
                      renumberPanels();
                      updateTotalPrice();
                  }, 500);
              } else {
                  alert('Нельзя удалить единственное полотно');
              }
          });
      }
  }

  // Кнопка добавления
  document.getElementById('addPanelBtn').addEventListener('click', function() {
      if (panelCount >= 4) {
          alert('Максимальна кількість полотен - 4');
          return;
      }
      panelCount++;
      document.getElementById('additionalPanels').appendChild(createNewPanel(panelCount));
  });

  // Первый расчет
  updateTotalPrice();
});
