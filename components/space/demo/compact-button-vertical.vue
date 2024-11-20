<docs>
---
order: 8
title:
  zh-CN: 垂直方向紧凑布局
  en-US: Vertical Compact Mode
---

## zh-CN

垂直方向的紧凑布局，目前仅支持 Button 组合。

## en-US

Vertical Mode for Space.Compact, support Button only.

</docs>

<template>
  <a-space>
    <a-space-compact direction="vertical">
      <t-button>Button 1</t-button>
      <t-button>Button 2</t-button>
      <t-button>Button 3</t-button>
    </a-space-compact>
    <a-space-compact direction="vertical">
      <t-button type="dashed">Button 1</t-button>
      <t-button type="dashed">Button 2</t-button>
      <t-button type="dashed">Button 3</t-button>
    </a-space-compact>
    <a-space-compact direction="vertical">
      <t-button type="primary">Button 1</t-button>
      <t-button type="primary">Button 2</t-button>
      <t-button type="primary">Button 3</t-button>
    </a-space-compact>
  </a-space>
</template>
