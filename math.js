console.log()
let red , blue, green
function genrateRgb(){
    red=Math.floor(Math.random() * 256 )
    blue=Math.floor(Math.random() * 256 )
    green=Math.floor(Math.random() * 256 )

    return `rgb(${red}, ${green}, 255)`
}