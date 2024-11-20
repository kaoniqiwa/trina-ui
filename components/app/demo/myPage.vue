<template>
  <a-space>
    <t-button type="primary" @click="showMessage">Open message</t-button>
    <t-button type="primary" @click="showModal">Open modal</t-button>
    <t-button type="primary" @click="showNotification">Open notification</t-button>
  </a-space>
</template>

<script setup lang="ts">
import { App } from '@kaoniqiwa/trina-ui';

const { message, modal, notification } = App.useApp();

const showMessage = () => {
  message.success('Success!');
};

const showModal = () => {
  modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const showNotification = () => {
  notification.info({
    message: `Notification topLeft`,
    description: 'Hello, Ant Design Vue!!',
    placement: 'topLeft',
  });
};
</script>
