const API = new APIManager
const renderer = new Renderer

API.loadData()
$("#load-data").on("click", function() {
})

$("#display-user").on("click", function() {
  renderer.render(API.data)
})