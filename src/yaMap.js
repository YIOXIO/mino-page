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
                    center: [60.597474, 56.838011], // Координаты Екатеринбурга
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
            { name: 'Общежитие №3 УрФУ', center: [60.757402, 56.770130], zoom: 18 },
            { name: 'Ramada', center: [60.717382, 56.775575], zoom: 18 },
            { name: 'Azimut', center: [60.798796, 56.751060], zoom: 18 },
            { name: 'Cosmos', center: [60.618504, 56.836677], zoom: 18 },
            { name: 'Novotel', center:[60.611264, 56.833142], zoom: 18},
            { name: 'Hyatt Regency Ekaterinburg 5*', center: [60.591842,56.842866], zoom: 18},
            { name: 'Hyatt Place Ekaterinburg 4*', center: [60.575268, 56.835067], zoom: 18},
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
            { coordinates: [60.757402, 56.770130], iconSrc: 'https://urfu.ru/fileadmin/_processed_/d/d/csm_logo1_d783972efb.png', url: 'https://campus.urfu.ru/ru/studencheskii-gorodok/obshchezhitija/obshchezhitija/no-3/' },
            { coordinates: [60.717382, 56.775575], iconSrc: 'https://ramadayekaterinburg.com/wp-content/uploads/2023/10/Логотип-Ramada_cdr-1024x644.png', url: 'https://ramadayekaterinburg.com/' },
            { coordinates: [60.798796, 56.751060], iconSrc: 'https://azimuthotels.com/images-static/logo_colors.svg', url: 'https://azimuthotels.com/ru' },
            { coordinates: [60.618504, 56.836677], iconSrc: 'https://ekaterinburg.cosmosgroup.ru/files/hotels/39_logoFill_1693403596.png', url: 'https://ekaterinburg.cosmosgroup.ru/ru' },
            { coordinates: [60.611264, 56.833142], iconSrc: 'https://novotel-ekb.ru/assets/front/img/Novotel_logo.svg', url: 'https://novotel-ekb.ru/'},
            { coordinates: [60.591842,56.842866], iconSrc: 'https://rg-ekaterinburghotel.ru/upload/resize_cache/iblock/09c/490_76_2619711fa078991f0a23d032687646b21/20yp19876mgxxn16zw88skfgb8oeo9n2.webp',  url: 'https://rg-ekaterinburghotel.ru/'},
            { coordinates: [60.575268, 56.835067], iconSrc: 'https://placeekaterinburg.ru/img/157a79877e8c1858.webp',  url: 'https://placeekaterinburg.ru/'},
        ];

        markerProps.forEach((markerProp) => {
            const linkElement = document.createElement('a');
            linkElement.href = markerProp.url;
            linkElement.target = '_blank';

            const markerElement = document.createElement('img');
            markerElement.className = 'icon-marker';
            markerElement.src = markerProp.iconSrc;



            linkElement.appendChild(markerElement);

            map.addChild(new YMapMarker({ coordinates: markerProp.coordinates }, linkElement));
        });
    }

    initMap();