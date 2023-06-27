<template>
  <v-card-text>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12">
          <div class="d-flex align-center mb-3">
            <h4 class="text-h5 font-weight-bold grey--text text--darken-4">이벤트 상세보기</h4>
          </div>
          <v-card>
            <table class="table_basic">
              <tr>
                <th>코드번호</th>
                <td>{{ list.eventCode }}</td>
                <th>이벤트명</th>
                <td>{{ list.eventName }}</td>
              </tr>
              <tr>
                <th>이벤트 종류</th>
                <td>{{ list.typeText }}</td>
                <th>날짜 형식</th>
                <td>{{ list.textTypeText }}</td>
              </tr>
              <tr>
                <th>시작 날짜</th>
                <td>{{ list.startDate }}</td>
                <th>종료 날짜</th>
                <td>{{ list.endDate }}</td>
              </tr>
              <tr v-if="list.textType !== 'START_END'">
                <th>날짜 문구</th>
                <td colspan="3">{{ list.textDate }}</td>
              </tr>
              <tr>
                <th>배너 이미지</th>
                <td colspan="3">
                  <img style="width: 262px; height: 80px !important" :src="`${$config.IMAGE_SERVER_URL}/${list.defaultImagePath}/${list.imagePath}`" :alt="list.eventName" />
                </td>
              </tr>
              <tr>
                <th>배너 제목</th>
                <td colspan="3">{{ list.eventName }}</td>
              </tr>
              <tr>
                <th>배너 URL</th>
                <td colspan="3">
                  <a :href="list.bannerUrl" target="_blank">{{ list.bannerUrl }}</a>
                </td>
              </tr>
              <tr>
                <th>이벤트 상태</th>
                <td colspan="3" :class="checkEventState(list.visibleText)">{{ list.visibleText }}</td>
              </tr>
            </table>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-4">
          <div class="d-flex align-center mb-2">
            <h4 class="text-h5 font-weight-bold grey--text text--darken-4">상품등록</h4>
            <v-spacer></v-spacer>
            <v-btn class="ml-1" color="primary" @click="openRegistItem">등록</v-btn>
          </div>
          <v-data-table
            ref="dataTables"
            :items-per-page="dataTables.length"
            hide-default-header
            hide-default-footer
            disable-filtering
            :items="dataTables"
            :headers="headers1"
            class="elevation-1 table-line-td table_basic"
          >
            <template v-slot:header="{ props: { headers } }">
              <thead class="v-data-table-header">
                <tr>
                  <th v-for="(header, i) in headers" :key="i" :rowspan="header.rowspan" :class="['column', 'text-center']">
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
            </template>
            <template #body="{ items }">
              <tbody v-if="items.length > 0">
                <tr v-for="(item, i) in items" :key="i">
                  <td class="text-center">{{ item.giftCode }}</td>
                  <td class="text-center">{{ item.giftName }}</td>
                  <td class="text-center">{{ item.probability / 10 }} %</td>
                  <td class="text-center">{{ item.count }}</td>
                  <td class="text-center">{{ item.giftCount }}</td>
                  <td class="text-center">{{ checkLimitDate(item.limitDate) }}</td>
                  <td class="text-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon small class="mr-2" v-bind="attrs" v-on="on" @click="openEditItem(item)"> mdi-pencil </v-icon>
                      </template>
                      <span>수정</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon small v-bind="attrs" v-on="on" @click="openDeleteItem(item)"> mdi-delete </v-icon>
                      </template>
                      <span>삭제</span>
                    </v-tooltip>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="12" class="text-center" style="height: 20vh !important">
                    <v-icon color="grey grey lighten-1" large>mdi-information</v-icon>
                    <div class="text-body-1 mt-1">등록된 상품이 없습니다.</div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>

    <!-- 이벤트 상태 등록 -->
    <v-dialog v-model="dialogForm" scrollable max-width="700" persistent no-click-animation>
      <v-form ref="entryForm" lazy-validation>
        <v-card>
          <v-toolbar color="primary">
            <span class="headline white--text">이벤트 관리 {{ formTitle }}</span>
          </v-toolbar>
          <v-card-text>
            <v-row align="center" class="justify-center pr-3" dense>
              <v-col cols="2" class="text-center"> <strong> 상품 코드 </strong></v-col>
              <v-col cols="10" class="text-left">
                <v-text-field v-model.number="formData.giftCode" type="number" :rules="rules.textField_giftCode" required dense :readonly="editedIndex === -1 ? false : true"></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center"> <strong> 상품명 </strong></v-col>
              <v-col cols="10" class="text-left">
                <v-text-field v-model="formData.giftName" :rules="rules.textField_giftName" required dense></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center"> <strong> 상품설명 </strong></v-col>
              <v-col cols="10" class="text-left">
                <v-text-field v-model="formData.giftDesc" dense></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center"> <strong> 당첨확률 </strong></v-col>
              <v-col cols="10" class="text-left">
                <div class="d-inline-flex justify-center align-center">
                  <v-text-field v-model.number="formData.probability" type="number" class="form_input sm" :rules="rules.textField_probability" required dense></v-text-field>
                  <span class="ml-1">
                    / 10 = <b>{{ formData.probability / 10 }} %</b>
                  </span>
                </div>
              </v-col>
              <v-col cols="2" class="text-center"> <strong> 당첨자수 </strong></v-col>
              <v-col cols="4" class="text-left">
                <v-text-field v-model.number="formData.winnerCount" type="number" :rules="rules.textField_winnerCount" required dense></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center">
                <strong> 당첨자 제한수 </strong>
              </v-col>
              <v-col cols="4" class="text-left">
                <v-text-field v-model.number="formData.limitCount" type="number" :rules="rules.textField_limitCount" required dense></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center">
                <strong> 당첨자<br />중복제한수 </strong>
              </v-col>
              <v-col cols="10" class="text-left">
                <v-text-field v-model="formData.giftCount" type="number" :rules="rules.textField_giftCount" required dense></v-text-field>
              </v-col>
              <v-col cols="2" class="text-center"> <strong> 당첨자 제한일 </strong></v-col>
              <v-col cols="10" class="text-left">
                <div class="d-flex align-center">
                  <v-menu ref="datePickerMenu" v-model="datePickerDate.menu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="datePickerDate.date"
                        dense
                        outlined
                        hide-details
                        label="당첨자 제한일 년-월-일"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="datePickerDate.date" no-title scrollable locale="kr" :min="datePickerDate.min" @input="datePickerDate.menu = false"></v-date-picker>
                  </v-menu>
                </div>
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
    </v-dialog>

    <v-dialog v-model="dialogDelete" scrollable max-width="700px" persistent no-click-animation>
      <v-card>
        <v-toolbar color="error">
          <span class="headline white--text">삭제하시겠습니까?</span>
        </v-toolbar>
        <v-card-text class="pt-2">
          <div>
            <table class="table_basic text-center fixed">
              <colgroup>
                <col width="15%" />
                <col width="50%" />
                <col width="35%" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>상품코드</th>
                  <th>상품종류</th>
                  <th>현재확률</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ selectItem.giftCode }}</td>
                  <td>{{ selectItem.giftName }}</td>
                  <td>{{ selectItem.probability / 10 }} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="closeDelete">취소</v-btn>
          <v-btn color="info" @click="itemDelete">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-text>
