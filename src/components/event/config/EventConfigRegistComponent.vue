<template>
  <v-form ref="entryForm" lazy-validation>
    <v-card>
      <v-toolbar color="primary">
        <span class="headline white--text">이벤트 관리 {{ formTitle }}</span>
      </v-toolbar>
      <v-card-text>
        <v-row align="center" class="justify-center pr-3" dense>
          <v-col cols="2" class="text-center"> <strong> 이벤트 코드 </strong></v-col>
          <v-col cols="3" class="text-left">
            <v-text-field
              v-model.number="formData.eventCode"
              :rules="rules.textField_eventCode"
              :disabled="editedIndex !== -1"
              maxlength="5"
              required
              dense
              @focusout="editedIndex === -1 ? getOverlap($event) : ''"
              @focus="overlapText = ''"
            ></v-text-field>
          </v-col>
          <v-col cols="7" :class="overlapText === '사용가능' ? 'blue--text' : 'red--text'">{{ overlapText }}</v-col>
          <v-col cols="2" class="text-center"> <strong> 이벤트 종류 </strong></v-col>
          <v-col cols="4" class="text-left">
            <v-select v-model="formData.type" dense hide-details :items="typeCategory" style="width: 240px" outlined></v-select>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 새창유무 </strong></v-col>
          <v-col cols="4" class="text-left">
            <v-select v-model="formData.newWindow" dense hide-details :items="newWindowCategory" style="width: 240px" outlined></v-select>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 이벤트 명 </strong></v-col>
          <v-col cols="10" class="text-left">
            <v-text-field v-model="formData.eventName" :rules="rules.textField_eventName" required dense></v-text-field>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 날짜 형식 </strong></v-col>
          <v-col cols="10" class="text-left">
            <v-radio-group v-model="formData.textType" class="mt-0" hide-details dense row>
              <v-radio label="시작날짜 + 종료날짜" value="START_END"></v-radio>
              <v-radio label="시작날짜(노출) + 텍스트" value="OUTCROP_START_TEXT_END"></v-radio>
              <v-radio label="시작날짜(미노출) + 텍스트" value="UN_OUTCROP_START_TEXT_END"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 이벤트 시작 날짜 </strong></v-col>
          <v-col cols="4" class="text-left">
            <v-menu ref="datePickerStart" v-model="datePickerStart.menu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="datePickerStart.date"
                  style="width: 240px"
                  dense
                  outlined
                  hide-details="auto"
                  label="년-월-일"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker ref="datePicker" v-model="datePickerStart.date" type="date" no-title scrollable :min="datePickerStart.min" locale="kr" @input="datePickerStart.menu = false">
              </v-date-picker>
            </v-menu>
          </v-col>
          <template v-if="formData.textType === 'START_END'">
            <v-col cols="2" class="text-center"> <strong> 이벤트 종료 날짜 </strong></v-col>
            <v-col cols="4" class="text-left">
              <v-menu ref="datePickerEnd" v-model="datePickerEnd.menu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="datePickerEnd.date"
                    style="width: 240px"
                    dense
                    outlined
                    hide-details="auto"
                    label="년-월-일"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker ref="datePicker" v-model="datePickerEnd.date" type="date" no-title scrollable :min="datePickerEnd.min" locale="kr" @input="datePickerEnd.menu = false"> </v-date-picker>
              </v-menu>
            </v-col>
          </template>
          <template v-else>
            <v-col cols="2" class="text-center"> <strong> 날짜 문구 </strong></v-col>
            <v-col cols="4" class="text-left">
              <v-text-field v-model="formData.textDate" :rules="rules.textField_textDate" required dense></v-text-field>
            </v-col>
          </template>
          <v-col cols="2" class="text-center"> <strong> 배너이미지 </strong></v-col>
          <v-col cols="10" class="text-left">
            <v-chip v-show="formData.imagePath" class="mr-1">{{ formData.imagePath }}</v-chip>
            <v-btn tag="label" class="evt_btn_cursr" color="primary">
              이미지 등록
              <input
                ref="imagePath"
                class="evt_form_input"
                :rules="rules.textField_imagePath"
                type="file"
                dense
                accept=".gif, .jpg, .png, .jpeg"
                prepend-icon="mdi-image"
                outlined
                required
                @change="onChangeImage($event)"
              />
            </v-btn>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 배너 제목 </strong></v-col>
          <v-col cols="10" class="text-left">
            <v-text-field v-model="formData.bannerTitle" :rules="rules.textField_bannerTitle" required dense></v-text-field>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 배너 URL </strong></v-col>
          <v-col cols="4" class="text-left">
            <v-text-field v-model="formData.bannerUrl" :rules="rules.textField_bannerUrl" required dense></v-text-field>
          </v-col>
          <v-col cols="2" class="text-center"> <strong> 모바일배너 URL </strong></v-col>
          <v-col cols="4" class="text-left">
            <v-text-field v-model="formData.mobileBannerUrl" dense></v-text-field>
          </v-col>

          <v-col cols="2" class="text-center">
            <strong> {{ editedIndex === -1 ? '노출 사이트' : '이벤트 상태' }} </strong>
          </v-col>
          <v-col cols="10" class="text-left">
            <v-radio-group v-show="editedIndex === -1" v-model="formData.visible" class="mt-0" hide-details dense row>
              <v-radio label="아이템베이" value="ITEMBAY_OUTCROP"></v-radio>
            </v-radio-group>

            <template v-if="editedIndex !== -1">
              <span class="red--text">[ {{ formData.visibleText }} ]</span>
              <v-radio-group v-model="formData.visible" class="mt-0" hide-details dense row>
                <v-radio label="아이템베이 노출대기" value="ITEMBAY_WAIT_OUTCROP"></v-radio>
              </v-radio-group>
            </template>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="py-2">
        <v-spacer></v-spacer>
        <v-btn color="error" outlined @click="closeForm">취소</v-btn>
        <v-btn color="primary" outlined @click="itemSubmit">{{ formTitle }}</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>

