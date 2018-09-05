<template>
    <div class="row justify-content-center align-items-center p-2">
        <template v-for="group in groups">
            <div class="col-12 egg-group rounded" :class=group.name>
                {{ group.name.toUpperCase() }}
            </div>
        </template>
    </div>
</template>

<script>
    export default {

        name: "EggGroup",
        props: ['groups']
    }
</script>

<style scoped>

    .egg-group {
        color: #ffffff;
        font-weight: bold;
        border: 2px solid;
        text-shadow: 3px 2px 2px rgba(150, 150, 150, 1);
    }

    .monster {
        background-color: #D05164;
        border-color: #973649;
    }

    .water1 {
        background-color:  #97B5FD;
        border-color: #6E85A7;
    }

    .water2 {
        background-color: #7098F7;
        border-color: #5370AA;
    }

    .water3 {
        background-color: #5876BE;
        border-color: #3F5779;
    }

    .bug {
        background-color:  #A9C228;
        border-color: #848D32;
    }

    .flying {
        background-color: #B29AF7;
        border-color: #7A6DA2;
    }

    .fairy {
        background-color: #FEC7EE;
        border-color: #C9A0BE;
    }

    .plant {
        background-color: #80D158;
        border-color: #609648
    }

    .ground {
        background-color: #7A604F;
        border-color: #574A39;
    }

    .humanshape {
        background-color: #D29582;
        border-color: #946B59;
    }

    .mineral {
        background-color: #8A8A8A;
        border-color: #6c6c6e;
    }

    .indeterminate {
        background-color: #d3d3d3;
        border-color: #acacac;
    }

    .ditto {
        background-color: #A463BD;
        border-color: #805D87;
    }

    .dragon {
        background-color: #7642FE;
        border-color: #503C83;
    }

    .no-eggs {
        background-color: #d3d3d3;
        border-color: #696969;
    }

</style>