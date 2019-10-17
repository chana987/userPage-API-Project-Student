
class Renderer {
    _renderUsers(user) {
        const source = $("#template-user").html()
        const template = Handlebars.compile(source)
        const newHTML = template(user)
        $(".user-container").append(newHTML)
    }

    _renderFriends(friends) {
        const source = $("#template-friends").html()
        const template = Handlebars.compile(source)
        const newHTML = template({friends})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quoteInfo) {
        const source = $("#template-quote").html()
        const template = Handlebars.compile(source)
        const newHTML = template(quoteInfo)
        $(".quote-container").append(newHTML)
    }

    _renderPokemon(pokemonInfo) {
        const source = $("#template-pokemon").html()
        const template = Handlebars.compile(source)
        pokemonInfo.name = pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.substring(1)
        const newHTML = template(pokemonInfo)
        $(".content-container").append(newHTML)
    }

    _renderMeat(meatText) {
        const source = $("#template-meat").html()
        const template = Handlebars.compile(source)
        const newHTML = template({meatText})
        $(".content-container").append(newHTML)
    }

    render(data){
        $(".user-container").empty()
        $(".friends-container").empty()
        $(".quote-container").empty()
        $(".content-container").empty()

        this._renderUsers(data.user)
        this._renderFriends(data.friends)
        this._renderQuote(data.quoteInfo)
        this._renderPokemon(data.pokemonInfo)
        this._renderMeat(data.meatText)
    }
}

