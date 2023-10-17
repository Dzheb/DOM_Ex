const timeTbl = document.querySelector('.time-table');
schedule.forEach((element) => {
  const newLesson = document.createElement('li');
  newLesson.classList.add('lesson');
  const dateEl = document.createElement('p');
  dateEl.textContent = `Время занятия: ${element.date}`;
  const dispEl = document.createElement('p');
  dispEl.textContent = `Дисциплина: ${element.disc}`;
  const maxEl = document.createElement('p');
  maxEl.textContent = `Максимальное количество участников: ${element.max}`;
  const totalEl = document.createElement('p');
  totalEl.textContent = `Количество участников: ${element.participants}`;
  newLesson.classList.add('lesson');
  const enterBtn = document.createElement('button');
  enterBtn.textContent = 'Записаться';
  enterBtn.classList.add('btn');
  enterBtn.classList.add('btn-primary');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-primary');
  deleteBtn.textContent = 'Отменить запись';
  newLesson.append(dateEl);
  newLesson.append(dispEl);
  newLesson.append(maxEl);
  newLesson.append(totalEl);
  newLesson.append(enterBtn);
  newLesson.append(deleteBtn);
  timeTbl.append(newLesson);
  // обработчики
  enterBtn.addEventListener('click', function (e) {
    // элемент максимального количества участников
    const maxValEl = this.parentNode.firstChild.nextSibling.nextSibling;
    // элемент количества участников
    const totalEl =
      this.parentNode.firstChild.nextSibling.nextSibling.nextSibling;
    const totalElArray = totalEl.textContent.split(':');
    if (
      parseInt(maxValEl.textContent.split(':')[1]) > parseInt(totalElArray[1])
    ) {
      totalEl.textContent =
        totalElArray[0] + ':' + (parseInt(totalElArray[1]) + 1).toString();
      if (
        parseInt(maxValEl.textContent.split(':')[1]) ===
        parseInt(totalElArray[1]) + 1
      ) {
        this.setAttribute('disabled', true);
      } else {
        this.nextSibling.removeAttribute('disabled');
      }
    }
  });
  deleteBtn.addEventListener('click', function (e) {
    // элемент количества участников
    const totalEl =
      this.parentNode.firstChild.nextSibling.nextSibling.nextSibling;
    const totalElArray = totalEl.textContent.split(':');
    if (parseInt(parseInt(totalElArray[1])) > 0) {
      totalEl.textContent =
        totalElArray[0] + ':' + (parseInt(totalElArray[1]) - 1).toString();
      if (parseInt(totalElArray[1]) - 1 === 0) {
        this.setAttribute('disabled', true);
      } else {
        this.previousSibling.removeAttribute('disabled');
      }
    }
  });
});
