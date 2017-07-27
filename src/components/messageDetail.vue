<template>
    <div>{{detail}}</div>
</template>

<script>

    export default {
        data () {
            return {
                detail: ''
            }
        },
      methods: {
          showDetail (id) {
            setTimeout(() => {
              this.detail = `这是ID为${id}的新闻详情`
            } , 1000)
          }
      },
        created () {
            // 获取路径中的参数
            const id = this.$route.params.id
            this.showDetail(id)
        },
        watch: {
            '$route': function (to, from) {
                // 根据最新id显示详情
              this.showDetail(to.params.id)
            }
        }
    }
</script>

<style>

</style>
