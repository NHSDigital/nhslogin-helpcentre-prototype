// ES6 or Vanilla JavaScript

// conditional extra email
var FormStuff = {
  
    init: function() {
      this.applyConditionalRequired();
      this.bindUIActions();
    },
    
    bindUIActions: function() {
      $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },
    
    applyConditionalRequired: function() {
      
      $(".require-if-active").each(function() {
        var el = $(this);
        if ($(el.data("require-pair")).is(":checked")) {
          el.prop("required", true);
        } else {
          el.prop("required", false);
        }
      });
      
    }
    
  };


// side nav changing active state everytime an item is selected

document.querySelector(".article-section-nav__list").addEventListener("click", function(event) {
  if (event.target.tagName === "A") {
    // Remove the "active" class from all navigation items
    const navItems = document.querySelectorAll(".article-section-nav__list a");
    navItems.forEach(item => {
      item.classList.remove("active");
    });

    // Add the "active" class to the clicked item
    event.target.classList.add("active");
  }
});
  