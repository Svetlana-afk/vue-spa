<template>
  <div>
    <div class="page-title">
      <h3>Страница пользователей</h3>
    </div>

    <section v-if="errored">
      <h4>Some Error</h4>
    </section>

    <Loader v-else-if="loading" />

    <section v-else>
      <section>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>ФИО</th>
              <th>Номер телефона</th>
              <th>Доход</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, idx) in users" :key="user.id">
              <td>{{ idx + 1 }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>
                <input
                  class="input"
                  id="profit"
                  v-on:blur="handleBlur(user.id, $event)"
                  v-on:change="validate($event.target.value)"
                  type="number"
                  min="10000"
                  max="250000"
                  step="1"
                  :value="user.profit"
                  :class="{
                    invalid: user.profit < 10000 || user.profit > 250000,
                  }"
                  novalidate
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Users",
  computed: {
    users() {
      return this.$store.state.info;
    },
    errored() {
      return this.$store.state.errored;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  watch: {
    profit(value) {
      this.validate(value);
    },
  },
  methods: {
    validate(value) {
      return value >= 10000 && value <= 250000;
    },
    handleBlur: function (userId, e) {
      if (e.target.value >= 10000 && e.target.value <= 250000) {
        let user = this.$store.state.info.find((user) => user.id === userId);
        let prevProfit = user.profit;
        let currentProfit = e.target.value;
        e.target.classList.remove("invalid");

        if (prevProfit != currentProfit) {
          this.$store.commit("changeProfitById", {
            userId,
            profit: currentProfit,
          });
          this.$store.dispatch("createHistoryRecord", {
            data: new Date(),
            name: user.name,
            prevProfit,
            currentProfit,
          });
        }
      } else {
        e.target.classList.add("invalid");
      }
    },
  },
};
</script>