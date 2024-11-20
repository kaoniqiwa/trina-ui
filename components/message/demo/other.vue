<docs>
---
order: 3
title:
  zh-CN: 其他提示类型
  en-US: Other types of message
---

## zh-CN

包括成功、失败、警告。

## en-US

Messages of success, error and warning types.

</docs>

<template>
  <a-space>
    <t-button @click="success">Success</t-button>
    <t-button @click="error">Error</t-button>
    <t-button @click="warning">Warning</t-button>
  </a-space>
</template>
<script lang="ts" setup>
import { message } from '@kaoniqiwa/trina-ui';
const success = () => {
  message.success('This is a success message');
};
const error = () => {
  message.error('This is an error message');
};
const warning = () => {
  message.warning('This is a warning message');
};
</script>
