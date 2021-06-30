import k from '../kaboom';

export default function Main() {
    k.add([
        k.pos(k.width() / 2, k.height() /2),
        k.text("rpg playground", 32),
        k.origin('center'),
    ]);
}