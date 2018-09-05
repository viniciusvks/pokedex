<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>HP:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data.hp.base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data.hp.base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>Speed:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data.speed.base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data.speed.base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>Attack:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data.attack.base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data.attack.base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>Defense:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data.defense.base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data.defense.base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>Special Attack:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data['special-attack'].base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data['special-attack'].base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-4 pr-0"><small>Special Defense:</small></div>
                <div class="col pl-1">
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: statProgress(data['special-defense'].base_stat)}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="255">
                            {{ data['special-defense'].base_stat }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stats",
        props: ['data'],

        methods: {
            statProgress(value) {
                return `${(value/255)*100}%`;
            }
        }
    }
</script>

<style scoped>

</style>
