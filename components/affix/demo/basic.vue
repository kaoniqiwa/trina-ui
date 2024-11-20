<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

</docs>

<template>
  <a-affix :offset-top="top">
    <t-button type="primary" @click="top += 10">Affix top</t-button>
  </a-affix>
  <br />
  <a-affix :offset-bottom="bottom">
    <t-button type="primary" @click="bottom += 10">Affix bottom</t-button>
  </a-affix>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const top = ref<number>(10);
const bottom = ref<number>(10);
</script>
