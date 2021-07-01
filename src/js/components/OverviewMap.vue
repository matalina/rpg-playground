<template>
    <div id="map"></div>
</template>

<script>
    import kaboom from "kaboom";
    import overviewMap from '../scene/overviewMap';
    import newBaseScene from '../scene/newBaseScene';

    const k = kaboom({
        scale: 1,
        clearColor: [0, 0, 0, 1],
        width: 9 * 50 * 9 * 50,
        height: 9 * 50 * 9 * 50,
        root: document.getElementById("map"),
    });

    export default {
        name: 'map',
        data() {
            return {
                kaboom: k,
            };
        },
        methods: {
            overviewMap,
            newBaseScene,
        },
        mounted() {
            /*this.kaboom.loadSprite('ground', "images/ground_tile.png", {
                sliceX: 4,
                sliceY: 3,
            });

            this.kaboom.scene("main", this.overviewMap);
            this.kaboom.scene("next", this.newBaseScene);
            this.kaboom.start("main");*/
        }
    }
</script>