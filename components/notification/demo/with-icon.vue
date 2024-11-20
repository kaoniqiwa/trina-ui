<docs>
---
order: 2
title:
  zh-CN: 带有图标的通知提醒框
  en-US: Notification with icon
---

## zh-CN

通知提醒框左侧有图标。

## en-US

A notification box with a icon at the left side.

</docs>

<template>
  <div>
    <t-button @click="() => openNotificationWithIcon('success')">Success</t-button>
    <t-button @click="() => openNotificationWithIcon('info')">Info</t-button>
    <t-button @click="() => openNotificationWithIcon('warning')">Warning</t-button>
    <t-button @click="() => openNotificationWithIcon('error')">Error</t-button>
  </div>
</template>
<script lang="ts" setup>
import { notification } from '@kaoniqiwa/trina-ui';
const openNotificationWithIcon = (type: string) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
</script>
