<script>
export default {

}
</script>
<template>
    <div class="item">
        <!-- 设置插槽 -->
        <slot></slot>
    </div>
</template>
<style lang="less">
.item{
    height: 5.125rem;
    border: 1px solid rgb(52, 73, 206);
    margin: .25rem;
    background-color:rgba(119, 109, 109, .2) ;
}
</style>
