const engArrow = document.querySelector("#engArrow")
const usdArrow = document.querySelector("#usdArrow")
const brandContainer = document.querySelector(".top__navbar-socialMedia").querySelectorAll("i")
const engSection = document.querySelector("#top__navbar-languageConatiner")
const usdSection = document.querySelector("#top__navbar-curencyConatiner")
const language = document.querySelector(".Language__Dropdown")
const currency = document.querySelector(".usd__Dropdown")
const topAnimation = document.querySelector(".showAnimation")
const homeBtn = document.querySelector('#homeBtn');
const homeDropdown = document.querySelector('.home__dropdown');
const homeArrow = document.querySelector('#homeArrow');
const shopBtn = document.querySelector('#shopBtn');
const shopDropdown = document.querySelector('.shop__dropdown');
const shopArrow = document.querySelector('#shopArrow');
const iconsBtn = document.querySelector('#iconsBtn');
const iconsDropdown = document.querySelector('.icons__dropdown');
const iconsArrow = document.querySelector('#iconsArrow');
const pagesBtn = document.querySelector('#pagesBtn');
const pagesDropdown = document.querySelector('.pages__dropdown');
const pagesArrow = document.querySelector('#pagesArrow');
const docsBtn = document.querySelector('#docsBtn');
const docsDropdown = document.querySelector('.docs__dropdown');
const docsArrow = document.querySelector('#docsArrow');
const searchArea = document.querySelector('#searchArea');
const searchAreaFotter = document.querySelector('#email__adress');
const burgermenuBtn = document.querySelector('.burgermenuBtn');
const burgermenu = document.querySelector('.burgermenu__mainnavbar');
const smallNav = document.querySelector('.main__navbar-smaller');
///responsive 

const menu = document.querySelector('.burgermenu__mainnavbar');
const menuSectionAbout = document.querySelector('.section1');


const accondFoterBtn=document.querySelector('.accondFoterBtn2')
const accondFoterBtn2=document.querySelector('.accondFoterBtn')
const accondDropdownFooter =document.querySelector('.accond__dropdown')
accondFoterBtn.addEventListener('click',()=>{
    accondDropdownFooter.classList.toggle('displayflex')
})
accondFoterBtn2.addEventListener('click',()=>{
    accondDropdownFooter.classList.toggle('displayflex')
})

const shopFoterBtn=document.querySelector('#shopFoterBtn')
const shopFoterBtn2=document.querySelector('#shopFoterBtn2')
const shopDropdownFooter =document.querySelector('#shopDrop')
shopFoterBtn.addEventListener('click',()=>{
    shopDropdownFooter.classList.toggle('displayflex')
    console.log(shopDropdownFooter.classList.value);
})
shopFoterBtn2.addEventListener('click',()=>{
    shopDropdownFooter.classList.toggle('displayflex')
    
})




const companyFoterBtn=document.querySelector('#companyFoterBtn')
const companyFoterBtn2=document.querySelector('#companyFoterBtn2')
const copmanyDropdownFooter =document.querySelector('#companyBtn')
companyFoterBtn.addEventListener('click',()=>{
    copmanyDropdownFooter.classList.toggle('displayflex')
    console.log(shopDropdownFooter.classList.value);
})
companyFoterBtn2.addEventListener('click',()=>{
    copmanyDropdownFooter.classList.toggle('displayflex')
    
})


////


function makeActive(Element, active) {
    Element.classList.toggle(active);
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)) {
            Element.classList.remove(active)
        }
    })
}
//
burgermenuBtn.addEventListener('click', () => {
    toggleDropdown2(burgermenuBtn, burgermenu, shopArrow)
})
function toggleDropdown2(btn, dropdown, arrow) {
    dropdown.classList.toggle('show__burger');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    smallNav.classList.add("bcolorWhite")
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show__burger');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
            smallNav.classList.remove("bcolorWhite")
        }
    })
    if (dropdown.classList.contains('show__burger')) {
        smallNav.classList.add("bcolorWhite")
    }
    else {
        smallNav.classList.remove("bcolorWhite")
    }

}
function toggleDropdown3(btn, dropdown, arrow) {
    dropdown.classList.toggle('show__burger');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show__burger');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
        }
    })
}
brandContainer.forEach(btn => btn.addEventListener('click', () => {
    makeActive(btn, "activeIcon")
}))

searchAreaFotter.addEventListener('click', () => {
    makeActive(searchAreaFotter, "borderBlack")
});

searchArea.addEventListener('click', () => {
    makeActive(searchArea, "borderBlack")
});

engSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(engArrow, engSection, language);
});

usdSection.addEventListener('click', () => {
    makeAcrtiveDropdowns(usdArrow, usdSection, currency)
})
// activeFunction
homeBtn.addEventListener('click', () => {
    toggleDropdown(homeBtn, homeDropdown, homeArrow)
})

shopBtn.addEventListener('click', () => {
    toggleDropdown(shopBtn, shopDropdown, shopArrow)
})
iconsBtn.addEventListener('click', () => {
    toggleDropdown(iconsBtn, iconsDropdown, iconsArrow)
})
pagesBtn.addEventListener('click', () => {
    toggleDropdown(pagesBtn, pagesDropdown, pagesArrow)
})
docsBtn.addEventListener('click', () => {
    toggleDropdown(docsBtn, docsDropdown, docsArrow)
})
function toggleDropdown(btn, dropdown, arrow) {
    dropdown.classList.toggle('show');
    arrow.classList.toggle('Rotate')
    btn.classList.toggle('colorBlack')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target) && !dropdown.contains(event.target)) {
            btn.classList.remove('colorBlack');
            dropdown.classList.remove('show');
            dropdown.style.cursor = "default"
            arrow.classList.remove('Rotate')
        }
    })
}
function makeAcrtiveDropdowns(Element, container, show) {
    if (Element.classList.contains("Rotate")) {
        Element.classList.remove("Rotate");
        show.classList.remove("DropAnimate");

    } else {
        Element.classList.add("Rotate");
        show.style.visibility = "visible";
        show.classList.add("DropAnimate");
        show.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            Element.classList.remove("Rotate")
            show.style.pointerEvents = "none";
            show.classList.remove("DropAnimate");
        }
    })
}

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4222000,
        fade: false,
        prevArrow: false,
        nextArrow: false
    });
});