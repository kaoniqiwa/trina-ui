<docs>
---
order: 4
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Button`.
</docs>

<template>
  <a-space direction="vertical">
    <a-space>
      <t-button type="primary" loading>Loading</t-button>
      <t-button type="primary" size="small" loading>Loading</t-button>
    </a-space>
    <a-space>
      <t-button type="primary" :loading="loading" @mouseenter="loading = true">
        mouseenter me!
      </t-button>
      <t-button type="primary" :loading="iconLoading" @click="enterIconLoading">
        <template #icon><PoweroffOutlined /></template>
        延迟1s
      </t-button>
    </a-space>
    <a-space>
      <t-button type="primary" loading />
      <t-button type="primary" shape="circle" loading />
      <t-button danger shape="round" loading />
    </a-space>
  </a-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';

interface DelayLoading {
  delay: number;
}
const loading = ref<boolean>(false);
const iconLoading = ref<boolean | DelayLoading>(false);
const enterIconLoading = () => {
  iconLoading.value = { delay: 1000 };

  setTimeout(() => {
    iconLoading.value = false;
  }, 6000);
};
</script>