</template>

<script>
export default {
  mixins: [global],
  props: {
    list: {
      type: Object,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      api: '/api/event/config',
      dataTables: [],
      headers1: [{ text: '상품코드' }, { text: '상품종류' }, { text: '현재확률' }, { text: '현재수량 (잔여수량/총수량)' }, { text: '당첨자 중복 제한수' }, { text: '당첨 제한날짜' }, { text: '설정' }],
      formData: {
        giftCode: '',
        giftName: '',
        winnerCount: '0',
        probability: '0',
        giftDesc: '',
        limitCount: '0',
        giftCount: '0',
        limitDate: '',
      },
      formDataInit: {
        giftCode: '',
        giftName: '',
        winnerCount: '0',
        probability: '0',
        giftDesc: '',
        limitCount: '0',
        giftCount: '0',
        limitDate: '',
      },
      rules: {
        textField_giftCode: [(v) => !!v || '* 필수항목'],
        textField_giftName: [(v) => !!v || '* 필수항목'],
        textField_winnerCount: [(v) => !!v || '* 필수항목'],
        textField_probability: [(v) => !!v || '* 필수항목', (v) => Number(v) <= 1000 || '100% 초과당첨 확률은 입력할수 없습니다.'],
        textField_limitCount: [(v) => !!v || '* 필수항목'],
        textField_giftCount: [(v) => !!v || '* 필수항목'],
      },
      editedIndex: -1,
      dialogForm: false,
      dialogDelete: false,
      selectItem: {},
      datePickerDate: {
        date: '',
        min: this.$moment().format('YYYY-MM-DD'),
        menu: false,
        show: false,
      },
    }
  },
  computed: {
    formTitle() {
      return `${this.editedIndex === -1 ? '등록' : '수정'}`
    },
    checkEventState() {
      return (val) => {
        if (val === '이벤트 종료') return 'red--text'
        else return ''
      }
    },
    checkLimitDate() {
      return (val) => {
        if (val === '1900-01-01') return '미등록'
        else return val
      }
    },
  },
  watch: {
    async list() {
      await this.getSearch()
    },
  },
  async created() {
    await this.getSearch()
  },
  methods: {
    async getSearch() {
      try {
        const { eventCode: seq } = this.list
        const { data } = await this.$axios.get(`${this.api}/${seq}/gift`)

        this.dataTables = []
        this.dataTables.push(...data)
      } catch (error) {}
    },
    openEditItem(item) {
      try {
        for (const key in item) {
          this.formData[key] = item[key].toString()
        }

        this.datePickerDate.date = this.formData.limitDate === '1900-01-01' ? '' : this.formData.limitDate
        this.editedIndex = 1
        this.selectItem = item
        this.dialogForm = true
      } catch (error) {}
    },
    openRegistItem() {
      this.editedIndex = -1
      this.dialogForm = true
    },
    closeForm() {
      this.dialogForm = false
      if (this.$refs.entryForm) {
        this.$refs.entryForm.resetValidation()
        this.datePickerDate.date = ''
      }
      Object.assign(this.formData, this.formDataInit)
      this.selectItem = {}
    },
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
            await this.$axios.post(`${this.api}/${this.list.eventCode}/gift`, {
              ...this.formData,
              limitDate: this.datePickerDate.date,
            })
            alert('정상적으로 등록이 완료되었습니다.')
          } else {
            alert(`등록 중 오류가 발생했습니다. 비정상적인 데이터입니다. [editedIndex : ${this.editedIndex}]`)
          }
          await this.getSearch()
          this.closeForm()
        } catch (error) {}
      }
    },
    async itemModify() {
      if (this.$refs.entryForm.validate()) {
        try {
          if (this.editedIndex !== -1) {
            const { giftCode: seq } = this.selectItem
            await this.$axios.put(`${this.api}/${this.list.eventCode}/gift/${seq}`, {
              ...this.formData,
              limitDate: this.datePickerDate.date,
            })
            alert('정상적으로 수정이 완료되었습니다.')
          } else {
            alert(`수정 중 오류가 발생했습니다. 비정상적인 데이터입니다. [editedIndex : ${this.editedIndex}]`)
          }
          await this.getSearch()
          this.closeForm()
        } catch (error) {}
      }
    },
    async itemDelete() {
      try {
        await this.$axios.delete(`${this.api}/${this.list.eventCode}/gift/${this.selectItem.giftCode}`)
        this.getSearch()
        this.selectItem = {}

        alert('삭제가 완료 되었습니다.')
      } catch (error) {}
      this.closeDelete()
    },
    openDeleteItem(item) {
      this.dialogDelete = true
      this.selectItem = item
    },
    closeDelete() {
      this.dialogDelete = false
      this.selectItem = {}
      this.editedIndex = -1
    },
  },
}
</script>

<style lang="scss" scoped></style>
