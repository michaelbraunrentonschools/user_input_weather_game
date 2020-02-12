let weather_prediction = game.askForString("What is your weather prediction?")
game.splash("It is going to: " + weather_prediction)
let weather_dude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 e e e e 5 5 . . . . 
. . . 5 5 e e e e e e 5 5 . . . 
5 5 5 5 e e f e e f e e 5 5 5 5 
. . . . e e e e e e e e . . . . 
. . . . e e e e f e e e . . . . 
. . . . e e f e e e f e . . . . 
. . . . e e f f f f f e . . . . 
. . . . e e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (weather_effects == 0) {
    effects.confetti.startScreenEffect()
    weather_dude.say("CONFETTI!!!!")
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
} else {
	
}
