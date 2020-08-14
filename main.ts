namespace StatusBarKind {
    export const Player = StatusBarKind.create()
}
scene.setBackgroundColor(9)
let Player_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Player_2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 8 8 8 8 8 8 e e f . . 
    . . f e 8 f f f f f f 8 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Enemy_1 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 2 5 2 5 2 6 f . . . . 
    . . . f 2 6 6 6 6 6 2 6 f . . . 
    . . . f 6 6 f f f f 6 2 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d 2 d d 2 d f 6 f . . 
    . . f 6 f d 2 d d 2 d f 6 f . . 
    . . f 2 2 f d d d d f 2 2 f . . 
    . f 2 2 f 2 f f f f 2 f 2 2 f . 
    . . f f d 2 5 2 2 5 2 d f f . . 
    . . f d d f 2 5 5 2 f d d f . . 
    . . . f f 2 2 2 2 2 2 f f . . . 
    . . . f 2 2 5 2 2 5 2 2 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
let Enemy_2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e f f f f f f e e f . . 
    . . f e f f f f f f f f e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f f f 4 4 f f f e f f . 
    . f e e e 2 f d d f 2 e e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f f f f f f f f f 4 . . 
    . . 4 4 f 4 f f f f 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
let Heath_bar = statusbars.create(20, 3, StatusBarKind.Health)
let statusbar = statusbars.create(20, 3, StatusBarKind.Health)
Heath_bar.attachToSprite(Player_1)
statusbar.attachToSprite(Player_2)
controller.player2.moveSprite(Player_2)
controller.moveSprite(Player_1)
