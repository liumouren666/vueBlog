<template>
  <div class="box">
    <div class="content-right">
      <div
        class="shadow-1 blog-item"
        v-for="(item, index) in articleList"
        :key="index"
      >
        <div class="blog-box">
          <div class="blog-title">
            <a href="">{{ item.title }}</a>
          </div>
          <div class="blog-text">
            <div class="item-span">
              <i class="iconfont icon-shijian"></i>{{ item.createdAt }}
            </div>
            <div class="item-span">
              <i class="iconfont icon-shuaxin"></i>{{ item.updatedAt }}
            </div>
            <div class="item-span">
              <i class="iconfont icon-wenjianjia"></i>{{ item.category }}
            </div>
          </div>
          <div class="blog-summary">
            {{ item.summary }}
            <a href="" class="read-more">阅读全文</a>
          </div>
          <!-- <div class="blog-bottom">
            <div class="blog-bottom-left">
              <div class="tag" v-for="obj,i in item.tagNames" :key="i">
                <i class="iconfont icon-biaoqian"></i><span>{{obj}}</span>
              </div>
            </div>
            <div class="blog-bottom-right">
              <div class="item-span"><i class="iconfont icon-chakan"></i><span>({{ item.viewCount }})</span></div>
              <div class="item-span"><i class="iconfont icon-liuyan"></i><span>({{ item.commentCount }})</span></div>
              <div class="item-span"><i class="iconfont icon-aixin"></i><span>({{ item.likeCount }})</span></div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getList, getArticleById } from "../../../mock/index.js";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return { articleList: [] };
  },
  created() {
    getList()
      .then((res) => {
        this.articleList = res.data;
        console.log(this.articleList);
      })
      .catch((err) => {
        alert(err);
      });
    getArticleById("1231231")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  background: #555;
  height: 100%;
  flex:1
}
.box-column {
  width: 300px;
  height: 100%;
  background: #fff;
  margin-left: 140px;
  margin-top: 20px;
  /* position: relative;
  top: 20px; */
}
.column-img {
  border-radius: 50%;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    margin-top: 30px;
    border-radius: 50%;
  }
}
.column-text {
  text-align: center;
  margin-top: 20px;
  p {
    font-size: 13px;
    color: #b3b3b3;
  }
  a {
    font-size: 14px;
    color: #333;
  }
}
.column-text a:hover {
  color: #b3b3b3;
}
.column-button {
  text-align: center;
  padding-top: 20px;
  button {
    background-color: #2462e6;
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
}
.wire {
  border-top: 3px solid #ccc;
  margin: 12px 24px 0;
}
.column-bottom {
  display: flex;
  padding: 10px 0;
}
.column-bottom-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  line-height: 1.6em;
}
.infoItem-count {
  font-size: 28px;
  height: 40px;
  line-height: 40px;
}
.infoItem-text {
  font-size: 12px;
  text-align: center;
  color: #ccc;
}
.column-bottom-text {
  text-align: center;
  p {
    line-height: 4px;
    font-size: 24px;
  }
}
.column-bottom-text p:nth-child(2) {
  color: #ccc;
  font-size: 13px;
}
.wires {
  border-top: 3px solid #ccc;
  margin: 0 24px 12px;
}
.content-right {
  margin-left: 20px;
  margin-top: 20px;
  // display: flex;
  // flex-flow: column;
  // flex-wrap: wrap;
  .shadow-1 {
    background: #fff;
    width: 865px;
    height: 244px;
    margin-bottom: 12px;
    .blog-box {
      background-color: #fff;
      padding: 20px 30px;
      margin-bottom: 20px;
      .blog-title {
        font-size: 24px;
        a {
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }
      }
      .blog-text {
        display: flex;
        line-height: 2rem;
        color: #999;
        font-size: 13px;
        .item-span {
          margin-right: 12px;
          i {
            margin-right: 5px;
          }
        }
      }
      .blog-summary {
        line-height: 1.6em;
        margin: 15px 0 25px;
        .read-more {
          margin: 0 10px;
          text-decoration: underline;
          font-size: 13px;
          color: #333;
        }
      }
      .blog-summary a:hover {
        color: #888888;
      }
      .blog-bottom {
        display: flex;
        line-height: 1.6em;
        color: #999;
        font-size: 13px;
        .blog-bottom-left {
          flex-grow: 1;
          display: flex;
          .tag {
            color: #ccc;
          }
        }
        .blog-bottom-right {
          flex-shrink: 0;
          display: flex;
          .item-span {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
