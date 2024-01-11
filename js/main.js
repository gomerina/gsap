document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger)
    //gsap.to(".selector", {
    //    x: 100,
    //    y: 100,
    //    background: 'orange',
    //    duration: 1,
    //    delay: .4,
    //    //repeat: 5,
    //    //repeatDelay: 1,
    //    stagger: .3, // шаг для элемента
    //    ease: 'power2.inOut',
    //    //paused: true, // Пауза для удобства
    //    onCompleted: function () {
    //        console.log('tes')
    //    },
    //    onStart: function () {
    //        console.log('start')
    //    },
    //    onEnd: function () {
    //        console.log('end')
    //    }
    //})

    //// Разбиваем заголовок на символы
    //let heading = document.querySelector('.heading')
    //let letter = heading.innerHTML.split('')
    //heading.innerHTML = '';
    //heading.style.opacity = 1;
    //let spanArray = letter.map(
    //    letter => {
    //        let item = document.createElement('span');
    //        item.classList.add('letter')
    //        item.innerHTML = letter
    //        heading.appendChild(item)
    //        const rect = item.getBoundingClientRect()
    //        item.style.left = rect.left + 'px'
    //        item.style.top = rect.top + 'px'
    //        item.x = rect.left
    //        item.y = rect.top
    //        return item
    //    }
    //)
    //spanArray.forEach(function (span) {
    //    span.style.position = 'absolute'
    //})

    //gsap.to(".letter", {
    //    duration: .4,
    //    opacity: 1,
    //    color: `#136135`,
    //    stagger: .1,
    //    top: 100,
    //    left: function (i, el) {
    //        return el.x + i * 5
    //    }
    //})

    //// end
    //var tween = gsap.to(".box-item", {
    //    duration: 1,
    //    y: 100,
    //    background: 'black',
    //    scale: .2,
    //    paused: true,
    //    //stagger: .4,
    //    stagger: {
    //        each: .4,
    //        from: 'center',
    //        grid: 'auto',
    //        //repeat: 3,
    //        //yoyo: true,
    //        //from: 'end',
    //        //from: 'random',
    //        //from: 'edges',
    //        //axis: 'x',
    //    },

    //    //delay: function (i) {
    //    //    return i * .5
    //    //}
    //})
    //document.querySelector('.jsStart').addEventListener('click', function () {
    //    tween.play()
    //})
    //document.querySelector('.jsEnd').addEventListener('click', function () {
    //    tween.pause()
    //})
    //document.querySelector('.jsReturn').addEventListener('click', function () {
    //    tween.resume()
    //})
    //document.querySelector('.jsReverse').addEventListener('click', function () {
    //    tween.reverse()
    //})
    //document.querySelector('.jsRepeat').addEventListener('click', function () {
    //    tween.restart()
    //})
    //document.querySelector('.jsRange').addEventListener('input', function () {
    //    tween.progress(this.value / 100)
    //})

    //const lenis = new Lenis({
    //    duration: 1.3,
    //})


    //function raf(time) {
    //    lenis.raf(time)
    //    requestAnimationFrame(raf)
    //}
    //lenis.on('scroll', ScrollTrigger.update)

    //gsap.ticker.add((time) => {
    //    lenis.raf(time * 1000)
    //})

    //gsap.ticker.lagSmoothing(0)
    //requestAnimationFrame(raf)

    var galleryItem = $('.gallery-scroll__item');
    var scrollGalleryWidth = (galleryItem.width() * galleryItem.length - galleryItem.width())

    var galleryReverceItem = $('.gallery-scroll__item2')
    gsap.to('#slideOne', {
        scrollTrigger: {
            trigger: '.gallery-box',
            //markers: true,
            start: 'center center',
            end: () => '+=' + scrollGalleryWidth,
            pin: true,
            scrub: true,

            onUpdate: function (self) {
                $('.gallery-scroll.reverce').attr('style', `transform: translateX(${-scrollGalleryWidth + (self.progress * scrollGalleryWidth)}px)`)
                console.log(self.progress * 100)
            }

        },
        x: -scrollGalleryWidth,
    })
    $('.gallery-scroll.reverce').attr('style', `transform: translateX(${-scrollGalleryWidth}px)`)
    //gsap.to('#slideTwo', {
    //    scrollTrigger: {
    //        trigger: '.gallery-box',
    //        //markers: true,
    //        start: 'top top',
    //        end: () => '+=' + scrollGalleryReverceWidth,
    //        pin: true,
    //        scrub: true,
    //    },
    //    x: -scrollGalleryReverceWidth,
    //})
    console.log(scrollGalleryWidth)
})


