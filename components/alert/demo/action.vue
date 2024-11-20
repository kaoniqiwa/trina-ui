<docs>
---
order: 0
title:
  zh-CN: 操作
  en-US: Action
---

## zh-CN

可以在右上角自定义操作项。

## en-US

Custom action.

</docs>

<template>
  <a-space direction="vertical" style="width: 100%">
    <a-alert message="Success Tips" type="success" show-icon closable>
      <template #action>
        <t-button size="small" type="text">UNDO</t-button>
      </template>
    </a-alert>
    <a-alert
      message="Error Text"
      show-icon
      description="Error Description Error Description Error Description Error Description"
      type="error"
    >
      <template #action>
        <t-button size="small" danger>Detail</t-button>
      </template>
    </a-alert>
    <a-alert message="Warning Text" type="warning" closable>
      <template #action>
        <a-space>
          <t-button size="small" type="ghost">Done</t-button>
        </a-space>
      </template>
    </a-alert>
    <a-alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      closable
    >
      <template #action>
        <a-space direction="vertical">
          <t-button size="small" type="primary">Accept</t-button>
          <t-button size="small" danger type="ghost">Decline</t-button>
        </a-space>
      </template>
    </a-alert>
  </a-space>
</template>
