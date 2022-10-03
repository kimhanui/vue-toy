<template>
  <div class="container is-max-desktop" style="width: 700px">
    <!-- <section class="section"> -->
    <div class="box">
      <div class="block">
        <span class="title is-2">내 정보</span>
        <b-button
          size="is-small"
          type="is-danger is-light"
          style="float: right; display: block"
          >수정</b-button
        >
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <article class="tile is-child is-4">
              <!-- 내 사진, 좋은 문구 넣어주기 -->
              <figure class="image" style="width: 90%">
                <img
                  class="is-rounded"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                />
              </figure>
            </article>

            <article class="tile is-child">
              <!-- <div class="block">
                <span class="subtitle">내 정보</span>
                <b-button
                  size="is-small"
                  type="is-danger is-light"
                  style="float: right; display: block"
                  >수정</b-button
                >
              </div> -->

              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Id / Pw</label>
                </div>
                <div class="field-body">
                  <div class="field" style="width: 100%">
                    <div class="control is-expanded">
                      <input
                        class="input is-small"
                        type="text"
                        value="alex123"
                        disabled="true"
                      />
                    </div>
                    <!-- TODO active condition -->
                    <p v-if="errMsgActive.id" class="help is-danger">
                      영문, 숫자만 입력해주세요
                    </p>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button class="button is-small">비밀번호 수정</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">닉네임</label>
                </div>
                <div class="field-body">
                  <div class="field" style="width: 100%">
                    <div class="control is-expanded">
                      <input
                        class="input is-small"
                        type="text"
                        value="알렉산드리아"
                      />
                    </div>
                    <!-- TODO active condition -->
                    <p v-if="errMsgActive.nickname" class="help is-danger">
                      영문, 숫자, 한글 8자리까지만 입력해주세요
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">주소</label>
                </div>
                <div class="field-body">
                  <div class="field" style="width: 100%">
                    <div class="control is-expanded">
                      <input
                        class="input is-small"
                        type="text"
                        value="서울 ..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">가입일</label>
                </div>
                <div class="field-body">
                  <div class="field" style="width: 100%">
                    <div class="control is-expanded">
                      <input
                        class="input is-small"
                        type="text"
                        value="2022-10-03T10:02:34"
                        disabled="disabled"
                      />
                    </div>
                    <!-- TODO active condition -->
                    <p v-if="errMsgActive.nickname" class="help is-danger">
                      영문, 숫자, 한글 8자리까지만 입력해주세요
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">선호 장르</label>
                </div>
                <div class="field-body">
                  <!-- TagInput - Autocomplete 사용하기 -->
                  <b-field>
                    <b-taginput style="width: 100%"
                      size="is-small"
                      v-model="tags"
                      :data="filteredTags"
                      autocomplete
                      field=""
                      placeholder="좋아하는 장르를 추가해보세요"
                      @typing="getFilteredTags"
                    >
                    </b-taginput>
                  </b-field>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <div class="tile is-vertical">
              <div class="is-child">좋아하는 책 구절</div>
              <article
                class="tile is-child notification"
                style="text-align: center"
              >
                <div>"겉모습이란 진실인 척 하는 것이다"<br />- 니체</div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">읽은 책</p>
                    <p class="title">108</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">추천한 책</p>
                    <p class="title">11</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">읽고 싶은 책</p>
                    <p class="title">3</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">읽어야하는 책</p>
                    <p class="title">1</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const tagData = require("../data/sample.json");
export default {
  name: "MyInfo",
  data() {
    return {
      errMsgActive: {
        id: false,
        pw: false,
        nickname: false,
      },
      filteredTags: tagData,
      isSelectOnly: false,
      tags: [],
    };
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = tagData.filter((option) => {
        return (
          option
            .toString()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.b-tooltips {
  .b-tooltip:not(:last-child) {
    margin-right: 0.5em;
  }
  .b-tooltip {
    margin-bottom: 0.5em;
  }
}
</style>
