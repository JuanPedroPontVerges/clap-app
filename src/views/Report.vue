<template class="reportes">
  <div class="container">
    <el-row>
      <el-col :lg="6"> </el-col>
      <el-col :lg="6">
        <AppReportCards
          icono="el-icon-s-marketing"
          bg_color="blue"
          header_text="Hola"
          middle_text="$123"
          footer_text="descripcion"
        ></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards
          icono="el-icon-s-marketing"
          bg_color="blue"
          header_text="Hola"
          middle_text="$123"
          footer_text="descripcion"
        ></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards
          icono="el-icon-s-marketing"
          bg_color="blue"
          header_text="Hola"
          middle_text="$123"
          footer_text="descripcion"
        ></AppReportCards>
      </el-col>
      <el-col :lg="6">
        <AppReportCards
          icono="el-icon-s-marketing"
          bg_color="blue"
          header_text="Hola"
          middle_text="$123"
          footer_text="descripcion"
        ></AppReportCards>
      </el-col>
      <el-col :lg="12">
        <apexchart
          width="500"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
        <el-col :lg="12">
          <apexchart
            width="500"
            type="area"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout";
import AppReportCards from "../components/AppReportCards";

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "01/2020",
            "02/2020",
            "03/2020",
            "04/2020",
            "05/2020",
            "06/2020",
            "07/2020",
            "08/2020",
          ],
        },
      },
      series: [
        {
          name: "Tramites Completados",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  created() {
    this.$emit(`update:layout`, HomeLayout);
  },
  components: {
    AppReportCards,
  },
};
</script>

<style>
</style>