<template>
    <div>
        <div v-for="(row, rIndex) in rows" v-bind:key="rIndex">
            <div v-for="(cell, cIndex) in row" v-bind:key="cIndex" class="cell"
                :style="{
                    left: 21 * cIndex + offset + 'px',
                    top: 21 * rIndex + 'px',
                    backgroundColor: cell.hover ? 'black' : 'lightgrey'
                }"
                @mouseenter="cell.hover = true"
                @mouseleave="cell.hover = false"
            >
                {{offset}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    const rows = []
    for (let i = 0; i < 50; i++) {
      const row = []
      rows.push(row)
      for (let j = 0; j < 50; j++) {
        row.push({hover: false})
      }
    }
    return {
      rows,
      offset: 0
    }
  },
  mounted () {
    let steps = 0
    let sign = 1
    setInterval(() => {
      steps++
      if (steps % 100 === 0) {
        sign = sign * -1
      }
      this.offset += sign
    }, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell {
    width: 15px;
    height: 15px;
    position: absolute;
}
</style>
