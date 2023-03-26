<!-- 页面区域 -->
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <!-- <h1>{{ categoryList }}</h1> -->
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <!-- <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav> -->
      <!-- 三级联动 -->
      <div class="sort">
        <div class="all-sort-list2" @click="goSearch">
          <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex == index}"   >
            <h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex" >
              <!-- <a href="">{{ c1.categoryName }}</a> -->
               <!-- 声明式导航<router-link>  -->
              <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              <a :data-categoryId1="c1.categoryId" :data-categoryName="c1.categoryName">{{ c1.categoryName }}</a>

            </h3>

            <!--二级 三级分类-->
            <div class="item-list clearfix">
              <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <!-- <a href="">{{ c2.categoryName }}</a> -->
                       <!-- 声明式导航<router-link>  -->
                    <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    <a :data-categoryId2="c2.categoryId" :data-categoryName="c2.categoryName">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId" >
                      <!-- <a href="">{{ c3.categoryName }}</a> -->
                       <!-- 声明式导航<router-link>  -->
                      <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      <a :data-categoryId3="c3.categoryId" :data-categoryName="c3.categoryName">{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- <div class="item">
            <h3>
              <a href="">家用电器</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书1</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">手机、数码、充值</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">充值</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="recharge.html">充值</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">电子书2</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">电脑、办公</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书3</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>教育</dt>
                  <dd>
                    <em>
                      <a href="">教材教辅</a>
                    </em>
                    <em>
                      <a href="">考试</a>
                    </em>
                    <em>
                      <a href="">外语学习</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>其它</dt>
                  <dd>
                    <em>
                      <a href="">英文原版书</a>
                    </em>
                    <em>
                      <a href="">港台图书</a>
                    </em>
                    <em>
                      <a href="">工具书</a>
                    </em>
                    <em>
                      <a href="">套装书</a>
                    </em>
                    <em>
                      <a href="">杂志/期刊</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">家居、家具、家装、厨具</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书4</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">服饰内衣</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书5</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">个护化妆</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书6</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>教育</dt>
                  <dd>
                    <em>
                      <a href="">教材教辅</a>
                    </em>
                    <em>
                      <a href="">考试</a>
                    </em>
                    <em>
                      <a href="">外语学习</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>其它</dt>
                  <dd>
                    <em>
                      <a href="">英文原版书</a>
                    </em>
                    <em>
                      <a href="">港台图书</a>
                    </em>
                    <em>
                      <a href="">工具书</a>
                    </em>
                    <em>
                      <a href="">套装书</a>
                    </em>
                    <em>
                      <a href="">杂志/期刊</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">运动健康</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书7</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">汽车用品</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书8</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">彩票、旅行</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">理财、众筹</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">母婴、玩具</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">箱包</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">运动户外</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">箱包</a>
            </h3>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 组件区域 -->
<script>
import { mapState } from "vuex";

export default {
  name: "TypeNav",
  data(){
    return {
      // 存储用户鼠标移动到哪个一级分类
      currentIndex: -1
    }
  },
  // 组件挂载完毕，可以向服务器发送请求
  mounted() {
    // console.log("组件挂载完毕，可以向服务器发送请求!");
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      // categoryList: (state) => {
      //   // console.log(state);
      //   return state.home.categoryList
      // },
      // 简写形式
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods:{
    // 鼠标进入修改响应式数据 currentIndex属性
    changeIndex(index){
      // Index 鼠标移到一级菜单的元素索引值
      this.currentIndex = index
    },
    // 一级菜单鼠标移除事件的回调
    leaveIndex(){
      this.currentIndex = -1
    },
    goSearch(event){
        // 最好的解决方案：编程式导航+事件委派
        // 存在一些问题:事件委派，是把全部子节点的【h3,dt,dl,em】的事件节点委派给父亲节节点
        // 点击a标签的时候，才会进行路由的跳转【怎么能确定点击的一定a标签】
        //存在另外一个问题：即使你能确定点击的是a标签，如何区分一级、二级、三级分类的标签

      // 第一个问题：把子节点当做的a标签，自定义属性data-categoryName，其余的子节点是没有的
      let element = event.target;
      // 获取到当前出发这个时间的节点【h3,dt,dl,em】,需要带有data-categoryname的节点【一定是a标签】
      // 节点有一个数下dataset属性，可以获取节点的自定义属性与属性值
      // let { categoryname,categoryId1,categoryId2,categoryId3} = element.dataset;
      let { categoryname,categoryid1,categoryid2,categoryid3} = element.dataset;
  
      if (categoryname) {
        // 整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryname: categoryname };
        //如何确定 一级分类、二级分类、三级分类
        if (categoryid1) {
          query.categoryid1 = categoryid1;
        } else if (categoryid2) {
          query.categoryid2 = categoryid2;
        } else if (categoryid3) {
          query.categoryid3 = categoryid3;
        } else {
          console.log("其他");
        }

        // 整理完参数
        location.query = query;
        // console.log(location);
        // 路由跳转
        this.$router.push(location);
      }
    }
  }
};
</script>

<!-- 样式区域 -->
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .cur {
      background-color: skyblue;
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>