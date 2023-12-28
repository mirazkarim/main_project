// day n8 btn
let dayNight = document.getElementById("d_n")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")

let chance = 0;

dayNight.addEventListener("click", function(){
    let dayNight = document.getElementById("d_n").value
chance++;

    if(dayNight < 0){
        console.log(dayNight)
    }

    


    if(chance == 1){
      window.location.href = "night.html"
    }

})


let btn = document.getElementById("btn-ln")

let click = 0;

btn.addEventListener("click", function(){
    let btn = document.getElementById("btn-ln").value
click++;

    if(btn < 0){
        console.log(btn)
    }

    


    if(click == 1){
      window.location.href = "dayBAN.html"
    }

})
// day n8 btn

// counting

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// counting


// aos
AOS.init();
// aos

// star 
window.addEventListener("DOMContentLoaded",() => {
    const starRating = new StarRating("form");
  });
  
  class StarRating {
    constructor(qs) {
      this.ratings = [
        {id: 1, name: "Terrible"},
        {id: 2, name: "Bad"},
        {id: 3, name: "OK"},
        {id: 4, name: "Good"},
        {id: 5, name: "Excellent"}
      ];
      this.rating = null;
      this.el = document.querySelector(qs);
  
      this.init();
    }
    init() {
      this.el?.addEventListener("change",this.updateRating.bind(this));
  
      // stop Firefox from preserving form data between refreshes
      try {
        this.el?.reset();
      } catch (err) {
        console.error("Element isn’t a form.");
      }
    }
    updateRating(e) {
      // clear animation delays
      Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
        el.className = "rating__label";
      });
  
      const ratingObject = this.ratings.find(r => r.id === +e.target.value);
      const prevRatingID = this.rating?.id || 0;
  
      let delay = 0;
      this.rating = ratingObject;
      this.ratings.forEach(rating => {
        const { id } = rating;
  
        // add the delays
        const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);
  
        if (id > prevRatingID + 1 && id <= this.rating.id) {
          ++delay;
          ratingLabel.classList.add(`rating__label--delay${delay}`);
        }
  
        // hide ratings to not read, show the one to read
        const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);
  
        if (this.rating.id !== id)
          ratingTextEl.setAttribute("hidden",true);
        else
          ratingTextEl.removeAttribute("hidden");
      });
    }
  }

  // star 