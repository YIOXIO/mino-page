window.map = null;

async function initMap() {
    // Waiting for all api elements to be loaded
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls, YMapControlButton } = ymaps3;

    // Initialize the map
    map = new YMap(
        // Pass the link to the HTMLElement of the container
        document.getElementById('map'),
        // Pass the map initialization parameters
        {
            location: {
                center: [131.8883, 43.1155], // Координаты Владивостока
                zoom: 15
            },
            mode: 'vector', // Добавляем режим отображения
            showScaleInCopyrights: true
        },
        [
            // Add a map scheme layer
            new YMapDefaultSchemeLayer({
                customization: [
                    // Делаем прозрачными все геометрии водных объектов.
                    {
                        tags: {
                            all: [ 'water']
                        },
                        elements: 'geometry',
                        stylers: [
                            {
                                opacity: .6
                            }
                        ]
                    },
                    // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
                    {
                        tags: {
                            any: ['poi', 'transit_location']
                        },
                        elements: 'label.text.fill',
                        stylers: [
                            {
                                color: '#0000DD'
                            }
                        ]
                    }
                ]
            }),
            // Add a layer of geo objects to display the markers
            new YMapDefaultFeaturesLayer({})
        ]
    );

    // Create buttons for different locations
    const controls = new YMapControls({ position: 'top left', orientation: 'vertical'});

    const cities = [
        { name: 'Отель Экватор', center: [131.877014, 43.115588], zoom: 18 },
        { name: 'Отель Rodina Residences', center: [131.870824, 43.113449], zoom: 18 },
        { name: 'Отель Novotel Владивосток', center: [131.903101, 43.127709], zoom: 18 },
        { name: 'Лотте Отель Владивосток', center: [131.888656, 43.118221], zoom: 18 },
        { name: 'AZIMUT Сити Отель Владивосток', center: [131.875603, 43.113943], zoom: 18},
        { name: 'Гостиницы ДВФУ', center: [131.888674, 43.027708], zoom: 18}
    ];

    cities.forEach(city => {
        const button = new YMapControlButton({
            text: city.name,
            onClick: () => {
                map.setLocation({
                    center: city.center,
                    zoom: city.zoom
                });
            }
        });
        controls.addChild(button);
    });

    map.addChild(controls);

    // Create markers with a custom icon and add them to the map
    const markerProps = [
        { coordinates: [131.877014, 43.115588], iconSrc: 'https://hotelequator.ru/upload/resize_cache/iblock/f6c/121_108_1/6dh43wx2ty5y2emz5je9xhxqm11odb5a.png', url: 'https://hotelequator.ru/' },
        { coordinates: [131.870824, 43.113449], iconSrc: 'https://rodina-residences.ru/upload/iblock/ba9/ap51gs52gqhk5s0ge845rc21na4ha3iz.svg', url: 'https://rodina-residences.ru/' },
        { coordinates: [131.903101, 43.127709], iconSrc: 'https://novotel-vladivostok.com/templates/yootheme/cache/Novotel_logo_2019_Blc-00a71183.png', url: 'https://novotel-vladivostok.com/' },
        { coordinates: [131.888656, 43.118221], iconSrc: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/main/gnb_logo_hotels.png', url: 'https://lottehotel-vladivostok.ru/' },
        { coordinates: [131.875603, 43.113943], iconSrc: 'https://azimuthotels.com/images-static/logo_colors.svg', url: 'https://azimuthotels.com/ru/vladivostok/azimut-hotel-vladivostok'},
        { coordinates: [131.888674, 43.027708], iconSrc: 'https://xn----8sbokcxee2ae3a.xn--p1ai/wp-content/themes/fin/assets/icons-for-main-page/dvfu.svg',  url: 'https://www.dvfu.ru/about/campus/visitors/of/'}
    ];

    markerProps.forEach((markerProp) => {
        const linkElement = document.createElement('a');
        linkElement.href = markerProp.url;
        linkElement.target = '_blank';

        const markerElement = document.createElement('img');
        markerElement.className = 'icon-marker';
        markerElement.src = markerProp.iconSrc;
        markerElement.style.height = '75px'; // Высота иконки
        markerElement.style.cursor = 'pointer'; // Изменение курсора при наведении
        markerElement.style.objectFit = 'contain'; // Устанавливаем object-fit в contain
        markerElement.style.backgroundColor = 'black'; // Цвет фона
        markerElement.style.borderRadius = '5px'; // Скругление углов
        markerElement.style.padding = '0.5rem'; // Отступы внутри элемента
        markerElement.style.aspectRatio = '1.5 / 0.9'; // Соотношение сторон
        markerElement.style.scale = '.6'
        markerElement.style.animation = 'pulse 2s infinite'; // Применяем анимацию


// Добавляем стили для анимации
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% {
        transform: scale(.6);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(.6);
    }
}
`;
        linkElement.appendChild(markerElement);

        map.addChild(new YMapMarker({ coordinates: markerProp.coordinates }, linkElement));
    });
}

initMap();