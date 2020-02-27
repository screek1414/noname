<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Add Component</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses" class="btn btn-primary">Все курсы</router-link>
                        <router-link v-show="is_admin === true" to="/courses/add" class="btn btn-primary disabled">Добавить курс</router-link>
                    </div>
                    <div class="col-10 justify-content-center m-auto">
                        <div class="row">
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.name }"
                                   v-model="model.name"
                                   type="text"
                                   placeholder="Название">
                            <div v-if="errors.name"
                                 class="invalid-feedback"
                            >{{errors.name[0]}}</div>
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.author }"
                                   v-model="model.author"
                                   type="text"
                                   placeholder="Автор">
                            <div v-if="errors.author"
                                 class="invalid-feedback"
                            >{{errors.author[0]}}</div>
                            <textarea class="textarea form-control m-2"
                                      :class="{ 'is-invalid': errors.description }"
                                      v-model="model.description"
                                      rows="4"
                                      placeholder="Описание"
                            ></textarea>
                            <div v-if="errors.description"
                                 class="invalid-feedback"
                            >{{errors.description[0]}}</div>
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.link }"
                                   v-model="model.link"
                                   type="text"
                                   placeholder="Ссылка"
                            >
                            <div v-if="errors.link"
                                 class="invalid-feedback"
                            >{{errors.link[0]}}</div>
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.img }"
                                   v-model="model.img"
                                   type="text"
                                   placeholder="Картинка(ссылка)"
                            >
                            <div v-if="errors.img"
                                 class="invalid-feedback"
                            >{{errors.img[0]}}</div>
                        </div>
                        <div class="row justify-content-end p-2">
                            <button
                                class="btn btn-dark"
                                @click="save()"
                            >Добавить курс</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                errors: {},
                model: {
                    name: null,
                    author: null,
                    description: null,
                    link: null,
                    img: null
                },
                is_admin: false
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            save() {
                window.axios.post(window.location.origin + '/courses/store', this.model)
                    .then((response) => {
                        this.$router.push({ path: '/courses' });
                    }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            },
            init() {
              window.axios.post(window.location.origin + '/courses/create')
                .then((response) => {
                    if (response.data.is_admin === false) {
                        this.$router.push({path: '/courses'})
                    } else {
                        this.is_admin = response.data.is_admin;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none;
    }
    .invalid-feedback {
        padding-left: 20px;
        font-size: 16px;
    }
</style>
