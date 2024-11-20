<docs>
---
order: 5
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

使用 `placement` 可以配置通知从右上角、右下角、左下角、左上角弹出。

## en-US

A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport via `placement`.

</docs>

<template>
  <div>
    <t-button type="primary" @click="openNotification('top')">
      <template #icon><BorderTopOutlined /></template>
      top
    </t-button>
    <t-button type="primary" @click="openNotification('bottom')">
      <template #icon><BorderBottomOutlined /></template>
      bottom
    </t-button>
    <t-button type="primary" @click="openNotification('topLeft')">
      <template #icon><radius-upleft-outlined /></template>
      topLeft
    </t-button>
    <t-button type="primary" @click="openNotification('topRight')">
      <template #icon><radius-upright-outlined /></template>
      topRight
    </t-button>
    <a-divider />
    <t-button type="primary" @click="openNotification('bottomLeft')">
      <template #icon><radius-bottomleft-outlined /></template>
      bottomLeft
    </t-button>
    <t-button type="primary" @click="openNotification('bottomRight')">
      <template #icon><radius-bottomright-outlined /></template>
      bottomRight
    </t-button>
  </div>
</template>
<script lang="ts" setup>
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  BorderTopOutlined,
  BorderBottomOutlined,
} from '@ant-design/icons-vue';
import { notification } from '@kaoniqiwa/trina-ui';
import type { NotificationPlacement } from '@kaoniqiwa/trina-ui';
const openNotification = (placement: NotificationPlacement) => {
  notification.open({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};
</script>
