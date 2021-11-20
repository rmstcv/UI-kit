import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';
// import './nouislider.scss';

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    }
});