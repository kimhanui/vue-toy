<template>
  <div class="container is-max-desktop" style="width: 700px">
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">제목</label>
          <input class="input" v-model="title" placeholder="제목" />
        </div>
        <div class="field">
          <label class="label">내용</label>
          <textarea
            class="textarea"
            v-model="content"
            rows="20"
            placeholder="내용..."
          ></textarea>
        </div>
        <div class="field">
          <label class="label">이미지 업로드 (선택)</label>
          <div>
            <img v-for="(data, index) in previewImgs" :key="index"
              style="height:30px; margin-right: 3px;"
              :src="data"/>
          </div>
          <div class="file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name="resume"
                ref="fileInput"
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
        <!-- TODO: to be worked on `sprint v0.2` -->
        <!-- <div class="field">
          <label class="label">책 지정 (선택)</label>
          <input class="input" placeholder="ex - 이방인" />
        </div> -->
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success" @click="insertCard()">
              생성
            </button>
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
      fileInputs: [],   // 현재는 1개만 업로드
      previewImgs: [],  // 현재는 1개만 업로드
    };
  },
  mounted() {},
  methods: {
    handleFile() {
      if(this.$refs.fileInput.files == null){
        return 
      }
      if(this.fileInputs.length == 1){
        this.openSystemModal("파일은 1개만 등록할 수 있습니다.")
        return
      }
      this.fileInputs = this.$refs.fileInput.files;
      
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.fileInputs[0]);
      fileReader.onload = () => {
        this.previewImgs.push(fileReader.result); // 정보: fileReader.result = e1.target.result
      };
      this.fileName = this.fileInputs[0].name;
    },
    insertCard() {
      if (this.isFormValid() === false) {
        return;
      }

      const data = {
        title : this.title,
        content : this.content,
        files : this.fileInputs
      }
      this.$axios.post('http://localhost:9090/card/v1.0', data, { headers: {
        'Content-type': 'multipart/form-data',
      }})
      .then(res => {
        this.openSystemModal('게시글 작성 성공', '/')
      })
      .catch(err =>{
        this.openSystemModal('게시글 생성 중 오류가 발생하였습니다.')
      })
    },
    isFormValid() {
      if (this.title === null || this.title === "") {
        // alert
        this.openDangerMsg("제목을 채워주세요");
        return false;
      }
      if (this.content === null || this.content === "") {
        this.openDangerMsg("내용을 채워주세요");
        return false;
      }
      return true;
    },
  },
};
</script>
<style>
.notification {
  margin: 50px;
}
</style>
