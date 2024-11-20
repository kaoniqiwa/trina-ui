<docs>
---
order: 4
title:
  zh-CN: 自定义指示器
  en-US: custom indicator
---

## zh-CN

自定义指示器。

## en-US

Custom indicator.

  
</docs>

<template>
  <t-button type="primary" @click="handleOpen(true)">Begin Tour</t-button>

  <a-divider />

  <a-space>
    <t-button ref="ref1">Upload</t-button>
    <t-button ref="ref2" type="primary">Save</t-button>
    <t-button ref="ref3"><EllipsisOutlined /></t-button>
  </a-space>

  <a-tour :open="open" :steps="steps" @close="handleOpen(false)">
    <template #indicatorsRender="{ current, total }">
      <span>{{ current + 1 }} / {{ total }}</span>
    </template>
  </a-tour>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import type { TourProps } from '@kaoniqiwa/trina-ui';

const open = ref<boolean>(false);

const ref1 = ref(null);
const ref2 = ref(null);
const ref3 = ref(null);

const steps: TourProps['steps'] = [
  {
    title: 'Upload File',
    description: 'Put your files here.',
    target: () => ref1.value && ref1.value.$el,
  },
  {
    title: 'Save',
    description: 'Save your changes.',
    target: () => ref2.value && ref2.value.$el,
  },
  {
    title: 'Other Actions',
    description: 'Click to see other actions.',
    target: () => ref3.value && ref3.value.$el,
  },
];

const handleOpen = (val: boolean): void => {
  open.value = val;
};
</script>
