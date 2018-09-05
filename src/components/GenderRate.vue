<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-1 media p-0">
            <img :src="require('../assets/images/female.png')">
        </div>
        <div class="col pl-1 pr-1">
            <div class="progress">
                <div class="progress-bar female-bar" role="progressbar" :style="{width: femaleRate+'%'}" :aria-valuenow=femaleRate aria-valuemin="0" aria-valuemax="100">{{femaleRate}}%</div>
                <div class="progress-bar male-bar" role="progressbar" :style="{width: maleRate+'%'}" :aria-valuenow=maleRate aria-valuemin="0" aria-valuemax="100">{{maleRate}}%</div>
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

		    let femaleRate = this.value;

		    if(femaleRate < 0) {
                femaleRate = 0;
            } else {
		        femaleRate = femaleRate === 1 ? 13 : femaleRate * 12.5;
            }

			return {

				femaleRate: femaleRate,
                maleRate:  femaleRate > 0 ? (100 - femaleRate) : 0

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