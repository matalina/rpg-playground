import overview from '../maps/000-overview';
import { TILE_SIZE, TILE_COUNT } from '../constants';

export default function overviewMap() {
    this.kaboom.addLevel(
        overview, {
            width: TILE_SIZE,
            height: TILE_SIZE,
            'B': [
                this.kaboom.sprite('ground', { frame: 0}),
                'bubble',
                this.kaboom.scale(.25)
            ],
            'M': [
                this.kaboom.sprite('ground', { frame: 1 }),
                'mountain',
                this.kaboom.scale(.25)
            ],
            'm': [
                this.kaboom.sprite('ground', { frame: 1 }),
                'mountain',
                'border',
                this.kaboom.scale(.25)
            ],
            'G': [
                this.kaboom.sprite('ground', { frame: 5 }),
                'grasslands',
                this.kaboom.scale(.25)
            ],
            'g': [
                this.kaboom.sprite('ground', { frame: 5 }),
                'grasslands',
                'border',
                this.kaboom.scale(.25)
            ],
            'H': [
                this.kaboom.sprite('ground', { frame: 4 }),
                'hilltop',
                this.kaboom.scale(.25)
            ],
            'h': [
                this.kaboom.sprite('ground', { frame: 4 }),
                'hilltop',
                'border',
                this.kaboom.scale(.25)
            ],
            'D': [
                this.kaboom.sprite('ground', { frame: 3 }),
                'deadlands',
                this.kaboom.scale(.25)
            ],
            'O': [
                this.kaboom.sprite('ground', { frame: 2 }), // oasis
                'oasis',
                this.kaboom.scale(.25)
            ],
            'o': [
                this.kaboom.sprite('ground', { frame: 2 }), // oasis
                'oasis',
                'border',
                this.kaboom.scale(.25)
            ],
        
        }
    );

    let loc = this.kaboom.add([
        this.kaboom.pos(TILE_SIZE * TILE_COUNT / 2, (TILE_SIZE * TILE_COUNT) - (TILE_SIZE / 2) + 1),
        this.kaboom.origin('center'),
        this.kaboom.rect(10, 10),
        this.kaboom.color(1, 0, 0)
    ]);

    this.kaboom.add([
        this.kaboom.pos(this.kaboom.width() / 2, this.kaboom.height() /2),
        this.kaboom.text("rpg playground", 32),
        this.kaboom.origin('center'),
    ]);

    const SPEED = TILE_SIZE * TILE_SIZE + TILE_SIZE * 10;

    this.kaboom.keyPress('n', () => {
        loc.move({ x: 0, y: -1 * SPEED });
    
        if (loc.pos.y <= 0) {
            loc.move({ x: 0, y: SPEED });
            this.kaboom.camShake(10);
        };
    })

    this.kaboom.keyPress('up', () => {
        loc.move({ x: 0, y: -1 * SPEED });
    
        if (loc.pos.y <= 0) {
            loc.move({ x: 0, y: SPEED });
            this.kaboom.camShake(10);
        };
    })

    this.kaboom.keyPress('s', () => {
        loc.move({ x: 0, y: SPEED });

        if (loc.pos.y >= TILE_SIZE * TILE_COUNT) {
            loc.move({ x: 0, y: -1 * SPEED });
            this.kaboom.camShake(10);
        };
    })

    this.kaboom.keyPress('down', () => {
        loc.move({ x: 0, y: SPEED });

        if (loc.pos.y >= TILE_SIZE * TILE_COUNT) {
            loc.move({ x: 0, y: -1 * SPEED });
            this.kaboom.camShake(10);
        };
    })

    this.kaboom.keyPress('w', () => {
        loc.move({ y: 0, x: -1 * SPEED });

        if (loc.pos.x < 0 ) {
            loc.move({ y: 0, x: SPEED });
            this.kaboom.camShake(10);
        };

        
    })

    this.kaboom.keyPress('left', () => {
        loc.move({ y: 0, x: -1 * SPEED });

        if (loc.pos.x < 0 ) {
            loc.move({ y: 0, x: SPEED });
            this.kaboom.camShake(10);
        };

        
    })

    this.kaboom.keyPress('e', () => {
        loc.move({ y: 0, x: SPEED });

        if (loc.pos.x >= TILE_SIZE * TILE_COUNT) {
            loc.move({ y: 0, x: -1 * SPEED });
            this.kaboom.camShake(10);
        };    
    })

    this.kaboom.keyPress('right', () => {
        loc.move({ y: 0, x: SPEED });

        if (loc.pos.x >= TILE_SIZE * TILE_COUNT) {
            loc.move({ y: 0, x: -1 * SPEED });
            this.kaboom.camShake(10);
        };    
    })

    this.kaboom.keyPress('space', () => {
        let level = {
            x: Math.round(loc.pos.x / TILE_SIZE),
            y: Math.round(loc.pos.y / TILE_SIZE),
        }
        this.kaboom.go('next');
    });

}