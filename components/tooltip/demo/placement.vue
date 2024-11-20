<docs>
---
order: 1
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US

There are 12 placement options available.

</docs>

<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <a-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>TL</t-button>
      </a-tooltip>
      <a-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Top</t-button>
      </a-tooltip>
      <a-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>TR</t-button>
      </a-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <a-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>LT</t-button>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Left</t-button>
      </a-tooltip>
      <a-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>LB</t-button>
      </a-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <a-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>RT</t-button>
      </a-tooltip>
      <a-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Right</t-button>
      </a-tooltip>
      <a-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>RB</t-button>
      </a-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>BL</t-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Bottom</t-button>
      </a-tooltip>
      <a-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>BR</t-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
const buttonWidth = 70;
</script>
<style scoped>
:deep(#components-a-tooltip-demo-placement) .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
