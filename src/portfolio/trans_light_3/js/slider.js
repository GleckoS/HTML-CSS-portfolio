'use strict';
const multiItemSlider = (function () {
    return function (selector, buttons, stepScale) {
        let
            _mainElement = document.querySelector(selector), // основный элемент блока
            _ButtonsWrapper = document.querySelector(buttons),
            _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
            _sliderControls = _ButtonsWrapper.querySelectorAll('.slider__control'), // элементы управления
            _sliderControlLeft = _ButtonsWrapper.querySelector('.slider__control_left'), // кнопка "LEFT"
            _sliderControlRight = _ButtonsWrapper.querySelector('.slider__control_right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение трансформации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * stepScale, // величина шага (для трансформации)
            _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        const position = {
            getMin: 0,
            getMax: _items.length - 1,
        }

        const _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                    _sliderControlLeft.classList.add('slider__control_show');
                }
                if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('slider__control_show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('slider__control_show')) {
                    _sliderControlRight.classList.add('slider__control_show');
                }
                if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('slider__control_show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        const _controlClick = function (e) {
            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        const _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обработчика _controlClick для события click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

    /* Баг с маржинами потом подправить */

if (screen.width > 1070){
const slider = multiItemSlider('.projects-slider', '.projects-slider__buttons', 105)
}
else {
    const slider = multiItemSlider('.projects-slider', '.projects-slider__buttons', 100)
}

const slider2 = multiItemSlider('.rent-slider', '.rent-slider__buttons', 100)