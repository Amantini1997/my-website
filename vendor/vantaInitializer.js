const BIRDS = true;

import("https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js")
    .then(_ => loadVanta());

function loadVanta() {
    if (BIRDS) {
        import("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.birds.min.js")
                .then(_ => {
                    VANTA.BIRDS({
                        el: "#animated-bg",
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        backgroundColor: 0x0,
                        color1: 0x17ae38,
                        color2: 0xcfff,
                        birdSize: 0.50,
                        wingSpan: 40.00,
                        speedLimit: 7.00,
                        separation: 43.00,
                        alignment: 44.00,
                        cohesion: 1.00,
                        quantity: 4.00
                    });

                    setVantaBody(VANTA);
                })
                .catch(err => console.error("Birds not loaded: \n", err));
    } else {  
        import("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.cells.min.js")
                .then(_ => {
                    VANTA.CELLS({
                        el: "#animated-bg",
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        color1: 0x0,
                        color2: 0x897a,
                        size: 0.80,
                        speed: 2.10
                    });
                })
                .catch(err => console.error("Birds not loaded: \n", err));
                
        import("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.birds.min.js")
                .then(_ => {
                    setVantaBody(VANTA);
                })
                .catch(err => console.error("Birds not loaded: \n", err));
    }
}

function setVantaBody(VANTA){
    VANTA.BIRDS({
        el: "body",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x17ae38,
        color2: 0xcfff,
        birdSize: 1.10,
        separation: 100.00,
        alignment: 93.00,
        cohesion: 1.00,
        quantity: 2.00
    });
}