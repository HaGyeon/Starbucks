console.log(`hello`);
const searchEl = document.querySelector(`.search`);
const searchInputEl = document.querySelector(`.search input`);

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener(`click`,function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener(`focus`,function(){
    searchInputEl.setAttribute(`placeholder`,`통합검색`);
    searchEl.classList.add(`focused`);
})

searchInputEl.addEventListener(`blur`,function(){
    searchInputEl.setAttribute(`placeholder`,``);
    searchEl.classList.remove(`focused`);
});

// 순서대로 요소 나타내기인데 요소 먼저 찾기
const fadeEls = document.querySelectorAll(`.banner .fade-in`) // queryselectorall은 배열이 같이 옴
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.5,
        opacity:1
        }
    )
})

new Swiper('.bar_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true
});

const barEl = document.querySelector(`.bar`);
const barToggleBtn = document.querySelector(`.up_and_down`);

console.log(barEl);
console.log(barToggleBtn);

let isOpenBtn = false;

barToggleBtn.addEventListener(`click`,function(){
    let isOpenBtn=barToggleBtn.classList.contains(`on`);
    let controlOpenBtnContent = barToggleBtn.textContent;
    if(!isOpenBtn){
        barToggleBtn.classList.add(`on`);
        barToggleBtn.textContent = 'expand_circle_down';
    }else{
        barToggleBtn.classList.remove(`on`);
        barToggleBtn.textContent = 'expand_circle_up';
    }
})

const promoSwiper = new Swiper(`.promotion .swiper-container`,{
    slidesPerView: 3, //한번에 몇개까지 슬라이드 하게 할 거냐
    spaceBetween: 10, //슬라이드 사이에 마진을 얼마나 줄거냐
    centeredSlides: true, //보여질 슬라이드가 가운데로 오게 됨
    loop: true,
    autoplay: {
        delay: 5000, //5초  
    },
    pagination: {
        el: `.promotion .swiper-pagination`
    },
    navigation: {
        prevEl: `.promotion .swiper-prev`,
        nextEl: `.promotion .swiper-next`
    }
});

const swiperControlBtn = document.querySelector(`.swiper_control-btn`);
swiperControlBtn.addEventListener(`click`,function(){
    let isSwiperOn = swiperControlBtn.classList.contains(`on`);
    let controlBtnContent = swiperControlBtn.textContent;
    if(isSwiperOn){
        //stop
        swiperControlBtn.classList.remove(`on`);
        promoSwiper.autoplay.stop();
        swiperControlBtn.textContent = `pause`;
    }else{
        swiperControlBtn.classList.add(`on`);
        promoSwiper.autoplay.start();
        swiperControlBtn.textContent = `play_arrow`;
    }
})
//프로모션 영역 요소
const promotionEl = document.querySelector(`.promotion`);
//프로모션 영역 토글 버튼요소
const promotionToggleBtn = document.querySelector(`.toggle-promotion`);

// 프로모션이 숨겨져 있는 걸 먼저 초기로 설정을 해놓고 시작
let isHidePromotion = false;
//토글버튼 누르면?
promotionToggleBtn.addEventListener(`click`,function(){
    // 프로모션 숨기려는 요소인 `hide`가 있는지 없는지 확인.
    let isHidePromotion = promotionEl.classList.contains(`hide`);
    if(!isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove(`hide`);
    }
})

// 감지할 요소를 선택. scroll-spy클래스.
const spyEls = document.querySelectorAll(`#body_layout .scroll-spy`);
// console.log(spyEls);
// forEach반복문으로 각 요소들에 기능을 처리
spyEls.forEach(function(spyEl){
    // console.log(spyEl);
    new ScrollMagic.Scene({// Scene : 감지할 요소 추가해주는 기능.
        triggerElement: spyEl// spyEl을 감지할때 동작.
        ,triggerHook: 0.8 // 어느 위치에 왔을 때 작동하느냐를 정함.
    })
    .setClassToggle(spyEl,`show`) // splEl에 show코드를 추가함.
    .addTo(new ScrollMagic.Controller()); // 코드에 기능 할당
});

const awardsSwiper = new Swiper(`.awards .swiper-container`,{
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    }
    ,navigation:{
        prevEl:`.awards .swiper-prev`,
        nextEl:`.awards .swiper-next`
    }
})

const badgeEl = document.querySelector(`#head_layout .badges`);
// console.log(badgeEl);

window.addEventListener(`scroll`,_.throttle(function(){
    // console.log(`scroll`);
    if(window.scrollY > 500){  //어느 높이에서 실행하게 만들거냐
        badgeEl.style.display = `none`; //style태그를 사용하면 css접근 가능.
        gsap.to(badgeEl,.6,{ //.6은 transition. 0.6초의 시간동안 효과 보여줌
            opacity:0,
            display:`none`
        })
        gsap.to(`#up`,0.3,{
            x:0 //0은 원래 요소의 위치값
        })
    }else{
        badgeEl.style.display = `block`;
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:`block`
        })
        gsap.to(`#up`,0.3,{
            x:100 //0은 원래 요소의 위치값
        })
    }
},300)) //0.3초마다 스크롤을 감지하겠다. 즉, 딜레이를 줌.

const upEl = document.querySelector(`#up`);
upEl,addEventListener(`click`,function(){
    gsap.to(window,0.7,{
        scrollTo : 0
    })
})