export default {
  mixins: [global],
  props: {
    selectItem: {
      type: Object,
      default: () => {
        return {}
      },
    },
    editedIndex: {
      type: Number,
      default: -1,
    },
    formData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    formDataInit: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      api: '/api/event/config',
      typeCategory: [
        { text: '일반이벤트', value: 'EVENT_NORMAL' },
        { text: '일반이벤트(no1미노출)', value: 'EVENT_NORMAL_NOT_NO1' },
        { text: '연중이벤트', value: 'EVENT_YEAR' },
        { text: '연중이벤트(no1미노출)', value: 'EVENT_YEAR_NOT_NO1' },
        { text: '상시이벤트', value: 'EVENT_ALWAYS' },
      ],
      newWindowCategory: [
        { text: 'Y', value: 'NEW_WINDOW' },
        { text: 'N', value: 'UN_NEW_WINDOW' },
      ],
      rules: {
        textField_eventCode: [(v) => !!v || '* 필수항목'],
        textField_eventName: [(v) => !!v || '* 필수항목'],
        textField_imagePath: [(v) => !!v || '* 필수항목'],
        textField_bannerTitle: [(v) => !!v || '* 필수항목'],
        textField_bannerUrl: [(v) => !!v || '* 필수항목'],
        textField_textDate: [(v) => !!v || '* 필수항목'],
      },
      datePickerStart: {
        date: this.$moment().format('YYYY-MM-DD'),
        min: '2000-01-01',
        menu: false,
        show: false,
      },
      datePickerEnd: {
        date: this.$moment().add(1, 'days').format('YYYY-MM-DD'),
        min: '2000-01-01',
        menu: false,
        show: false,
      },
      selectItemSync: this.selectItem,
      overlapText: '',
    }
  },
  computed: {
    formTitle() {
      return `${this.editedIndex === -1 ? '등록' : '수정'}`
    },
  },
  watch: {
    formData: {
      deep: true,
      immediate: true,
      handler() {
        this.datePickerStart.date = this.formData.startDate
        this.datePickerEnd.date = this.formData.endDate
      },
    },
    selectItem() {
      this.selectItemSync = this.selectItem
    },
  },
  methods: {
    async itemSubmit() {
      if (this.editedIndex === -1) {
        await this.itemRegister()
      } else {
        await this.itemModify()
      }
    },
    async itemRegister() {
      if (this.$refs.entryForm.validate()) {
        try {
          if (this.editedIndex === -1) {
            await this.$axios.post(`${this.api}`, {
              ...this.formData,
              startDate: this.datePickerStart.date,
              endDate: this.datePickerEnd.date,
              imagePathAndroid: this.formData.imagePath,
              imagePathIPhone: this.formData.imagePath,
            })
            alert('정상적으로 등록이 완료되었습니다.')
          } else {
            alert(`등록 중 오류가 발생했습니다. 비정상적인 데이터입니다. [editedIndex : ${this.editedIndex}]`)
          }
          this.$nuxt.$emit('getSearchEvent')
          this.closeForm()
        } catch (error) {}
      }
    },
    async itemModify() {
      if (this.$refs.entryForm.validate()) {
        try {
          if (this.editedIndex !== -1) {
            const { eventCode: seq } = this.selectItemSync
            await this.$axios.put(`${this.api}/${seq}`, {
              ...this.formData,
              startDate: this.datePickerStart.date,
              endDate: this.datePickerEnd.date,
              imagePathAndroid: this.formData.imagePath,
              imagePathIPhone: this.formData.imagePath,
            })
            alert('정상적으로 수정이 완료되었습니다.')
          } else {
            alert(`수정 중 오류가 발생했습니다. 비정상적인 데이터입니다. [editedIndex : ${this.editedIndex}]`)
          }
          this.$nuxt.$emit('getSearchEvent')
          this.closeForm()
        } catch (error) {}
      }
    },
    closeForm() {
      this.dialogForm = false
      this.$emit('dialogForm', this.dialogForm)
      if (this.$refs.entryForm) {
        this.$refs.entryForm.resetValidation()
        this.datePickerStart.date = this.$moment().format('YYYY-MM-DD')
        this.datePickerEnd.date = this.$moment().add(1, 'days').format('YYYY-MM-DD')
      }
      Object.assign(this.formData, this.formDataInit)
      this.overlapText = ''
      this.selectItemSync = {}
    },
    async onChangeImage(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        const formData = new FormData()

        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif') {
          formData.append('file', file)
          try {
            const { data } = await this.$axios.post(`${this.api}/image`, formData, { headers: { 'Content-type': 'multipart/form-data' } })

            this.formData.imagePath = data.fileFullName
          } catch (error) {}
        } else {
          alert('이미지 타입을 맞춰주세요. 파일 타입은 [jpg, jpeg, png, gif] 만 가능합니다.')
        }
      }
    },
    async getOverlap(e) {
      if (!isNaN(e.target.value) && e.target.value !== '') {
        const { data } = await this.$axios.get(`${this.api}/${e.target.value}/exists`)

        this.overlapText = data.eventCodeCheckValue
      } else {
        this.overlapText = '사용불가'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.evt_form_input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
::v-deep {
  .v-input--is-disabled {
    background-color: #fff;
  }
}
</style>
