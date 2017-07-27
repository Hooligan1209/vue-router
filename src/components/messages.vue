<template>
    <div>
      <ul>
        <li v-for="(message , index) in messages" :key="index">
          <router-link :to="`/home/messages/detail/${message.id}`">{{message.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                messages: [
                  {title: 'message01' , id: 1},
                  {title: 'message02' , id: 2},
                  {title: 'message03' , id: 3},
                  {title: 'message04' , id: 4}
                ]
            }
        }
    }
</script>

<style>

</style>
