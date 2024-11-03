const formSubmitButton = document.getElementById("submitButton");
    // Находим input с именами rector-switch, rector-switch-fio, rector-switch-duty
    let rectorSwitchInput = document.querySelector('input[name="rector-switch-input"]');
    let rectorSwitchFioInput = document.querySelector('input[name="rector-switch-fio"]');
    let rectorSwitchDutyInput = document.querySelector('input[name="rector-switch-duty"]');

    // Находим input с именами Name, Middle_name, fin_phone, fin_mail
    let rectorName = document.querySelector('input[name="Name"]');
    let rectorMiddleName = document.querySelector('input[name="Middle_name"]');
    let rectorOtchecstvo = document.querySelector('input[name="Otchecstvo"]');
    let rectorTel = document.querySelector('input[name="fin_phone"]');
    let rectorMail = document.querySelector('input[name="fin_mail"]'); // Исправлена опечатка

    // Находим ul, содержащие input с именами Name, Middle_name и контактные данные
    let rectorFioBlock = document.querySelector('ul#hide-rector-fio');
    let rectorContactBlock = document.querySelector('ul#hide-rector-block');

    // Находим select с именем duty
    let dutySelect = document.querySelector('select[name="duty"]');

    let radioButtons = document.querySelectorAll('select[name="duty"]');
    let surveyIframe = document.querySelector('.surveyIframe');
    let buttonSurvey = document.querySelector('.surveyButton');

function getFieldValue(fieldName) {
    let element = document.querySelector(`input[name='${fieldName}'], select[name='${fieldName}'], textarea[name='${fieldName}']`);
    return element ? element.value : '';
  }
  
  // Функция для определения URL iframe и значения duty
  function determineIframeUrlAndDuty(duty, mail, rectorSwitchMail, middleName, rectorSwitchDuty, rectorSwitchFio, prorectorStrat, prorectorFinance) {
    let iframeUrl;
    switch (duty) {
        case 'Ректор':
            iframeUrl = 'https://u061347.spfrm.com/K8d4TbO';
            return {
                iframeUrl: iframeUrl,
                middleName: rectorSwitchFio.trim() !== '' ? rectorSwitchFio : middleName,
                duty: rectorSwitchDuty.trim() !== '' ? rectorSwitchDuty : duty,
                mail: rectorSwitchMail.trim() !== '' ? rectorSwitchMail : mail
            };
        case 'Проректор, отвечающий за вопросы стратегического развития*':
            iframeUrl = 'https://u061347.spfrm.com/ziiEz5R';
            return {
                iframeUrl: iframeUrl,
                middleName: rectorSwitchFio.trim() !== '' ? rectorSwitchFio : middleName,
                duty: prorectorStrat.trim() !== '' ? prorectorStrat : duty,
                mail: rectorSwitchMail.trim() !== '' ? rectorSwitchMail : mail
            };
        case 'Проректор, отвечающий за финансово-экономическую деятельность*':
            iframeUrl = 'https://u061347.spfrm.com/r42RyaP';
            return {
                iframeUrl: iframeUrl,
                middleName: rectorSwitchFio.trim() !== '' ? rectorSwitchFio : middleName,
                duty: prorectorFinance.trim() !== '' ? prorectorFinance : duty,
                mail: rectorSwitchMail.trim() !== '' ? rectorSwitchMail : mail
            };
        default:
            iframeUrl = 'https://u061347.spfrm.com/K8d4TbO';
            return {
                iframeUrl: iframeUrl,
                middleName: rectorSwitchFio.trim() !== '' ? rectorSwitchFio : middleName,
                duty: duty
            };
    }
  }
  
  // Основная функция для передачи данных в опросник
  function passDataToSurvey() {
    // Получаем данные из полей формы
    let organisation = getFieldValue('organisation');
    let middleName = getFieldValue('Middle_name');
    let name = getFieldValue('Name');
    let otchecstvo = getFieldValue('Otchecstvo');
    let duty = getFieldValue('duty');
    let mail = getFieldValue('fin_mail');
    let prorectorStrat = getFieldValue('prorector-strat-input');
    let prorectorFinance = getFieldValue('prorector-finance-input');
    let rectorSwitchDuty = getFieldValue('rector-switch-duty');
    let rectorSwitchFio = getFieldValue('rector-switch-fio');
    let rectorSwitchMail = getFieldValue('rector-switch-mail');
  
    // Определяем URL iframe и значение duty
    let { iframeUrl, middleName: updatedMiddleName, duty: updatedDuty, mail: updatedMail } = determineIframeUrlAndDuty(duty, mail, rectorSwitchMail, middleName, rectorSwitchDuty, rectorSwitchFio, prorectorStrat, prorectorFinance);
  
    // Устанавливаем значение поля name в rectorSwitchFio, если оно не пустое, иначе оставляем name
    let updatedName = rectorSwitchFio.trim() !== '' ? '' : name;
    let updatedOtchecstvo = rectorSwitchFio.trim() !== '' ? '' : otchecstvo;
  
    // Проверяем, что iframe загружен
    let iframe = document.getElementById("surveyFrame");
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
            organisation: organisation,
            middleName: updatedMiddleName,
            name: updatedName,
            otchecstvo: updatedOtchecstvo,
            duty: updatedDuty,
            mail: updatedMail,
        }, iframeUrl);
    } else {
        console.error("Опросник не найден");
    }
  }

  
  formSubmitButton.addEventListener("click", passDataToSurvey);


  function handleSurveyCompletion() {
    document.getElementById('webask-survey').style.display = 'block';
    document.getElementById('contact-form').style.display = 'none';
  }
  
  
