import k from '../kaboom';
import overview from '../maps/000-overview';
import { TILE_SIZE, TILE_COUNT } from '../constants';

k.loadSprite('ground', "images/ground_tile.png", {
    sliceX: 4,
    sliceY: 3,
});

export default function Main() {
    k.addLevel(
        overview, {
            width: TILE_SIZE,
            height: TILE_SIZE,
            'B': [
                k.sprite('ground', { frame: 0}),
                'bubble',
                k.scale(.25)
            ],
            'M': [
                k.sprite('ground', { frame: 1 }),
                'mountain',
                k.scale(.25)
            ],
            'm': [
                k.sprite('ground', { frame: 1 }),
                'mountain',
                'border',
                k.scale(.25)
            ],
            'G': [
                k.sprite('ground', { frame: 5 }),
                'grasslands',
                k.scale(.25)
            ],
            'g': [
                k.sprite('ground', { frame: 5 }),
                'grasslands',
                'border',
                k.scale(.25)
            ],
            'H': [
                k.sprite('ground', { frame: 4 }),
                'hilltop',
                k.scale(.25)
            ],
            'h': [
                k.sprite('ground', { frame: 4 }),
                'hilltop',
                'border',
                k.scale(.25)
            ],
            'D': [
                k.sprite('ground', { frame: 3 }),
                'deadlands',
                k.scale(.25)
            ],
            'O': [
                k.sprite('ground', { frame: 2 }), // oasis
                'oasis',
                k.scale(.25)
            ],
            'o': [
                k.sprite('ground', { frame: 2 }), // oasis
                'oasis',
                'border',
                k.scale(.25)
            ],
        
        }
    );

    let loc = k.add([
        k.pos(TILE_SIZE * TILE_COUNT / 2, (TILE_SIZE * TILE_COUNT) - (TILE_SIZE / 2) + 1),
        k.origin('center'),
        k.rect(10, 10),
        k.color(1, 0, 0)
    ]);

    k.add([
        k.pos(k.width() / 2, k.height() /2),
        k.text("rpg playground", 32),
        k.origin('center'),
    ]);

    const SPEED = TILE_SIZE * TILE_SIZE + TILE_SIZE * 10;

    k.keyPress('n', () => {
        loc.move({ x: 0, y: -1 * SPEED });
    
        if (loc.pos.y <= 0) {
            loc.move({ x: 0, y: SPEED });
            k.camShake(10);
        };
    })

    k.keyPress('up', () => {
        loc.move({ x: 0, y: -1 * SPEED });
    
        if (loc.pos.y <= 0) {
            loc.move({ x: 0, y: SPEED });
            k.camShake(10);
        };
    })

    k.keyPress('s', () => {
        loc.move({ x: 0, y: SPEED });

        if (loc.pos.y >= TILE_SIZE * TILE_COUNT) {
            loc.move({ x: 0, y: -1 * SPEED });
            k.camShake(10);
        };
    })

    k.keyPress('down', () => {
        loc.move({ x: 0, y: SPEED });

        if (loc.pos.y >= TILE_SIZE * TILE_COUNT) {
            loc.move({ x: 0, y: -1 * SPEED });
            k.camShake(10);
        };
    })

    k.keyPress('w', () => {
        loc.move({ y: 0, x: -1 * SPEED });

        if (loc.pos.x < 0 ) {
            loc.move({ y: 0, x: SPEED });
            k.camShake(10);
        };

        
    })

    k.keyPress('left', () => {
        loc.move({ y: 0, x: -1 * SPEED });

        if (loc.pos.x < 0 ) {
            loc.move({ y: 0, x: SPEED });
            k.camShake(10);
        };

        
    })

    k.keyPress('e', () => {
        loc.move({ y: 0, x: SPEED });

        if (loc.pos.x >= TILE_SIZE * TILE_COUNT) {
            loc.move({ y: 0, x: -1 * SPEED });
            k.camShake(10);
        };    
    })

    k.keyPress('right', () => {
        loc.move({ y: 0, x: SPEED });

        if (loc.pos.x >= TILE_SIZE * TILE_COUNT) {
            loc.move({ y: 0, x: -1 * SPEED });
            k.camShake(10);
        };    
    })

    k.keyPress('space', () => {
        let level = {
            x: Math.round(loc.pos.x / TILE_SIZE),
            y: Math.round(loc.pos.y / TILE_SIZE),
        }
        k.go('next');
    });

}