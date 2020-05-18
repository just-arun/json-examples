const app = new Vue({
    el: "#app",
    data: {
        sectionOne: 'hi',
        windowHeight: 0,
        openNav: false,
        contact: {
            name: '',
            email: '',
            company: '',
            message: ''
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("hashchange", this.handleSectionChange, false);
        this.windowHeight = window.innerHeight
    },
    methods: {
        handleScroll(e) {
            let tech = this.windowHeight + 50
            let project = this.windowHeight * 2
            let contact = this.windowHeight * 3
            if (window.pageYOffset > 50 && window.pageYOffset < this.windowHeight) {
                location.hash = "#about"
            }
            if (window.pageYOffset > tech  && window.pageYOffset < project) {
                location.hash = "#tech"
            }
            if (window.pageYOffset > (project + 50) && window.pageYOffset < contact) {
                location.hash = "#projects"
            }
            if (window.pageYOffset > (contact + 50) && window.pageYOffset < (contact + this.windowHeight + 1000)) {
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
                    this.sectionOne = 'hi'
                    break;
                case "#about":
                    this.sectionOne = 'about'
                    break;
                case "#tech":
                    this.sectionOne = 'tech'
                    break;
                case "#projects":
                    this.sectionOne = 'projects'
                    break;
                case "#contact":
                    this.sectionOne = 'contact'
                    break;
            }
        },
        navLink(par) {
            setTimeout(() => {
                this.openNav = false;
            }, 500);
            setTimeout(() => {
                location.hash = `#${par}`
                this.sectionOne = par
            }, 1000);
        }
    }
});