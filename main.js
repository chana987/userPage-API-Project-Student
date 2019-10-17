const API = new APIManager
const renderer = new Renderer
let savedUsers = {}

API.loadData()
$(".container").on("click", "#load-data", function() {
  API.loadData()
})

$(".container").on("click", "#display-user", function() {
  renderer.render(API.data)
})

$(".container").on("click", "#save-user", function() {
  let userToSave = $(".container").html()
  let name = $(".name").html().replace(" ", "")
  savedUsers[name] = userToSave
  localStorage["savedUsers"] = JSON.stringify(savedUsers)

  const source = $("#template-saved-users").html()
  const template = Handlebars.compile(source)
  const newHTML = template(API.data.user)
  $("#saved-users").append(newHTML)
})

$(".container").on("click", "#load-user", function() {
  savedUsers = JSON.parse(localStorage.savedUsers)
  let key = $("#saved-users").val()
  let user = savedUsers[key]
  console.log(user)
  
  $(".container").empty()
  $(".container").append(user)
})