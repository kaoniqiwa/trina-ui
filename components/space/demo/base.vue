<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <a-space>
    Space
    <t-button type="primary">Button</t-button>
    <a-upload>
      <t-button>
        <UploadOutlined />
        Click to Upload
      </t-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <t-button>Confirm</t-button>
    </a-popconfirm>
  </a-space>
</template>
<script lang="ts" setup>
import { UploadOutlined } from '@ant-design/icons-vue';
</script>
