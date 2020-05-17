const app = new Vue({
    el: "#app",
    data: {
        sectionOne: '',
        windowHeight: 0,
        openNav: false
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("hashchange", this.handleSectionChange, false);
        this.windowHeight = window.innerHeight
    },
    methods: {
        handleScroll(e) {
            if (window.pageYOffset > 50 && window.pageYOffset < 200) {
                location.hash = "#about"
            }
            if (window.pageYOffset > 200 && window.pageYOffset < 400) {
                location.hash = "#tech"
            }
            if (window.pageYOffset > 400 && window.pageYOffset < 600) {
                location.hash = "#projects"
            }
            if (window.pageYOffset > 600 && window.pageYOffset < 800) {
                location.hash = "#contact"
            }
            if (window.pageYOffset < 45) {
                location.hash = "#"
            }
        },
        handleSectionChange() {
            console.log(location.hash);
            switch (location.hash) {
                case "":
                    this.sectionOne = ''
                    break;
                case "#about":
                    this.sectionOne = 'about'
                    break;
            }
        },
        navLink(par) {
            location.hash = `#${par}`
        }
    }
});