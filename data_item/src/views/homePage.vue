<script setup>
import ItemPage from '@/components/itemPage.vue'
import ChartOne from '@/components/chartOne.vue'
import ChartTwo from '@/components/chartTwo.vue'
import ChartThree from '@/components/chartThree.vue'
import ChartFour from '@/components/chartFour.vue'
import MapData from '@/components/mapPage.vue'

</script>
<template>
<div>
    <header>
        <h1>数据可视化</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
    <!-- 左容器 -->
    <section class="itemLeft">
        <ItemPage>
            <ChartOne></ChartOne>
        </ItemPage>
        <ItemPage>
            <ChartTwo></ChartTwo>
        </ItemPage>
    </section>
    <!-- 中容器 -->
    <section class="itemCenter">
        <MapData></MapData>
    </section>
    <!-- 右容器 -->
    <section class="itemRight">
        <ItemPage>
            <ChartThree></ChartThree>
        </ItemPage>
        <ItemPage>
            <ChartFour></ChartFour>
        </ItemPage>
    </section>
    </section>
</div>
</template>
<style>
header{
    height: 1rem;
    width: 100%;
    background-color: rgba(52, 73, 206, 0.1);
    /* 标题的文字样式 */
}
h1,span {
        font-size: 0.375rem;
        color: white;
        text-align: center;
        line-height: 1rem;
    }
.container{
    min-width: 1200px;
    max-width: 2048px;
    margin: 0 auto;
    padding: .125rem .125rem 0;
    /* background-color: black; */
    display: flex;
    /* 设置左右容器在页面占比 */
}
.itemLeft,.itemRight{
    flex: 3;
}
.itemCenter{
    flex: 5;
    height: 10.5rpx;
    border: 1px solid rgb(52, 73, 206);
    padding: .125rem;
    margin: 20px
}
</style>
