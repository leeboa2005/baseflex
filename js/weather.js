// 날씨 데이터 출력
window.addEventListener('load', function () {
    fetch("http://spartacodingclub.shop/sparta_api/weather/seoul").then(res => res.json()).then(data => {
        let nowWeather = data['temp']
        const weather = document.querySelector('#weather');
        weather.innerHTML = `${nowWeather}° 입니다.`
    })
})