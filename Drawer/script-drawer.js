if (window.location.href === 'https://conversion.com/blog/') {

    // Swiper styles
    const wfSwiperCss = document.createElement('link');
    wfSwiperCss.rel = 'stylesheet';
    wfSwiperCss.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
    document.head.appendChild(wfSwiperCss);

    // Swiper JS
    const wfSwiperJs = document.createElement('script');
    wfSwiperJs.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    document.body.appendChild(wfSwiperJs);

    const wfStyle = document.createElement('style');
    wfStyle.innerHTML = `
        #wf-drawer__container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            z-index: 1;
        }
        .wf-drawer__content {
            background-color: #fff;
            color: #000;
            text-align: center;
            padding: 5px;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
            transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
            max-height: 0;
            overflow: hidden;
        }
        .wf-drawer-open .wf-drawer__content {
            max-height: 500px;
            padding: 10px;
        }
        .wf-drawer__button-container {
            width: 100vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .wf-drawer__button {
            width: 400px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center; /* Ensure center alignment */
            color: #231b0d;
            background-color: #d6a852;
            border-radius: 10px 10px 0 0;
            padding: 10px 20px;
        }
        .wf-drawer__button p {
            margin: 0;
            font-size: 16px;
            font-weight: bold;
        }
        .wf-drawer__button svg {
            width: 20px;
            height: 20px;
            fill: #231b0d;
            transition: transform 0.3s ease-in-out;
        }
        .wf-drawer__button div {
            display: flex;
            align-items: center;
        }
        .wf-rotate-chevron {
            transform: rotate(180deg);
        }
        .swiper-slide {
            height: 289px;
            border-radius: 10px;
            background-color: black;
            color: white;
        }
        .swiper-slide h3 {
            font-size: 20px !important;
            color: #fff !important;
        }
        .swiper-slide {
            perspective: 1000px; /* Enable 3D */
            position: relative;
        }
        .wf-flip-card-inner {
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
        }
        .wf-flip-card-front, .wf-flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Hide the back side when not flipped */
        }
        .wf-flip-card-front {
            z-index: 2;
            transform: rotateY(0deg); /* Default state */
        }

        .wf-flip-card-back {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transform: rotateY(180deg); /* Hidden by default */
            background-color: #333;
            color: white;
            z-index: 1;

        }
        .wf-flip-card.flipped .wf-flip-card-inner {
            transform: rotateY(180deg);
        }
        .wf-info-btn, .wf-back-btn {
            background: #fff;
            color: #000;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
        }
        .wf-back-btn {
            margin: 60px;
            width: 90px;
        }

        .wf-info-btn:hover, .wf-back-btn:hover {
            background: #f2f2f2;
            color: #000;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
        }


    `;
    document.head.appendChild(wfStyle);

    // Create Drawer

    const elWfSiteWrapper = document.querySelector('.site-wrapper');
    const elWfDrawer = document.createElement('div');
    elWfDrawer.setAttribute('id', 'wf-drawer__container');
    elWfDrawer.innerHTML = `
        <div class="wf-drawer__button-container">
            <button class="wf-drawer__button">
                <p>Sticky Drawer</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                    </svg>
                </div>
            </button>
        </div>
        <div class="wf-drawer__content">
            <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    `;
    elWfSiteWrapper.appendChild(elWfDrawer);

    // Drawer toggling Up or Down

    const wfButton = elWfDrawer.querySelector('.wf-drawer__button');
    const wfSvg = wfButton.querySelector('svg');
    const wfSwiperControls = document.querySelectorAll('.swiper-button-prev, .swiper-button-next, .swiper-pagination');
    wfButton.addEventListener('click', () => {
        elWfDrawer.classList.toggle('wf-drawer-open');
        wfSvg.classList.toggle('wf-rotate-chevron');

        if (elWfDrawer.classList.contains('wf-drawer-open')) {
            wfSwiperControls.forEach(control => control.style.display = 'block');
        } else {
            wfSwiperControls.forEach(control => control.style.display = 'none');
        }
    });

        // Close drawer when scrolling to the bottom

        window.addEventListener('scroll', () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
    
            if (scrolled >= scrollableHeight) {

                elWfDrawer.classList.remove('wf-drawer-open');
                wfSvg.classList.remove('wf-rotate-chevron');
                wfSwiperControls.forEach(control => control.style.display = 'none');
            }
        });

    //  Getting the pokemon API

    async function fetchPokemonData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            return [];
        }
    }

    // Adding pokemon to the sliders

    async function populateSlider() {
        const wfPokemons = await fetchPokemonData();
        const wfSwiperWrapper = document.getElementById('swiper-wrapper');

        wfPokemons.forEach(async (pokemon, index) => {
            const wFpokemonDetail = await fetch(pokemon.url).then(res => res.json());
            const wFslide = document.createElement('div');
            wFslide.classList.add('swiper-slide');
            wFslide.innerHTML = `
                <div class="wf-flip-card">
                    <div class="wf-flip-card-inner">
                        <div class="wf-flip-card-front">
                            <h3>${pokemon.name.toUpperCase()}</h3>
                            <img src="${wFpokemonDetail.sprites.front_default}" alt="${pokemon.name}" title="ID: ${wFpokemonDetail.id}">
                            <p>ID: ${ wFpokemonDetail.id}</p>
                            <button class="wf-info-btn">More Info</button>
                        </div>
                        <div class="wf-flip-card-back">
                            <h3>${pokemon.name.toUpperCase()} Details</h3>
                            <p>Weight: ${wFpokemonDetail.weight}</p>
                            <p>Height: ${wFpokemonDetail.height}</p>
                            <button class="wf-back-btn">Back</button>
                        </div>
                    </div>
                </div>
            `;
            wfSwiperWrapper.appendChild(wFslide);

            const wfInfoBtn = wFslide.querySelector('.wf-info-btn');
            const wfBackBtn = wFslide.querySelector('.wf-back-btn');
            const wfFlipCard = wFslide.querySelector('.wf-flip-card');

            wfInfoBtn.addEventListener('click', () => {
                wfFlipCard.classList.add('flipped');
            });

            wfBackBtn.addEventListener('click', () => {
                wfFlipCard.classList.remove('flipped');
            });
        });
    }

    //  Swiper initialized
    function initializeSlider() {
        populateSlider().then(() => {
            new Swiper('.swiper-container', {
                slidesPerView: 7,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    }
                }
            });
        });
    }

    // waiting for swiprjs

    wfSwiperJs.onload = () => {
        initializeSlider();
    };
}