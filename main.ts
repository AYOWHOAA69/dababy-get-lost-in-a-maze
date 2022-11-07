controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dababy.setImage(img`
        . . . . 8 8 5 5 8 8 . . . . . . 
        . . . . 8 8 5 5 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . f 8 8 8 8 f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 5 f f 5 . . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . f . . f f . . f . . . . . 
        . . f . . . f f . . . f . . . . 
        . . f . . . f f . . . f . . . . 
        . . 1 . . . f f . . . 1 . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . 1 1 1 . . 1 1 1 . . . . . 
        `)
    direction = "UP"
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 2 1 3 2 . . . . . . 
        . . . . . . 2 1 3 2 . . . . . . 
        . . . . . 2 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 3 2 . . . . . 
        . . . . . 3 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, dababy, 0, 50)
    if ("DOWN" == direction) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 1 1 1 1 3 . . . . . 
            . . . . . 2 3 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 2 . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, dababy, 0, -50)
    } else if ("UP" == direction) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, dababy, -50, 0)
    } else if ("LEFT" == direction) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, dababy, 50, 0)
    } else if ("RIGHT" == direction) {
    	
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dababy.setImage(img`
        . . . . 8 8 5 5 8 8 . . . . . . 
        . . 8 8 8 8 5 5 8 8 . . . . . . 
        . . . . f 1 f f 1 f . . . . . . 
        . . . . f 1 f f 1 f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 5 f f 5 . . . . . . . 
        f f . . f 5 5 5 5 . . . . . . . 
        . f . f . . f f f f . . . . . . 
        . 1 f . . . f f . f f . . . . . 
        . . . . . . f f . . f f . . . . 
        . . . . . f f f . . . 1 . . . . 
        . . . . f f . f f . . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . 1 f . . . . 1 1 f . . . . . 
        . 1 1 1 . . . 1 1 1 1 . . . . . 
        `)
    direction = "LEFT"
})
function createlevel () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
    tiles.placeOnRandomTile(dababy, sprites.dungeon.stairWest)
    for (let index = 0; index < 4; index++) {
        zombie = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 3 3 . . . . . . . 
            . . . . . 7 7 1 3 . . . . . . . 
            . . . . . 1 7 7 7 . . . . . . . 
            . . . . . 7 f f 7 . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . 7 2 2 2 2 2 2 . . . . . . 
            . . . . . . 2 7 . 2 . . . . . . 
            . . . . . . 2 2 . 7 7 . . . . . 
            . . . . . . f 7 . . . . . . . . 
            . . . . . . f 2 . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . . . 1 . . 1 . . . . . 
            `, SpriteKind.Enemy)
        zombie.follow(dababy, 40)
        tiles.placeOnRandomTile(zombie, sprites.dungeon.floorLight0)
    }
}
function createlevel2 () {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    for (let index = 0; index < 4; index++) {
        zombie = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 3 3 . . . . . . . 
            . . . . . 7 7 1 3 . . . . . . . 
            . . . . . 1 7 7 7 . . . . . . . 
            . . . . . 7 f f 7 . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . 7 2 2 2 2 2 2 . . . . . . 
            . . . . . . 2 7 . 2 . . . . . . 
            . . . . . . 2 2 . 7 7 . . . . . 
            . . . . . . f 7 . . . . . . . . 
            . . . . . . f 2 . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . . . 1 . . 1 . . . . . 
            `, SpriteKind.Enemy)
        zombie.follow(dababy, 40)
        tiles.placeOnRandomTile(zombie, sprites.dungeon.floorLight0)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    clearlevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "RIGHT"
    dababy.setImage(img`
        . . . . 8 8 5 5 8 8 . . . . . . 
        . . 8 8 8 8 5 5 8 8 . . . . . . 
        . . . . f 1 f f 1 f . . . . . . 
        . . . . f 1 f f 1 f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 5 f f 5 . . . . f f f 
        . . . . f 5 5 5 5 . . . . f . . 
        . . . f . . f f f f f f f 1 . . 
        . . f . . . f f . . . . . . . . 
        . . f . . . f f . . . . . . . . 
        . . 1 . . f f f . . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . f f . . . f . . . . . . . 
        . . . f 1 . . . . f 1 . . . . . 
        . . . 1 1 1 . . . 1 1 1 . . . . 
        `)
})
function clearlevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dababy.setImage(img`
        . . . . 8 8 5 5 8 8 . . . . . . 
        . . 8 8 8 8 5 5 8 8 . . . . . . 
        . . . . f 1 f 1 f f . . . . . . 
        . . . . f 1 f 1 f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . 5 f f 5 . . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . f . . f f . . f . . . . . 
        . . f . . . f f . . f . . . . . 
        . . f . . . f f . . f . . . . . 
        . . f . . . f f . . f . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . 1 1 1 . . 1 1 1 . . . . . 
        `)
    direction = "DOWN"
})
let level = 0
let projectile: Sprite = null
let direction = ""
let zombie: Sprite = null
let dababy: Sprite = null
dababy = sprites.create(img`
    . . . . 8 8 5 5 8 8 . . . . . . 
    . . 8 8 8 8 5 5 8 8 . . . . . . 
    . . . . f 1 f f 1 f . . . . . . 
    . . . . f 1 f f 1 f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . 5 f f 5 . . . . . . . 
    . . . . f 5 5 5 5 . . . . . . . 
    . . . f . . f f f . . . . . . . 
    . . f . . . f f . f . . . . . . 
    . . f . . . f f . . f . . . . . 
    . . 1 . . . f f . . . f 1 f . . 
    . . . . . . f f . . . 1 1 f . . 
    . . . . . f f f f . . . . f . . 
    . . . . 1 1 . . 1 1 . . . . . . 
    . . . 1 1 1 . . 1 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(dababy)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(dababy)
info.startCountdown(200)
tiles.placeOnRandomTile(dababy, sprites.dungeon.stairWest)
for (let index = 0; index < 4; index++) {
    zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 3 3 . . . . . . . 
        . . . . . 7 7 1 3 . . . . . . . 
        . . . . . 1 7 7 7 . . . . . . . 
        . . . . . 7 f f 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . 7 2 2 2 2 2 2 . . . . . . 
        . . . . . . 2 7 . 2 . . . . . . 
        . . . . . . 2 2 . 7 7 . . . . . 
        . . . . . . f 7 . . . . . . . . 
        . . . . . . f 2 . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . 1 . . 1 . . . . . 
        `, SpriteKind.Enemy)
    zombie.follow(dababy, 40)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.floorLight0)
}
