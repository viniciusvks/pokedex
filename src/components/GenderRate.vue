<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-1 media p-0">
            <img :src="require('../assets/images/female.png')">
        </div>
        <div class="col">
            <div class="progress">
                <div class="progress-bar female-bar" role="progressbar" :style="{width: femaleRate+'%'}" :aria-valuenow=femaleRate aria-valuemin="0" aria-valuemax="255">{{femaleRate}}%</div>
                <div class="progress-bar male-bar" role="progressbar" :style="{width: maleRate+'%'}" :aria-valuenow=maleRate aria-valuemin="0" aria-valuemax="255">{{maleRate}}%</div>
            </div>
        </div>
        <div class="col-1 media p-0">
            <img :src="require('../assets/images/male.png')">
        </div>
        <div class="col-12 text-center"><small class="text-muted align-top">Gender Rate</small></div>
    </div>
</template>

<script>
	export default {

		name: "GenderRate",

        props: ['value'],

        data() {
			return {

				femaleRate: this.value < 0 ? 0 : this.value*12.5,
                maleRate:  this.value < 0 ? 0 : (100 - (this.value*12.5))

            }
        }

	}
</script>

<style scoped>

    .media img {
        width: 24px;
    }

    .female-bar {
        background-color: #f57f8e;
    }

    .male-bar {
        background-color: #84aaf0;
    }

</style>