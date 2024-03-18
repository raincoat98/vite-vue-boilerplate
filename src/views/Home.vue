<script lang="ts" setup>
const nodes = ref([
  {
    key: "0",
    label: "접수고객 MOT",
    data: "접수고객 MOT Folder",
    icon: "pi pi-fw pi-inbox",
    children: [
      {
        key: "0-0",
        label: "Work",
        data: "Work Folder",
        icon: "pi pi-fw pi-cog",
        children: [
          {
            key: "0-0-0",
            label: "Expenses.doc",
            icon: "pi pi-fw pi-file",
            data: "Expenses Document",
          },
          {
            key: "0-0-1",
            label: "Resume.doc",
            icon: "pi pi-fw pi-file",
            data: "Resume Document",
          },
        ],
      },
      {
        key: "0-1",
        abel: "Home",
        data: "Home Folder",
        icon: "pi pi-fw pi-home",
        children: [
          {
            key: "0-1-0",
            label: "Invoices.txt",
            icon: "pi pi-fw pi-file",
            data: "Invoices for this month",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "관리",
    data: "관리 Folder",
    icon: "pi pi-fw pi-calendar",
    children: [
      {
        key: "1-0",
        label: "Meeting",
        icon: "pi pi-fw pi-calendar-plus",
        data: "Meeting",
      },
      {
        key: "1-1",
        label: "Product Launch",
        icon: "pi pi-fw pi-calendar-plus",
        data: "Product Launch",
      },
      {
        key: "1-2",
        label: "Report Review",
        icon: "pi pi-fw pi-calendar-plus",
        data: "Report Review",
      },
    ],
  },
  {
    key: "2",
    label: "Movies",
    data: "Movies Folder",
    icon: "pi pi-fw pi-star-fill",
  },
]);

const products = ref([
  {
    product: "Appliances",
    lastYearSale: 501,
    thisYearSale: 307,
    lastYearProfit: 309,
    thisYearProfit: 508,
  },
  {
    product: "Baby",
    lastYearSale: 266,
    thisYearSale: 165,
    lastYearProfit: 29,
    thisYearProfit: 39,
  },
  {
    product: "Books",
    lastYearSale: 389,
    thisYearSale: 512,
    lastYearProfit: 87,
    thisYearProfit: 113,
  },
  {
    product: "Clothing",
    lastYearSale: 348,
    thisYearSale: 527,
    lastYearProfit: 135,
    thisYearProfit: 255,
  },
  {
    product: "Electronics",
    lastYearSale: 480,
    thisYearSale: 358,
    lastYearProfit: 48,
    thisYearProfit: 59,
  },
  {
    product: "Garden",
    lastYearSale: 221,
    thisYearSale: 345,
    lastYearProfit: 78,
    thisYearProfit: 89,
  },
  {
    product: "Grocery",
    lastYearSale: 134,
    thisYearSale: 178,
    lastYearProfit: 34,
    thisYearProfit: 47,
  },
  {
    product: "Health",
    lastYearSale: 100,
    thisYearSale: 210,
    lastYearProfit: 10,
    thisYearProfit: 20,
  },
]);
</script>

<template>
  <div class="justify-content-center flex">
    <div class="bg-primary h-screen p-5">
      <h1 class="p-5 text-4xl font-bold text-white">다이트 한의원</h1>
      <Tree
        :value="nodes"
        class="w-full md:w-[20rem]"
        :pt="{
          root: 'bg-primary',
          content: 'p-2 text-white font-bold text-2xl	hover:bg-primary-200 ',
          subgroup: 'pl-2 text-white',
          nodeIcon: 'text-white mr-2',
          toggler: 'text-white pr-2',
        }"
      ></Tree>
    </div>
    <section class="flex flex-1 flex-col">
      <section class="p-5">
        <h1 class="text-4xl font-bold text-primary-500">다이트 한의원</h1>
        <div class="flex gap-x-2 pt-2">
          <router-link to="/about" class="text-blue-800">
            Go to About
          </router-link>
          <router-link to="/counter" class="text-blue-800">
            Go to counter
          </router-link>
        </div>
      </section>
      <section class="flex-1 p-5">
        <div class="h-full rounded-lg p-5 bg-white">
          <DataTable :value="products" class="w-full rounded-lg">
            <Column header="product" sortable field="product" />
            <Column header="Last Year" sortable field="lastYearSale" />
            <Column header="This Year" sortable field="thisYearSale" />
            <Column header="Last Year" sortable field="lastYearProfit" />
            <Column header="This Year" sortable field="thisYearProfit" />
          </DataTable>
        </div>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
