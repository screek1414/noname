<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Add Component</div>
                    <div class="card-body d-inline-flex justify-content-between">
                        <router-link to="/courses"
                                     class="btn btn-primary">Все курсы
                        </router-link>
                        <router-link v-show="is_admin === true"
                                     :to="'/courses/edit/' + course.id"
                                     class="btn btn-primary">Редактировать курс
                        </router-link>
                    </div>
                    <div class="col-10 justify-content-center m-auto">
                       <div class="card align-items-center text-center border-0 m-2">
                           <div class="card-img-top ml-auto">
                               <img :src="course.img"
                                    class="p-3"
                                    style="height: 20rem; object-fit: cover; border-radius: 20px"
                               >
                           </div>
                           <div class="card-title font-weight-bold" style="font-size: 24px;">{{course.name}}</div>
                           <div class="card-body text-align-justify">
                               <p><span class="font-weight-bold">Автор:</span> {{course.author}}</p>
                               <p><span class="font-weight-bold">Описание:</span> {{course.description}}</p>
                           </div>
                           <div class="row align-items-center w-100 pb-2">
                               <div class="col-6">
                                   <a onclick="history.back(-1)" class="btn btn-outline-secondary"
                                   >Назад</a>
                               </div>
                               <div class="col-6">
                                   <a :href='course.link'
                                      class="btn btn-outline-secondary"
                                   >Сайт курса</a>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div class="col-8 justify-content-center m-auto">
                        <div class="input-group comment_textarea"
                             v-if="is_auth"
                        >
                            <div class="input-group-prepend">
                                <span class="input-group-text">Введите комментарий</span>
                            </div>
                            <textarea v-model="comment" class="form-control" aria-label="With textarea"></textarea>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary"
                                        type="button" id="button-addon2"
                                        @click="storeComment"
                                >Отпарвить</button>
                            </div>
                        </div>
                        <comment-component
                            :comments="this.course.comments"
                            :is_admin="this.is_admin"
                        ></comment-component>
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
                course: [],
                comment: '',
                is_admin: false,
                is_auth: false,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                window.axios.post(window.location.origin + '/courses/show', { id: this.$route.params.id })
                    .then((response) => {
                            this.is_admin = response.data.is_admin
                            this.is_auth = response.data.is_auth
                            this.course = response.data.course;

                    });
            },
            storeComment() {
                window.axios.post(window.location.origin + '/comments/store', { id: this.course.id, comment: this.comment})
                    .then((response) => {
                        console.log(response);
                        this.course.comments.push(response.data.comment)
                        this.comment = '';
                    })
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none;
        display: block;
        margin-left: auto;
        margin-right: auto;;
    }

    .comment_textarea {
        padding: 20px;
        margin-left: auto;
    }

</style>
