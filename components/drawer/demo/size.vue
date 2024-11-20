<docs>
---
order: 7
title:
  zh-CN: 预设宽度
  en-US: Presetted size
---

## zh-CN

抽屉的默认宽度为 `378px`，另外还提供一个大号抽屉 `736px`，可以用 size 属性来设置。

## en-US

The default width (or height) of Drawer is `378px`, and there is a presetted large size `736px`.

</docs>

<template>
  <t-button type="primary" style="margin-right: 8px" @click="showDrawer('default')">
    Open Default Size (378px)
  </t-button>
  <t-button type="primary" @click="showDrawer('large')">Open Large Size (736px)</t-button>
  <a-drawer title="Basic Drawer" :size="size" :open="open" @close="onClose">
    <template #extra>
      <t-button style="margin-right: 8px" @click="onClose">Cancel</t-button>
      <t-button type="primary" @click="onClose">Submit</t-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { DrawerProps } from '@kaoniqiwa/trina-ui';
const open = ref<boolean>(false);
const size = ref<DrawerProps['size']>('default');

const showDrawer = (val: DrawerProps['size']) => {
  size.value = val;
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>
