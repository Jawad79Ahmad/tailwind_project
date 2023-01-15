// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import 'flowbite';

import jquery from 'jquery'

window.jQuery = jquery
window.$ = jquery


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

import './custom_js/themeToggler'