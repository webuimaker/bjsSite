
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /*** 
      * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('bg-white')
            } else {
                selectHeader.classList.remove('bg-white')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }



    /**
   * Scrolls to an element with header offset
   */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 20
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }



    function update(e) {

        console.log("inside update...");
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY
        var z = document.getElementById("hero");
        var f = z.style.getPropertyValue('--flash-width');
        console.log(f, "f...");
        const replaced = Number(f.replace(/%$/, ''));
        console.log(replaced, "replce...");
        // z.style.setProperty('--flash-width', f + 10);
        // z.style["--flash-width"] = 50 + "%";

        if (replaced >= 10 && replaced <= 150) {
            console.log("detext inside condition ....")
            z.style.setProperty('--flash-width', replaced + 0.5 + '%');
        }
        // var z = e.clientF || e.touches[0].clientF

        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
        // document.documentElement.style.setProperty('--flash-width', + '%')
    }

    document.addEventListener('mousemove', update)
    document.addEventListener('touchmove', update)

})()


