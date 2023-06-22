"use strict";

// ES6 or Vanilla JavaScript
// conditional extra email
var FormStuff = {
  init: function init() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  bindUIActions: function bindUIActions() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  applyConditionalRequired: function applyConditionalRequired() {
    $(".require-if-active").each(function () {
      var el = $(this);

      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
  }
};