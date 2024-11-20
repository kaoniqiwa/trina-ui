<docs>
---
order: 5
title:
  zh-CN: 多个按钮组合
  en-US: Multiple Buttons
---

## zh-CN

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 [Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button) 中组合使用。

## en-US

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into [Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button).
</docs>

<template>
  <a-space>
    <t-button type="primary">Primary</t-button>
    <t-button>secondary</t-button>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">1st item</a-menu-item>
          <a-menu-item key="2">2nd item</a-menu-item>
          <a-menu-item key="3">3rd item</a-menu-item>
        </a-menu>
      </template>
      <t-button>
        Actions
        <DownOutlined />
      </t-button>
    </a-dropdown>
  </a-space>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from '@kaoniqiwa/trina-ui';
const handleMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
</script>
