<template>
  <div class="container is-max-desktop" style="width: 700px">
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">제목</label>
          <input
            class="input"
            v-model="title"
            placeholder="제목"
          />
        </div>
        <div class="field">
          <label class="label">내용</label>
          <textarea class="textarea" v-model="content" rows="20" placeholder="내용..."></textarea>
        </div>
        <div class="field">
          <label class="label">이미지 업로드</label>
          <div class="file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                @change="handleFile"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label"> 파일 선택 </span>
              </span>
              <span class="file-name">
                {{ fileName }}
              </span>
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success" @click="insertCard()">생성</button>
          </div>
          <div class="control">
            <button class="button" onclick="location.href='/'">취소</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddCard",
  data() {
    return {
      title: null,
      content: null,
      fileName: "파일 없음 ...",
    };
  },
  mounted(){
  },
  methods: {
    handleFile(e) {
      this.fileName = e.target.files[0].name;
    },
    insertCard() {
      if(this.isFormValid() === false){
        return
      }

      /* api call */

      window.location.href = '/'
    },
    isFormValid(){
      if(this.title === null || this.title === ''){
        // alert
        this.openDangerMsg('제목을 채워주세요')
        return false
      }
      if(this.content === null || this.content === ''){
        this.openDangerMsg('내용을 채워주세요')
        return false
      }
      return true
    }
  },
};
</script>
<style>
.notification{
  margin: 50px;
}
</style>