document.addEventListener('wpcf7mailsent', handleSurveyCompletion, false);

  
document.addEventListener('wpcf7mailfailed', function (event) {
    let errorPopup = document.querySelector('.popup__error');
    openPopup(errorPopup);
  }, false);
  
  
  

    if (radioButtons && surveyIframe && buttonSurvey) {
      radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
          let value = this.value;
          switch (value) {
            case 'Ректор':
            surveyIframe.src = 'https://u061347.spfrm.com/K8d4TbO'
            buttonSurvey.href = '/wp-content/uploads/2024/08/Формат_Анкеты_к_стратегической_сессии_ректор.pdf'
              break;
            case 'Проректор, отвечающий за вопросы стратегического развития*':
              surveyIframe.src = 'https://u061347.spfrm.com/ziiEz5R'
              buttonSurvey.href = '/wp-content/uploads/2024/08/Формат_Анкеты_к_стратегической_сессии_проректор_по_стратегическому.pdf'
     
              break;
            case 'Проректор, отвечающий за финансово-экономическую деятельность*':
              surveyIframe.src = 'https://u061347.spfrm.com/r42RyaP'
              buttonSurvey.href = '/wp-content/uploads/2024/08/Формат_Анкеты_к_стратегической_сессии_проректор_по_финансам.pdf'
  
              break;
  
            default:
  
              break;
          }
        });
      });
    }

    // Функция для проверки значения и скрытия/показа ul
    function checkRectorSwitch() {
        if (rectorSwitchInput.value.trim().length > 0 || rectorSwitchFioInput.value.trim().length > 0 || rectorSwitchDutyInput.value.trim().length > 0) {
            rectorFioBlock.style.display = 'none'; // Скрываем ul
            rectorContactBlock.style.display = 'none';
            rectorName.value = 'Замена';
            rectorMiddleName.value = 'Замена';
            rectorOtchecstvo.value = 'Замена';
            rectorTel.value = '0000000'; // Исправлено на строку
            rectorMail.value = 'empty@hide.ru';
        } else {
            rectorFioBlock.style.display = 'grid'; // Показываем ul
            rectorContactBlock.style.display = 'grid';
            rectorName.value = '';
            rectorMiddleName.value = '';
            rectorOtchecstvo.value = '';
            rectorTel.value = '';
            rectorMail.value = '';
        }
    }

    // Функция для проверки выбранного значения duty
    function checkDuty() {
        let selectedDuty = dutySelect.value;
        if (selectedDuty === 'Ректор' || selectedDuty === 'Проректор, отвечающий за вопросы стратегического развития*' || selectedDuty === 'Проректор, отвечающий за финансово-экономическую деятельность*') {
            rectorFioBlock.style.display = 'grid'; // Показываем ul
            rectorContactBlock.style.display = 'grid';
            rectorName.value = '';
            rectorMiddleName.value = '';
            rectorOtchecstvo.value = '';
            rectorTel.value = '';
            rectorMail.value = '';
        } else {
            rectorFioBlock.style.display = 'none'; // Скрываем ul
            rectorContactBlock.style.display = 'none';

        }
    }

    // Вызываем функцию при загрузке страницы
    checkRectorSwitch();
    checkDuty();

    // Вызываем функцию при изменении значения input rector-switch, rector-switch-fio, rector-switch-duty
    rectorSwitchInput.addEventListener('input', checkRectorSwitch);
    rectorSwitchFioInput.addEventListener('input', checkRectorSwitch);
    rectorSwitchDutyInput.addEventListener('input', checkRectorSwitch);

    // Вызываем функцию при изменении значения select duty
    dutySelect.addEventListener('change', checkDuty);


