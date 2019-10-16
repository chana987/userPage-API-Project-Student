
class Renderer {
    constructor() {
        this.id = Math.floor(Math.random() * 807)
    }
    _genericRender(htmlTemp, data, targetHTML) {
        const source = $(htmlTemp).html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        console.log(data)
        $(targetHTML).append(newHTML)
    }
    render(data){
        //invokes all the individual _render methods
        this._genericRender("#template-user", data.user, ".user-container")
        this._genericRender("#template-friends", data[{friends}], ".friends-container")
        this._genericRender("#template-quote", data.quoteInfo, ".quote-container")
        this._genericRender("#template-pokemon", data.pokemonInfo[this.id], ".content-container")
        this._genericRender("#template-meat", `{${data.meatText}}`, ".content-container")
    }
}

// class Renderer {
//     _renderUsers(user) {
//         const source = $("#template-user").html()
//         const template = Handlebars.compile(source)
//         const newHTML = template(user)
//         $(".user-container").append(newHTML)
//     }

//     _renderFriends(friends) {
//         const source = $("#template-friends").html()
//         const template = Handlebars.compile(source)
//         const newHTML = template({friends})
//         $(".friends-container").append(newHTML)
//     }

//     _renderQuote(quoteInfo) {
//         const source = $("#template-quote").html()
//         const template = Handlebars.compile(source)
//         const newHTML = template(quoteInfo)
//         $(".quote-container").append(newHTML)
//     }

//     _renderPokemon(pokemonInfo) {
//         const source = $("#template-pokemon").html()
//         const template = Handlebars.compile(source)
//         const newHTML = template(pokemonInfo)
//         $(".content-container").append(newHTML)
//     }

//     _renderMeat(meatText) {
//         const source = $("#template-meat").html()
//         const template = Handlebars.compile(source)
//         const newHTML = template(meatText)
//         $(".content-container").append(newHTML)
//     }

//     render(data){
//         console.log(data)
//         //invokes all the individual _render methods
//         this._renderUsers(data)
//         this._renderFriends({data})
//         this._renderQuote(data)
//         this._renderPokemon(data)
//         this._renderMeat(data)
//     }
// }

