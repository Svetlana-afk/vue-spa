<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Дата изменения</th>
        <th>ФИО пользователя</th>
        <th>Было</th>
        <th>Стало</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ record.data | datetime }}</td>
        <td>{{ record.name }}</td>
        <td>{{ record.prevProfit }}</td>
        <td>{{ record.currentProfit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";

export default {
  props: {
    records: {
      required: true,
      type: Array,
    },
  },
  filters: {
    datetime: function (data) {
      if ((data === undefined)) {
        return "";
      } else {
      return moment(data).format("DD/MM/YYYY/HH:mm");
      }
    },
  },
};
</script>