import io from 'socket.io-client';
const socket = io.connect('https://kooper-server-tts.herokuapp.com/');

function Handler() {

    function registerColorHandler(changeColorHandler) {
        socket.on('sfondo', data => changeColorHandler(data)); // passing data do changeColorHandler as a parameter
    }

    function unregisterColorHandler() {
        socket.off('sfondo');
    }

    function registerMenuHandler(menuHandler) {
        socket.on('menu', data => menuHandler(data)); // passing data do menuHandler as a parameter
    }

    function unregisterMenuHandler() {
        socket.off('menu');
    }
    
    function registerCarouselHandler(carouselHandler) {
        socket.on('carousel', data => carouselHandler(data)); 
    }

    function unregisterCarouselHandler() {
        socket.off('carousel');
    }

    function registerCarouselOnOffHandler(carouselOnOffHandler) {
        socket.on('carousel-onoff', data => carouselOnOffHandler(data)); 
    }

    function unregisterCarouselOnOffHandler() {
        socket.off('carousel-onoff');
    }

    function registerChangeRouteHandler(changeRouteHandler) {
        socket.on('change-router', data => changeRouteHandler(data)); 
    }

    function unregisterChangeRouteHandler() {
        socket.off('change-router');
    }

    function registershowTextHandler(showTextHandler) {
        socket.on('toggle-text', data => showTextHandler(data)); 
    }

    function unregistershowTextHandler() {
        socket.off('toggle-text');
    }

    return {
        registerColorHandler: registerColorHandler,
        unregisterColorHandler: unregisterColorHandler,
        registerMenuHandler: registerMenuHandler,
        unregisterMenuHandler: unregisterMenuHandler,
        registerCarouselHandler: registerCarouselHandler,
        unregisterCarouselHandler: unregisterCarouselHandler,
        registerCarouselOnOffHandler: registerCarouselOnOffHandler,
        unregisterCarouselOnOffHandler: unregisterCarouselOnOffHandler,
        registerChangeRouteHandler: registerChangeRouteHandler,
        unregisterChangeRouteHandler: unregisterChangeRouteHandler,
        registershowTextHandler: registershowTextHandler,
        unregistershowTextHandler: unregistershowTextHandler
    }
}

export default Handler;
