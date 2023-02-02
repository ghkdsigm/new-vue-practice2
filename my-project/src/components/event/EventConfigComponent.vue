<template>
  <v-card>
    <board-title-component title="이벤트 관리" nosub>
      <template #right>
        <div class="d-flex align-center justify-center">
          <v-text-field v-model="eventName" label="이벤트명" @keyup.enter="getSearch"></v-text-field>
          <v-btn color="primary" class="ml-2" @click="getSearch">검색</v-btn>
          <v-btn color="primary" class="ml-2" @click="openRegistItem">등록</v-btn>
        </div>
      </template>
    </board-title-component>
    <v-container fluid>
      <v-data-table
        ref="dataTables"
        hide-default-header
        hide-default-footer
        disable-filtering
        :items-per-page="10"
        :headers="headers1"
        :items="dataTables"
        class="elevation-1 table-line-td event_table"
      >
        <template v-slot:header="{ props: { headers } }">
          <thead class="v-data-table-header">
            <tr>
              <th v-for="(header, i) in headers" :key="i" :rowspan="header.rowspan" :class="['column', 'text-center']">
                {{ header.text }}
              </th>
            </tr>
            <tr>
              <th v-for="(header, i) in headers2" :key="i" class="column text-center">
                {{ header.text }}
                <v-icon v-if="header.sort" class="v-data-table-header__icon mdi mdi-arrow-up" :size="18" small></v-icon>
              </th>
            </tr>
            <tr>
              <th v-for="(header, i) in headers3" :key="i" class="column text-center" :colspan="header.colspan">
                {{ header.text }}
                <v-icon v-if="header.sort" class="v-data-table-header__icon mdi mdi-arrow-up" :size="18" small></v-icon>
              </th>
            </tr>
          </thead>
        </template>
        <template #body="{ items }">
          <template v-if="items.length > 0">
            <tbody v-for="(item, i) in items" :key="i">
              <tr>
                <td class="text-center" rowspan="3">{{ item.eventCode }}</td>
                <td class="text-center" rowspan="3"><img style="width: 262px; height: 80px !important" :src="`${$config.IMAGE_SERVER_URL}/${item.imagePath}`" :alt="item.eventName" /></td>
                <td class="text-center">{{ item.eventName }}</td>
                <td class="text-center" :class="checkEventState(item.visible)">{{ item.visible }}</td>
                <td class="text-center" rowspan="3">
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-icon small class="mr-2" v-bind="attrs" v-on="on" @click="openDetailItem(item)"> mdi-clipboard </v-icon>
                    </template>
                    <span>상세</span>
                  </v-tooltip>
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
              <tr>
                <td class="text-center">{{ item.startDate }} ~ {{ item.endDate }}</td>
                <td class="text-center">{{ item.textDate }}</td>
              </tr>
              <tr>
                <td class="text-center" colspan="2">
                  <a :href="item.bannerUrl" target="_blank">{{ item.bannerUrl }}</a>
                </td>
              </tr>
            </tbody>
          </template>
          <tbody v-else>
            <tr>
              <td colspan="12" class="text-center" style="height: 30vh !important">
                <v-icon color="grey grey lighten-1" large>mdi-information</v-icon>
                <div class="text-body-1 mt-1">데이터가 존재하지 않습니다.</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <div class="d-flex justify-center mt-3">
        <common-data-table-pagination-component
          :data-tables="dataTablePagination.dataTables"
          :limit="dataTablePagination.limit"
          :cursor-seq="dataTablePagination.cursorSeq"
          :direction="dataTablePagination.direction"
          :cursor-seq-name="dataTablePagination.cursorSeqName"
          @pagination="pagination"
        ></common-data-table-pagination-component>
      </div>
    </v-container>

    <!-- 이벤트 관리 상세 -->
    <v-dialog v-model="dialogDetail" scrollable max-width="1200">
      <v-form ref="detailForm" lazy-validation>
        <v-card>
          <v-toolbar color="primary">
            <span class="headline white--text"
              ><!-- {{ title }} -->
              상세</span
            >
          </v-toolbar>
          <event-config-detail-component :list="selectItem"></event-config-detail-component>
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
                  <th>코드</th>
                  <th>이벤트명</th>
                  <th>이벤트 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ selectItem.eventCode }}</td>
                  <td>{{ selectItem.eventName }}</td>
                  <td>{{ selectItem.startDate }} ~ {{ selectItem.endDate }}</td>
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

    <!-- 이벤트 관리 등록 -->
    <v-dialog v-model="dialogForm" scrollable max-width="1000" persistent no-click-animation>
      <event-config-regist-component
        :select-item="selectItem"
        :edited-index="editedIndex"
        :form-data="formData"
        :form-data-init="formDataInit"
        @dialogForm="getDialogForm"
      ></event-config-regist-component>
    </v-dialog>
  </v-card>
</template>

