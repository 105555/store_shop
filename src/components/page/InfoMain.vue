<template>
  <br />
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-icon icon="vuetify"></v-icon>
    </template>
  </v-breadcrumbs>
  <v-container class="mb-250">
    <v-row class="box-container">
      <v-col cols="12" md="6" class="img-container pa-5" data-aos="flip-up">
        <v-img src="/img/InfoImg.webp"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          data-aos="flip-up"
          data-aos-duration="1000"
          style="background: linear-gradient(to right, #e2e2e2, #e3ede7)"
        >
          <v-card-title>店內資訊</v-card-title>
          <br />
          <v-card-text>地址：台中市南區XXXXXXXX</v-card-text>
          <v-card-text>聯絡電話：03-3333333</v-card-text>
          <v-card-text>電子郵件：info@example.com</v-card-text>
          <hr class="mb-20" />
          <v-card-title>營業時間</v-card-title>
          <br />
          <v-card-text>周一至周五: 9:00 AM - 6:00 PM</v-card-text>
          <v-card-text> 周六至周日: 10:00 AM - 4:00 PM</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InfoMain",
  data() {
    return {
      items: [
        {
          title: this.$t('Home'),
          disabled: false,
          href: "",
        },
        {
          title: this.$t('StoreInfomation'),
          disabled: true,
          href: "",
        },
      ],
    };
  },
  computed: {},
};
</script>
