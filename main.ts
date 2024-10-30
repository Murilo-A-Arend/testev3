scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventario.length <= 0) {
        game.splash("Inventário vazio")
    } else {
        game.splash(inventario)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jogador.setImage(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `)
    if (inventario) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    item = items._pickRandom()
    game.showLongText("Você encontrou" + item, DialogLayout.Bottom)
    inventario.push(item)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    jogador.setImage(img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
})
let item = ""
let inventario: string[] = []
let items: string[] = []
let jogador: Sprite = null
jogador = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(jogador)
info.setLife(1)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(11)
tiles.placeOnTile(jogador, tiles.getTileLocation(randint(7, 8), 1))
scene.cameraFollowSprite(jogador)
items = [" Espada Mágica", " Amuleto Sagrado", " Botas de Couro"]
inventario = []