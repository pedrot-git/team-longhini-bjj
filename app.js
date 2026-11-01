'use strict';
(() => {
  const config = window.ACADEMY_CONFIG;
  const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const whatsappURL = message => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
  const applyText = (selector, value) => document.querySelectorAll(selector).forEach(element => { element.textContent = value; });
  applyText('[data-price]', money.format(config.monthlyPrice));
  applyText('[data-price-number]', new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(config.monthlyPrice));
  applyText('[data-phone]', config.phoneDisplay);
  applyText('[data-address]', config.address);
  applyText('[data-address-detail]', `${config.neighborhood} · ${config.city}/${config.state}`);
  applyText('[data-source-date]', config.scheduleSourceDate);
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappURL(config.firstClassMessage); });
  document.querySelectorAll('[data-instagram]').forEach(link => { link.href = config.instagram; });
  document.querySelectorAll('[data-source]').forEach(link => { link.href = config.scheduleSource; });
  const fullAddress = `${config.address}, ${config.neighborhood}, ${config.city}, ${config.state}, Brasil`;
  document.querySelectorAll('[data-maps]').forEach(link => { link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`; });
  // A sala é exibida no endereço, mas a busca do mapa usa a localização do prédio.
  const mapAddress = `${config.address.split(', sala')[0]}, ${config.neighborhood}, ${config.city}, ${config.state}, Brasil`;
  document.getElementById('location-map').src = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&z=16&output=embed`;
  document.querySelector('.map-panel > p').firstChild.textContent = `${config.address} · ${config.neighborhood} · ${config.city} `;

  const grid = document.getElementById('schedule-grid');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  function renderSchedule(filter = 'Todas') {
    const columns = document.createDocumentFragment();
    let count = 0;
    config.schedule.forEach((day, index) => {
      const column = document.createElement('section');
      column.className = 'day-column';
      const heading = document.createElement('h3');
      heading.id = `schedule-day-${index}`;
      column.setAttribute('aria-labelledby', heading.id);
      const longName = document.createElement('span');
      longName.textContent = day.day;
      const shortName = document.createElement('span');
      shortName.className = 'day-short';
      shortName.setAttribute('aria-hidden', 'true');
      shortName.textContent = day.short;
      heading.append(longName, shortName);
      const list = document.createElement('ul');
      list.className = 'lesson-list';
      day.classes.filter(lesson => filter === 'Todas' || lesson.audience === filter).forEach(lesson => {
        count++;
        const item = document.createElement('li');
        item.className = `lesson ${lesson.audience === 'Infantil' ? 'lesson-kids' : 'lesson-adult'}`;
        const time = document.createElement('time');
        time.dateTime = lesson.time;
        time.textContent = lesson.time.replace(':', 'h');
        const title = document.createElement('strong');
        title.textContent = lesson.audience;
        const level = document.createElement('span');
        level.className = 'lesson-level';
        level.textContent = lesson.level;
        const link = document.createElement('a');
        link.className = 'lesson-link';
        link.textContent = 'Consultar esta turma ↗';
        link.setAttribute('aria-label', `Consultar ${lesson.audience.toLowerCase()} ${lesson.level.toLowerCase()}, ${day.day.toLowerCase()}, às ${lesson.time.replace(':', 'h')}`);
        link.href = whatsappURL(`Olá! Conheci a Team Longhini pelo site e gostaria de informações sobre a turma ${lesson.audience} — ${lesson.level}, ${day.day.toLowerCase()}, às ${lesson.time.replace(':', 'h')}.`);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        item.append(time, title, level, link);
        list.append(item);
      });
      if (!list.children.length) {
        const empty = document.createElement('li');
        empty.className = 'empty-day';
        empty.textContent = 'Sem aulas desta turma neste dia.';
        list.append(empty);
      }
      column.append(heading, list);
      columns.append(column);
    });
    grid.replaceChildren(columns);
    filterButtons.forEach(button => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('schedule-status').textContent = `${count} aulas. Filtro: ${filter}.`;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => renderSchedule(button.dataset.filter)));
  document.querySelectorAll('[data-schedule-filter]').forEach(link => link.addEventListener('click', () => renderSchedule(link.dataset.scheduleFilter)));
  renderSchedule();

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  function setMenu(open, returnFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    document.querySelector('.menu-label').textContent = open ? 'Fechar' : 'Menu';
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
  const desktop = window.matchMedia('(min-width: 1100px)');
  desktop.addEventListener('change', () => setMenu(false));
})();
