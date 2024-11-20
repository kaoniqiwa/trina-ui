<docs>
---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.
</docs>

<template>
  <a-space direction="vertical">
    <a-space>
      <t-button type="primary">Primary</t-button>
      <t-button type="primary" disabled>Primary(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button>Default</t-button>
      <t-button disabled>Default(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button type="dashed">Dashed</t-button>
      <t-button type="dashed" disabled>Dashed(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button type="text">Text</t-button>
      <t-button type="text" disabled>Text(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button type="link">Link</t-button>
      <t-button type="link" disabled>Link(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button danger>Danger Default</t-button>
      <t-button danger disabled>Danger Default(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button danger type="text">Danger Text</t-button>
      <t-button danger type="text" disabled>Danger Text(disabled)</t-button>
    </a-space>
    <a-space>
      <t-button danger type="link">Danger Link</t-button>
      <t-button danger type="link" disabled>Danger Link(disabled)</t-button>
    </a-space>
    <div :style="{ padding: '8px', background: 'rgb(190, 200, 200)' }">
      <a-space>
        <t-button ghost>Ghost</t-button>
        <t-button ghost disabled>Ghost(disabled)</t-button>
      </a-space>
    </div>
  </a-space>
</template>
