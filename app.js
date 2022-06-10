const callBtn = document.querySelectorAll('.call-btn')
const modal = document.querySelector('.modal-block')
const closeBtn = document.querySelector('.close-btn')

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        374: {
            slidesPerView: 1,
        }
    }

  });

  const openBlockArrow = document.querySelectorAll('.faq__item-arrov-open')
  

  openBlockArrow.forEach(el => {
      el.addEventListener('click', (event) => {
          const id = event.target.id
          document.getElementById(`opn${id}`).classList.remove('close')
          document.getElementById(`el${id}`).classList.remove('hidden')          
      })
  })

  const swiperPartners = new Swiper('.partners-slider', {
    loop: true,
    slidesPerView: 6,
    // spaceBetween: 10,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  callBtn.forEach(el => {
      el.addEventListener('click', () => {
          modal.classList.remove('hidden')
      })
  })

  closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden')
  })
