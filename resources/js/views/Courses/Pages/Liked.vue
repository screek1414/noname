<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 p-2">
                <div class="card bg-gradient-light h-100">
                    <div class="card-header">Курсы</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses"
                                     class="btn btn-primary ml-3 mr-3">Все курсы
                        </router-link>
                    </div>
                    <div class="row">
                        <div class="col-md-4 p-4 d-flex"
                             v-for="course in courses">
                            <div class="card text-center col-md-12 align-courses-stretch">
                                <img :src="course.img"
                                     class="card-img-top"
                                     style="height: 15rem; object-fit: cover; padding-top: 1px;"
                                     alt="">
                                <div class="card-block">
                                    <h5 class="card-title p-2 m-1">{{ course.name }} </h5>
                                    <p class="card-text p-2 m-1">{{ course.author }}</p>
                                    <div class="m-2 ">
                                        <router-link
                                            :to="'/courses/show/' + course.id"
                                            class="btn btn-primary mr-2"
                                            exact
                                            active-class="active"
                                        > Подробнее...
                                        </router-link>
                                        <a
                                            :href='course.link'
                                            class="btn btn-primary"
                                        >Сайт
                                        </a>
                                        <button
                                            class="btn ml-3 mr-3"
                                            :class="(course.liked) ? 'btn-danger' : 'btn-secondary'"
                                            @click="like(course.id)"
                                        >Лайк
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Liked",
        data() {
            return {
                sortKey: 'name',
                reverse: false,
                page: 1,
                courses: [],
                is_admin: false,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post('liked')
                    .then((response) => {
                        console.log(response);
                        this.courses = response.data.courses;
                    });
            },
            like(id) {
                window.axios.post('like', {course_id: id,})
                    .then(() => {
                        this.courses.filter(function (item) {
                            if (item.id == id) {
                                item.liked = !item.liked
                            }
                        })
                    });
            }
        },
    }
</script>

<style scoped>

</style>
