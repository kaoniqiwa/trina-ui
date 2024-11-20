<docs>
---
order: 3
title:
  zh-CN: 自定义尺寸
  en-US: Customize Size
---

## zh-CN

自定义间距大小。

## en-US

Custom spacing size.
</docs>

<template>
  <div>
    <a-slider v-model:value="size" />
    <br />
    <br />
    <a-space :size="size">
      <t-button type="primary">Primary</t-button>
      <t-button>Default</t-button>
      <t-button type="dashed">Dashed</t-button>
      <t-button type="link">Link</t-button>
    </a-space>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const size = ref(8);
</script>
