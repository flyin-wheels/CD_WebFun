function pokePNG(){
    var pokeA = ''
for(var i=1; i <= 151;i++){
    var pokeRaw = 'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';
    pokeA = '<img src="http://' + pokeRaw;
    pokeB = pokeA + i + '.png"';
    pokeC = '<div>' + pokeB + '</div>';
    }
}