<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Add Component</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses" class="btn btn-primary">Все курсы</router-link>
                        <router-link v-show="is_admin === true" to="/courses/add" class="btn btn-primary disabled">
                            Добавить курс
                        </router-link>
                    </div>
                    <div class="col-10 justify-content-center m-auto">
                        <div class="form-row">
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.name }"
                                   v-model="course.name"
                                   label="name"
                                   placeholder="Название"
                            >
                            </input>
                            <div v-if="errors.name"
                                 class="invalid-feedback"
                            >{{errors.name[0]}}</div>
                        </div>
                        <div class="form-row">
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.author }"
                                   v-model="course.author"
                                   name="author"
                                   placeholder="Автор"
                            >
                            <div v-if="errors.author"
                                 class="invalid-feedback"
                            >{{errors.author[0]}}</div>
                        </div>
                        <div class="form-row">
                        <textarea class="textarea form-control m-2"
                                  :class="{ 'is-invalid': errors.description }"
                                  v-model="course.description"
                                  label="description"
                                  rows="4"
                                  placeholder="Описание">
                        </textarea>
                            <div v-if="errors.description"
                                 class="invalid-feedback"
                            >{{errors.description[0]}}</div>
                        </div>
                        <div class="form-row">
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.link }"
                                   v-model="course.link"
                                   label="link"
                                   placeholder="Ссылка"
                            >
                            <div v-if="errors.link"
                                 class="invalid-feedback"
                            >{{errors.link[0]}}</div>
                        </div>
                        <div class="form-row">
                            <input class="form-control m-2"
                                   :class="{ 'is-invalid': errors.img }"
                                   v-model="course.img"
                                   label="img"
                                   placeholder="Картинка(ссылка)"
                            >
                            <div v-if="errors.img"
                                 class="invalid-feedback"
                            >{{errors.img[0]}}</div>
                        </div>
                    </div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <button class="btn btn-primary" @click="updateCourse">
                            Save
                        </button>
                        <button class="btn btn-dark"
                                @click="deleteCourse">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                errors: {},
                course: [],
                is_admin: false,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post(window.location.origin + '/courses/edit', {id: this.$route.params.id})
                    .then((response) => {
                        if (response.data.is_admin !== false) {
                            this.course = {
                                ...response.data.course,
                            };
                        } else {
                            this.$router.push({path: '/courses'})
                        }
                    });
            },
            updateCourse() {
                window.axios.post(window.location.origin + '/courses/update', this.course)
                    .then((response) => {
                        this.$router.push({path: '/courses'});
                    }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            },
            deleteCourse() {
                window.axios.post(window.location.origin + '/courses/destroy', {id: this.$route.params.id})
                    .then((response) => {
                        this.$router.push({path: '/courses'});
                    });
            }
        }
    }
</script>

<style scoped>
    .invalid-feedback {
        padding-left: 20px;
        font-size: 16px;
    }
</style>
