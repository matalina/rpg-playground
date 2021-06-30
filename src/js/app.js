import kaboom from "kaboom";
import asepritePlugin from "kaboom/plugins/aseprite";

const k = kaboom({
    scale: 1,
    plugins: [asepritePlugin],
    clearColor: [0, 0, 0, 1],
    fullscreen: true,
});

k.scene("main", () => {

    k.add([
        k.text("ohhimark", 32),
        k.pos(100, 100),
    ]);

});

k.start("main");
