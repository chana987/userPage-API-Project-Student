
class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (data) => {
                this.data["user"] = data.results[0]
                this.data["friends"] = data.results.splice(1)
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        })
        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest",
            success: (data) => {
                this.data["quoteInfo"] = data
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        })
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}/`,
            success: (data) => {
                this.data["pokemonInfo"] = data
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        })
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1",
            success: (data) => {
                this.data["meatText"] = data
            },
            error: function(xhr, text, error) {
                console.log(text)
            }
        })
    }
}
