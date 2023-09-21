// Download CV
let downloadCv = document.querySelector(".download");
downloadCv.addEventListener("click", () => {
  downloadCv.href = "CV(Ahmed).pdf";
});


// Skills Working
// add Active class to skills option
let skills = document.querySelectorAll(".skills-option .skill"),
  allSkills = document.querySelectorAll("#select-skill");
skills.forEach((skill) => {
  skill.addEventListener("click", removeActive);
  skill.addEventListener("click", manageSkills);
});



function removeActive() {
  skills.forEach((skill) => {
    skill.classList.remove("active");
    this.classList.add("active");
    allSkills.forEach((all) => {
      all.classList.remove("show");
    });
    document.querySelectorAll(`.${this.dataset.class}`).forEach((el) => {
      el.classList.add("show");
    });
  });
}

// ============ Open Close Menu =============>
let openMenu = document.querySelector(".menuIcon i"),
closeMenu = document.querySelector(".close-menu i"),
headeLinks = document.querySelector(".header .links"),
linkLi = document.querySelectorAll(".header .links li a");

openMenu.addEventListener("click", () => {
  headeLinks.classList.toggle("open")
  openMenu.classList.toggle("fa-xmark");
});

linkLi.forEach(li => {
  li.addEventListener("click", () => {
    headeLinks.classList.remove("open")
    openMenu.classList.remove("fa-xmark")
      openMenu.classList.add("fa-bars")
  })
})

function manageSkills() {
  allSkills.forEach((all) => {
    all.style.display = "none";
  });
}


 progrmmingLanguage = document.querySelectorAll(".progrmming-language .lang .progress"),
 sectionSkills = document.getElementById("skills"),
 startedCounter = false;
window.onscroll = function () {
  if (window.scrollY >= sectionSkills.offsetTop + 80) {
    if (!startedCounter) {
      progrmmingLanguage.forEach((lang) => counterSkills(lang))
    }
    startedCounter = true;
  }
}


function counterSkills (el) {
  let dataProgress = el.dataset.progress;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == dataProgress) {
      clearInterval(count);
      el.textContent = dataProgress + "%";
    }
  }, 2000 / dataProgress);
}


// ====================== Typed js ===============>
const typed = new Typed(".multiple-text", {
  strings: ["Front End Developer", "Pdf Creater", "Student", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});


// to top button 
let toUp = document.querySelector(".to-up");
toUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})
