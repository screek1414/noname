<template>
    <div v-if="comments">
        <ul id="co">
            <li v-for="(comment, index) in comments">
                <p>Коментарий #{{index+1}}</p>
                <p>{{comment.comment}}</p>
                <input v-if="is_admin"
                       type="button"
                       value="Удалить"
                       class="btn btn-danger"
                       @click="destroyComments(comment.id, index)"
                >
            </li>
        </ul>
    </div>
    <div v-else>
        <p>Нет коментариев</p>
    </div>
</template>

<script>
    export default {
        name: "CommentComponent",
        props: {
            comments: Array,
            is_admin: Boolean,
        },
        methods: {
            destroyComments(id, index) {
                window.axios.post(window.location.origin + '/comments/destroy', {id: id})
                    .then((response) => {
                        this.comments.splice(index, 1)
                    })
            }
        }
    }
</script>

<style scoped>
    #co li {
        list-style-type: none;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        border-bottom: 1px solid lightgray;
    }

    #co {
        padding: 0;
    }

</style>
