

    const ham = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    document.getElementById("nextpage").addEventListener("click", function () {
        window.open("https://drive.google.com/file/d/1Dpetr_BK8IQSOJ-zLgjnqid8-1EXxo7d/view")
    })
    document.getElementById("nextpages").addEventListener("click", function () {
        window.open("https://drive.google.com/file/d/1Dpetr_BK8IQSOJ-zLgjnqid8-1EXxo7d/view")
    })

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => {
        n.addEventListener("click", () => {
            ham.classList.remove("active");
            navMenu.classList.remove("active");
        })
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((element) => observer.observe(element));

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "borkarchetan", { responsive: true });




    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {

        for (tablink of tablinks) {

            tablink.classList.remove("active-link");
        }


        for (tabcontent of tabcontents) {

            tabcontent.classList.remove("active-tab");

        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");

    }






