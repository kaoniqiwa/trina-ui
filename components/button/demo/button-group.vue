<docs>
---
order: 99
title:
  zh-CN: 废弃的 Block 组
  en-US: Deprecated Button Group
debug: true
---

## zh-CN

Debug usage

## en-US

Debug usage
</docs>

<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <t-button-group>
      <t-button>Cancel</t-button>
      <t-button type="primary">OK</t-button>
    </t-button-group>
    <t-button-group>
      <t-button disabled>L</t-button>
      <t-button disabled>M</t-button>
      <t-button disabled>R</t-button>
    </t-button-group>
    <t-button-group>
      <t-button type="primary">L</t-button>
      <t-button>M</t-button>
      <t-button>M</t-button>
      <t-button type="dashed">R</t-button>
    </t-button-group>
    <h4>With Icon</h4>
    <t-button-group>
      <t-button type="primary">
        <LeftOutlined />
        Go back
      </t-button>
      <t-button type="primary">
        Go forward
        <RightOutlined />
      </t-button>
    </t-button-group>
    <t-button-group>
      <t-button type="primary">
        <template #icon><CloudOutlined /></template>
      </t-button>
      <t-button type="primary">
        <template #icon><CloudDownloadOutlined /></template>
      </t-button>
    </t-button-group>
  </div>
</template>

<script lang="ts" setup>
import {
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
} from '@ant-design/icons-vue';
</script>

<style scoped>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
```
