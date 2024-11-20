<docs>
---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</docs>

<template>
  <a-space direction="vertical">
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <a-space>
      <t-button type="primary" :size="size">Primary</t-button>
      <t-button :size="size">Normal</t-button>
      <t-button type="dashed" :size="size">Dashed</t-button>
      <t-button danger :size="size">Danger</t-button>
      <t-button type="link" :size="size">Link</t-button>
    </a-space>
    <a-space>
      <t-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </t-button>
      <t-button type="primary" shape="circle" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </t-button>
      <t-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </t-button>
      <t-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </t-button>
      <t-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </t-button>
    </a-space>
  </a-space>
</template>
<script lang="ts" setup>
import { DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from '@kaoniqiwa/trina-ui/es/config-provider';
import { ref } from 'vue';
const size = ref<SizeType>('large');
</script>
