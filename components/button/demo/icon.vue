<docs>
---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`.

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.
</docs>

<template>
  <a-space direction="vertical">
    <a-space warp>
      <a-tooltip title="search">
        <t-button type="primary" shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <t-button type="primary" shape="circle">A</t-button>
      <t-button type="primary" :icon="h(SearchOutlined)">Search</t-button>
      <a-tooltip title="search">
        <t-button shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <t-button :icon="h(SearchOutlined)">Search</t-button>
    </a-space>
    <a-space warp>
      <a-tooltip title="search">
        <t-button shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <t-button :icon="h(SearchOutlined)">Search</t-button>
      <a-tooltip title="search">
        <t-button type="dashed" shape="circle" :icon="h(SearchOutlined)" />
      </a-tooltip>
      <t-button type="dashed" :icon="h(SearchOutlined)">Search</t-button>
      <t-button :icon="h(SearchOutlined)" href="https://www.google.com" />
    </a-space>
  </a-space>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
</script>
