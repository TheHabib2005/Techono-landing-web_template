// ============ VIDEO POPUP BOX SHOW AND HIDE ============  //

const video_open_btn = document.querySelector(".venobox");
const video_close_btn = document.querySelector(".video-close");
const video_area = document.querySelector(".video-area");

video_open_btn.onclick = (e) => {
  e.preventDefault();
  video_area.style.display = "flex";
};

video_close_btn.onclick = () => {
  video_area.style.display = "none";
};


const link2 = document.querySelectorAll(".link2");

link2.forEach(link =>{
link.addEventListener("click", (l) =>{
  l.preventDefault()
})
})

// ============ STICKY HEADER ON SCROLL ============  //

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 100) {
    header.classList.add("header-sticky-active");
    scrolltotopbtn.style.transform = "translateY(0px)";
  } else {
    header.classList.remove("header-sticky-active");
    scrolltotopbtn.style.transform = "translateY(100px)";
  }
});

// ============ SPONCER-BANRD LOGO SLIDEING  ============  //

$(".sponcer-main-slide-wrapper").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    780: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// ============ SCROLL TO TOP BUTTON ============  //

const scrolltotopbtn = document.querySelector("#scroll-to-top");

scrolltotopbtn.onclick = (scroll) => {
  scroll.preventDefault();

  window.scrollTo(0, 0);
};
// ============ SERVICES SLIDER ============  //

$(".tceheno-services-main-slide-wrapper").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900:{
      items:3
    },
    1000: {
      items: 4,
    },
  },
});

// ============ COUNTER-UP ANIMATION ============  //

let counters = document.querySelectorAll(".counter");
let section = document.querySelector("#counter-up-animation");
let started = false; // Function Started ? No

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      counterfuncation();
    }
    started = true;
  }
};

function counterfuncation() {
  counters.forEach((count) => {
    let goal = count.getAttribute("data-goal");
    let startvalue = 0;

    let counter = setInterval(() => {
      startvalue += 1;
      count.textContent = startvalue;
      if (startvalue == goal) {
        clearTimeout(counter);
      }
    }, 3);
  });
}

// CONTACT FORM VALICATION

const submit_Button = document.querySelector(".contact-submit-button");
const form = document.querySelector("#contact-form");
const conatc_name = document.querySelector(".contact-name");

// CONTACT NAME VALICATION 

function contac_name() {
  let form_wrapper = conatc_name.parentElement;
  let text = document.querySelector(".pp");
  if (conatc_name.value.trim().length <= 0) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'name is requred'
    return false

  }
  if (conatc_name.value.trim().length < 5 || conatc_name.value.trim().length > 15) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'name must be 5 char and max 15 char';

    return false
  }
  else {
    form_wrapper.classList.remove("form_erorr")
    form_wrapper.classList.add("form_success")
    text.textContent = ''
    return true


  }
}

// CONTACT EMAIL VALICATION 

const email = document.querySelector(".contact-email");

function contac_email() {
  let form_wrapper = email.parentElement;
  let text = document.querySelector(".pp");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim().length <= 0) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")

    text.textContent = 'email cannot be blank'
    return false

  }
  if (email.value.trim().length < 5 ) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'email must be 5 char';

    return false
  }

  if(!email.value.match(pattern)){
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'please type valid email'
    return false
  }
 
  else {
    form_wrapper.classList.remove("form_erorr")
    form_wrapper.classList.add("form_success")
    text.textContent = ''
    return true
  }
}

// CONTACT PHONE VALICATION 

const phone = document.querySelector(".contact-phone");

function contac_phone() {
  let form_wrapper = phone.parentElement;
  let text = document.querySelector(".pp");
  if (phone.value.trim().length <= 0) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")

    text.textContent = 'phone number in requred'
    return false

  }
  if (phone.value.trim().length <= 10) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'phone number should must 10 char'
    return false
  }
  if (isNaN(phone.value.trim())) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'phone number should be only number'
    return false
  }
  if (phone.value.trim().length < 5 || phone.value.trim().length > 15) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'phone number must be 5 char and max 15 char';
    return false
  }
  else {
    form_wrapper.classList.remove("form_erorr")
    form_wrapper.classList.add("form_success")
    text.textContent = ''
    return true
  }
}

// CONTACT MASSAGES VALICATION 

const massage = document.querySelector("#msg");

function contac_massage() {
  let form_wrapper = massage.parentElement;
  let text = document.querySelector(".pp");
  if (massage.value.trim().length <= 0) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'massage in must'
    return false

  }
  if (massage.value.trim().length < 15) {
    form_wrapper.classList.add("form_erorr")
    form_wrapper.classList.remove("form_success")
    text.textContent = 'your massage is too short';
    return false
  }
  else {
    form_wrapper.classList.remove("form_erorr")
    form_wrapper.classList.add("form_success")
    text.textContent = ''
    return true
  }
}

// FORM SUCCESS && EORR CONDUACTION VALICATION 

function isvalid() {
  let form_group = document.querySelectorAll(".form-controll");
  var valid = true;
  for (let i = 0; i < form_group.length; i++) {

    if (form_group[i].classList.contains("form_erorr")) {
      valid = false;
    }

  }

  return valid

}



// FORM SUBMITION CONDICATION
submit_Button.addEventListener("click", (event) => {


  if (!contac_name() || !contac_email() || !contac_phone() || !contac_massage()) {

  }
  if (isvalid() == true) {
    event.preventDefault()
    // call backend request
    alert("your form has submited && call the backend request");
    setTimeout(function () {
      conatc_name.value = '';
      email.value = '';
      phone.value = '';
      massage.value = '';
      document.querySelector(".form_erorr").classList.remove("form_erorr")
      document.querySelector(".form_success").classList.remove("form_success")

    }, 1000)
    setTimeout(function () {
      window.location.href = './formsubmit.html';

    }, 2000)
  }

  else {
    event.preventDefault()
  }
  // event.preventDefault()

})



// RESPONSIVE MOBILE MENU //

const mobile_header = document.getElementById("mobile-menu-header");
const nav_open_btn = document.querySelector(".hamberger_menu_icon i");

nav_open_btn.addEventListener("click", () =>{
  mobile_header.classList.toggle("mobile_header-active");
  // document.querySelector(".mobile-nav-item.sub-menu-button.active").classList.remove("active");
  // document.querySelector(".mobile-drop-down-menu.sub-menu-active").classList.remove("sub-menu-active")
})



const sub_menu_button = document.querySelectorAll(".sub-menu-button");

 sub_menu_button.forEach(submenubutton =>{
  
  submenubutton.querySelector(".mobile-nav-link").addEventListener("click", (e) =>{
    e.preventDefault()
  })

  submenubutton.addEventListener("click", () =>{
    submenubutton.classList.toggle("active");
    const sub_menu = submenubutton.querySelector(".mobile-drop-down-menu");
    sub_menu.classList.toggle("sub-menu-active")
  })

 })
