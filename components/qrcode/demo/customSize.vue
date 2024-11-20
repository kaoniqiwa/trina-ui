<docs>
---
order: 4
title:
  zh-CN: 自定义尺寸
  en-US: Custom Size
---

## zh-CN

自定义尺寸

## en-US
Custom Size.
</docs>

<template>
  <t-button-group>
    <t-button @click="decline">
      <template #icon><MinusOutlined /></template>
      small
    </t-button>
    <t-button @click="increase">
      <template #icon><PlusOutlined /></template>
      large
    </t-button>
  </t-button-group>
  <br />
  <br />
  <a-qrcode
    :size="size"
    :icon-size="size / 4"
    error-level="H"
    value="https://www.antdv.com"
    icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';

const size = ref(160);
const decline = () => {
  size.value = size.value - 10;
  if (size.value < 48) {
    size.value = 48;
  }
};
const increase = () => {
  size.value = size.value + 10;
  if (size.value > 300) {
    size.value = 300;
  }
};
</script>
