<template>
        <div id="gridSystemModal" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" style="display: block; padding-right: 17px;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid bd-example-row">
                            <div class="row">
                                <div class="col-md-4">.col-md-4</div>
                                <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                                <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-9">
                                    Level 1: .col-sm-9
                                    <div class="row">
                                        <div class="col-8 col-sm-6">
                                            Level 2: .col-8 .col-sm-6
                                        </div>
                                        <div class="col-4 col-sm-6">
                                            Level 2: .col-4 .col-sm-6
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "PokemonDetail"
    }
</script>

<style scoped>

</style>