<script>
import global from '@/mixins/global.js'
import CommonDataTablePaginationComponent from '@/components/common/CommonDataTablePaginationComponent'
import EventConfigRegistComponent from '@/components/event/config/EventConfigRegistComponent'
import EventConfigDetailComponent from '@/components/event/config/EventConfigDetailComponent'
import BoardTitleComponent from '@/components/common/BoardTitleComponent'

export default {
  components: {
    CommonDataTablePaginationComponent,
    BoardTitleComponent,
    EventConfigDetailComponent,
    EventConfigRegistComponent,
  },
  mixins: [global],
  data() {
    return {
      api: '/api/event/config',
      dataTables: [],
      headers1: [{ text: '코드', rowspan: 3 }, { text: '배너 이미지', rowspan: 3 }, { text: '이벤트명' }, { text: '상태' }, { text: '설정', rowspan: 3 }],
      headers2: [{ text: '이벤트 기간' }, { text: '이벤트 문구' }],
      headers3: [{ text: '배너 URL', colspan: 2 }],
      dataTablePagination: {
        dataTables: [],
        cursorSeqName: 'eventCode',
        limit: 10,
        cursorSeq: 0,
        direction: 0,
        eventName: '',
      },
      eventName: '',
      selectItem: {},
      dialogDelete: false,
      dialogDetail: false,
      dialogForm: false,
      formData: {
        eventCode: '',
        type: 'EVENT_NORMAL',
        newWindow: 'UN_NEW_WINDOW',
        eventName: '',
        textType: 'START_END',
        textDate: '',
        startDate: this.$moment().format('YYYY-MM-DD'),
        endDate: this.$moment().add(1, 'days').format('YYYY-MM-DD'),
        imagePath: '',
        bannerTitle: '',
        bannerUrl: '',
        visible: 'ITEMBAY_OUTCROP',
        orderType: 'LEFT',
        imagePathAndroid: '',
        imagePathIPhone: '',
        winnerConfirmButton: 'UN_OUTCROP',
        mobileBannerUrl: '',
      },
      formDataInit: {
        eventCode: '',
        type: 'EVENT_NORMAL',
        newWindow: 'UN_NEW_WINDOW',
        eventName: '',
        textType: 'START_END',
        textDate: '',
        startDate: this.$moment().format('YYYY-MM-DD'),
        endDate: this.$moment().add(1, 'days').format('YYYY-MM-DD'),
        imagePath: '',
        bannerTitle: '',
        bannerUrl: '',
        visible: 'ITEMBAY_OUTCROP',
        orderType: 'LEFT',
        imagePathAndroid: '',
        imagePathIPhone: '',
        winnerConfirmButton: 'UN_OUTCROP',
        mobileBannerUrl: '',
      },
      editedIndex: -1,
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
  },
  created() {
    this.getSearchInit()
    this.$nuxt.$on('getSearchEvent', this.getSearch)
  },
  methods: {
    getSearchInit() {
      this.dataTablePagination.cursorSeq = 0
      this.dataTablePagination.direction = 0

      this.getSearch()
    },
    async getSearch() {
      try {
        const { data } = await this.$axios.get(`${this.api}`, {
          params: {
            cursorSeq: this.dataTablePagination.cursorSeq,
            direction: this.dataTablePagination.direction,
            eventName: this.eventName,
          },
        })
        this.dataTables = []
        this.dataTables.push(...this.dataTablesPagination(data, this.dataTablePagination.direction, this.dataTablePagination.limit))
        this.dataTablePagination.dataTables = []
        this.dataTablePagination.dataTables.push(...data)
      } catch (error) {}
    },
    async pagination({ cursorSeq, direction }) {
      this.dataTablePagination.cursorSeq = cursorSeq
      this.dataTablePagination.direction = direction

      await this.getSearch()
    },
    async itemDelete() {
      try {
        await this.$axios.delete(`${this.api}/${this.selectItem.eventCode}`)
        this.getSearchInit()
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
    async openDetailItem(item) {
      try {
        const { eventCode: seq } = item
        const { data } = await this.$axios.get(`${this.api}/${seq}`)

        this.selectItem = data
        this.selectItem.eventCode = seq
        this.dialogDetail = true
      } catch (error) {}
    },
    async openEditItem(item) {
      try {
        const { eventCode: seq } = item
        const { data } = await this.$axios.get(`${this.api}/${seq}`)

        for (const key in data) {
          this.formData[key] = data[key] === null ? '' : data[key].toString()
        }
        this.editedIndex = seq
        this.selectItem = item
        this.dialogForm = true
      } catch (error) {}
    },
    openRegistItem() {
      this.editedIndex = -1
      this.dialogForm = true
    },
    getDialogForm(payload) {
      this.dialogForm = payload
    },
  },
}
</script>

<style lang="scss" scoped>
.event_table {
  tr:nth-child(even) {
    background: none;
  }

  tbody:nth-child(even) {
    background: #fafafa;
  }
}
</style>
