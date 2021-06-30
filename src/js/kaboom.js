import kaboom from "kaboom";
import asepritePlugin from "kaboom/plugins/aseprite";

export const k = kaboom({
    scale: 1,
    plugins: [asepritePlugin],
    clearColor: [0, 0, 0, 1],
    fullscreen: true,
});

export default k;