<template>
  <div>
    <v-btn depressed outlined :disabled="!button.first" @click="firstPagination"> 처음페이지 </v-btn>
    <v-btn depressed outlined :disabled="!button.previous" @click="previousPagination"> 이전페이지 </v-btn>
    <v-btn depressed outlined :disabled="!button.next" @click="nextPagination"> 다음페이지 </v-btn>
    <v-btn depressed outlined :disabled="!button.last" @click="lastPagination"> 마지막페이지 </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    dataTables: {
      type: Array,
      default: () => [],
    },
    limit: {
      type: Number,
      default: 10,
    },
    cursorSeq: {
      type: Number,
      default: 0,
    },
    direction: {
      type: Number,
      default: 0,
    },
    cursorSeqName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      button: {
        first: false,
        previous: false,
        next: false,
        last: false,
      },
      pagination: {
        cursorSeq: 0,
        direction: 0,
      },
    }
  },
  watch: {
    dataTables(value) {
      const limit = this.limit + 1
      const dataCount = value.length

      if (this.direction === 0) {
        // 처음페이지
        this.button.first = false
        this.button.previous = false

        if (dataCount === limit) {
          this.button.next = true
          this.button.last = true
        } else {
          this.button.next = false
          this.button.last = false
        }
      } else if (this.direction === 1) {
        // 마지막페이지
        this.button.next = false
        this.button.last = false

        // if (dataCount === limit) {
        this.button.first = true
        this.button.previous = true
        // }
      } else if (this.direction === 2) {
        // 다음페이지
        this.button.first = true
        this.button.previous = true

        if (dataCount === limit) {
          this.button.next = true
          this.button.last = true
        } else {
          this.button.next = false
          this.button.last = false
        }
      } else if (this.direction === 3) {
        // 이전페이지
        this.button.next = true
        this.button.last = true

        if (dataCount === limit) {
          this.button.first = true
          this.button.previous = true
        } else {
          this.button.first = false
          this.button.previous = false
        }
      }
    },
  },
  methods: {
    firstPagination() {
      this.pagination.cursorSeq = 0
      this.pagination.direction = 0
      this.$emit('pagination', this.pagination)
    },
    previousPagination() {
      const { limit, dataCount } = this.paginationInfo()

      if (dataCount === limit && (this.pagination.direction === 1 || this.pagination.direction === 3)) {
        this.pagination.cursorSeq = this.dataTables[1][`${this.cursorSeqName}`]
      } else {
        this.pagination.cursorSeq = this.dataTables[0][`${this.cursorSeqName}`]
      }

      this.pagination.direction = 3
      this.$emit('pagination', this.pagination)
    },
    nextPagination() {
      const { limit, dataCount } = this.paginationInfo()

      if (dataCount === limit && (this.pagination.direction === 0 || this.pagination.direction === 2)) {
        this.pagination.cursorSeq = this.dataTables[this.dataTables.length - 2][`${this.cursorSeqName}`]
      } else {
        this.pagination.cursorSeq = this.dataTables[this.dataTables.length - 1][`${this.cursorSeqName}`]
      }

      this.pagination.direction = 2
      this.$emit('pagination', this.pagination)
    },
    lastPagination() {
      const { limit, dataCount } = this.paginationInfo()

      if (dataCount === limit) {
        this.pagination.cursorSeq = this.dataTables[1][`${this.cursorSeqName}`]
      } else {
        this.pagination.cursorSeq = this.dataTables[0][`${this.cursorSeqName}`]
      }

      this.pagination.cursorSeq = 0
      this.pagination.direction = 1
      this.$emit('pagination', this.pagination)
    },
    paginationInfo() {
      const limit = this.limit + 1
      const dataCount = this.dataTables.length
      return { limit, dataCount }
    },
  },
}
</script>
