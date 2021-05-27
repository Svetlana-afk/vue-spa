<template>
  <div class="about">
    <div class="page-title">
      <h3>История изменений</h3>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">История пока пуста</p>

    <section v-else>
      <HistoryTable :records="records" />
      <button class="btn waves-effect waves-light mybutton" type="submit" name="action" @click="downloadHistory">
        Выгрузить историю в файл
        <i class="material-icons right">file_download</i>
      </button>
    </section>
  </div>
</template>

<script>
import HistoryTable from "@/components/HistoryTable";
export default {
  name: "history",
  computed: {
    records() {
      return this.$store.state.history.historyInfo;
    },
  },
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.$store.dispatch("getHistory");
  },
  components: {
    HistoryTable,
  },
  methods: {
    downloadHistory: function(){
      console.log("History Dowloaded")
    }
  }
};
</script>

