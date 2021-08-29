function render3d() {
    // const domWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const constraint = 50;
    const imgs = document.querySelectorAll(".rotator-item > img");

    function boundRotation(value) {
        return Math.max(-15, 
               Math.min( 15, value)
        );
    }
    
    function transform(x, y, element) {
        let box = element.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constraint;
        let calcY = (x - box.x - (box.width / 2)) / constraint;
        return `perspective(350px) 
                rotateX(${boundRotation(calcX)}deg) 
                rotateY(${boundRotation(calcY)}deg)`;
    };
    
    document.body.onmousemove = reRender;

    function reRender(e) {        
        window.requestAnimationFrame(() => {
            imgs.forEach(img => img.style.transform = transform(e.clientX, e.clientY, img));
        });
        window.requestAnimationFrame(_ => {})
    };
}

if (!window.matchMedia("(any-hover: none)").matches) {
    render3d();
}