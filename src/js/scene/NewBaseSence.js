import k from '../kaboom';
//import overview from '../maps/000-overview';
import { TILE_SIZE, TILE_COUNT } from '../constants';

export default function NewBaseSence() {
    k.add([
        k.pos(k.width() / 2, k.height() /2),
        k.text("Next Scene", 32),
        k.origin('center'),
    ]);
}