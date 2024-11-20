<docs>
---
order: 12
title:
  zh-CN: 使用useModal获取上下文
  en-US: Use useModal to get context
---

## zh-CN

通过 `Modal.useModal` 创建支持读取 context 的 `contextHolder`。

## en-US

Use `Modal.useModal` to get `contextHolder` with context accessible issue.

</docs>

<template>
  <a-space wrap>
    <t-button @click="showConfirm">Confirm</t-button>
    <t-button @click="showPromiseConfirm">With promise</t-button>
    <t-button type="dashed" @click="showDeleteConfirm">Delete</t-button>
    <t-button type="dashed" @click="showPropsConfirm">With extra props</t-button>
    <contextHolder />
  </a-space>
</template>

<script lang="ts" setup>
import { Modal } from '@kaoniqiwa/trina-ui';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
const [modal, contextHolder] = Modal.useModal();
const showConfirm = () => {
  modal.confirm({
    title: 'Do you Want to delete these items?',
    icon: h(ExclamationCircleOutlined),
    content: h('div', { style: 'color:red;' }, 'Some descriptions'),
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
    class: 'test',
  });
};
const showDeleteConfirm = () => {
  modal.confirm({
    title: 'Are you sure delete this task?',
    icon: h(ExclamationCircleOutlined),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showPropsConfirm = () => {
  modal.confirm({
    title: 'Are you sure delete this task?',
    icon: h(ExclamationCircleOutlined),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

function showPromiseConfirm() {
  modal.confirm({
    title: 'Do you want to delete these items?',
    icon: h(ExclamationCircleOutlined),
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    async onOk() {
      try {
        return await new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        });
      } catch {
        return console.log('Oops errors!');
      }
    },
    onCancel() {},
  });
}
</script>
