<template>
  <div class="my-book">我的书单</div>
</template>

<script>
export default {
  mounted() {
    this.a("2024-3-1");
  },
  methods: {
    isLeapYear(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    },
    a(currData) {
      var currDateStart = currData;
      var currDateStartrReverse = currDateStart.split("-");
      var currdataEnd = new Date(currData);
      var num = this.isLeapYear(currDateStartrReverse[0]) ? 365 : 364;
      let endTime = currdataEnd.getTime() + num * 60 * 60 * 24 * 1000;
      let currDateEndTime = new Date(endTime);
      let endYear = currDateEndTime.getFullYear();
      let endMonth = currDateEndTime.getMonth() + 1;
      let endDay = currDateEndTime.getDate();
      if (endMonth < 10) {
        endMonth = "0" + endMonth;
      }
      if (endDay < 10) {
        endDay = "0" + endDay;
      }
      return endYear + "-" + endMonth + "-" + endDay;
    },

  },
};
    function fn(refDate) {
      var d2 = new Date(refDate)
       d2.setFullYear(d2.getFullYear()+1);
       d2.setDate(d2.getDate()-1)
      let d = new Date(d2)
      let nextYear = d.getFullYear();
      let nextMonth = d.getMonth()+1
      let nextDay = d.getDate()
      return nextYear +'-'+nextMonth+'-'+nextDay
    }
</script>

<style lang='scss' scoped>
.my-book {
}
</style>