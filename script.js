const app = {

    scroll: 0,
    wheel: 0,

    init: () => {
        console.log('init !');
        console.log(window.scrollY)
        let neige = document.getElementById('neige');

        window.addEventListener('wheel', (e) => {
            if (window.scrollY < 1300) {
                e.preventDefault();
                if (e.deltaY > 0) {
                    app.wheel += 1;
                } else {
                    app.wheel -= 1;
                    if (app.wheel < 0) {
                        app.wheel = 0
                    }
                }
                if (e.deltaY < 0 && app.scroll == 1) {
                    console.log('test');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    app.scroll = 0;
                    app.wheel = 0;
                    neige.src = "./images_svg/SVG/neige.svg"
                    neige.style.opacity = 1;
                    app.scaleBg();
                } else if (e.deltaY > 0 && app.wheel*0.25 >= 2){
                    window.scrollTo({ top: 1300, behavior: 'smooth' });
                    app.scroll = 1;
                    neige.style.left = -1300+"px";
                    neige.style.bottom = -1300+"px";
                    neige.style.opacity = 0;
                    neige.src = "./images_svg/SVG/braises.svg"
                } else {
                    console.log(`scale : ${app.wheel*0.25}`);
                    console.log(`translate : ${-2.5*app.wheel}`);
                    
                    app.scaleBg();
                }
            }
        }, { passive: false })
    },
    
    scaleBg: () => {
        let neige = document.getElementById('neige');
        let gauche = document.getElementById('gauche');
        let fond = document.getElementById('fond');
        let cave = document.getElementById('cave');
        let bas = document.getElementById('bas');
        
        neige.style.left = app.wheel*-100 + 'px';
        neige.style.bottom = app.wheel*-100 + 'px';
        cave.style.transform = ("scale("+(Math.min(1+app.wheel*0.25, 2))+") translate("+(Math.max(-2.5*app.wheel, -20))+"vw)");
        bas.style.transform = ("scale("+(Math.min(1+app.wheel*0.25, 2))+") translate("+(Math.max(-2.5*app.wheel, -20))+"vw)");
        gauche.style.transform = ("scale("+(Math.min(1+app.wheel*0.25, 2))+") translate("+(Math.max(-.25*app.wheel, -2))+"vw)");
        fond.style.transform = ("scale("+(Math.min(1+app.wheel*0.25, 2))+") translate("+(Math.min(.25*app.wheel, 2))+"vw)");
    }
}

window.addEventListener('DOMContentLoaded', app.init);