<template>
  <div >
    <table>
        <thead>
            <tr>
                <th v-for="(item, index) in columns" :key="index">
                    {{ item.label }}
                </th>
            </tr>
        </thead>        
    </table>
    <table>
        <tbody ref="bodyarea" :style="containerStyle" @scroll="handlerScroll">
            <tr v-for="(item, index) in showData" :key="index">
                <td>
                    {{ item.no }}
                </td>
                <td>
                    {{ item.name }}
                </td>
                <td>
                    {{ item.age }}
                </td>
                <td>
                    {{ item.nickname }}
                </td>
            </tr>
        </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array,
    height: Number,
    blockFactor: {
      type: Number,
      default: 0.1
    },
    extendFactor: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      showData: [],
      topBufferStyle: {
        height: 0
      },
      bottomBufferStyle: {
        height: 0
      },
      rowHeight: 24
    }
  },
  watch: {
    data () {
      this.displayData()
    },
    height () {
      this.displayData()
    }
  },
  computed: {
    blockSize () {
      return this.height * this.blockFactor
    },
    preloadSize () {
      return this.height * this.extendFactor
    },
    totalScrollableHeight () {
      return this.data.length * this.rowHeight
    },
    containerStyle () {
      return {
        height: this.height + 'px',
        overflowY: 'scroll',
        webkitOverflowScrolling: 'touch',
        display: 'table-cell'
      }
    }
  },
  mounted() {
    this.displayData()
    console.log(this.$refs.bodyarea.scrollTop)
    },
  methods: {
    handlerScroll () {
      this.displayData()
    },
    displayData () {
      const scrollTop = this.$refs.bodyarea.scrollTop || 0
      const blockNumber = this.blockSize === 0 ? 0 : Math.floor(scrollTop / this.blockSize);
      const startIndex = Math.floor((Math.max(0, (this.blockSize * blockNumber) - this.preloadSize)) / this.rowHeight);
      const endIndex = Math.ceil((Math.min(this.totalScrollableHeight, ((this.blockSize * blockNumber) + this.blockSize) + this.preloadSize)) / this.rowHeight);

      this.showData = this.data.slice(startIndex, endIndex + 1)
      this.topBufferStyle.height = startIndex * this.rowHeight + 'px'
      this.bottomBufferStyle.height = Math.max(0, (this.data.length - endIndex - 1) * this.rowHeight) + 'px'
    }
  }
}
</script>

<style  scoped>

</style>>
