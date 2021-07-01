<template>
    <div id="root">
        <canvas id="map"></canvas>
    </div>
</template>

<script>
    import kaboom from "kaboom";
    import overviewMap from '../scene/overviewMap';
    import newBaseScene from '../scene/newBaseScene';
import { TILE_COUNT, TILE_SIZE } from '../constants';

    export default {
        name: 'overview-map',
        data() {
            return {
                kaboom: null,
            };
        },
        methods: {
            overviewMap,
            newBaseScene,
        },
        mounted() {
            const canvas = document.getElementById("map");
            const root = document.getElementById("root");

            this.kaboom = kaboom({
                scale: 1,
                clearColor: [0, 0, 0, 1],
                width: TILE_SIZE * TILE_COUNT,
                height: TILE_SIZE * TILE_COUNT,
                canvas,
                root,
            });

            this.kaboom.loadSprite('ground', "images/ground_tile.png", {
                sliceX: 4,
                sliceY: 3,
            });

            this.kaboom.scene("main", this.overviewMap);
            this.kaboom.scene("next", this.newBaseScene);
            this.kaboom.start("main");
        }
    }
</script>