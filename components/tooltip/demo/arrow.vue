<docs>
---
order: 6
title:
  zh-CN: 箭头展示
  en-US: Arrow show
---

## zh-CN
支持显示、隐藏以及将箭头保持居中定位。

## en-US

Support show, hide or keep arrow in the center.
</docs>

<template>
  <div id="components-a-tooltip-demo-arrow">
    <div style="margin-bottom: 24px">
      <a-segmented v-model:value="arrow" :options="options" />
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <a-tooltip placement="topLeft" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>TL</t-button>
      </a-tooltip>
      <a-tooltip placement="top" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Top</t-button>
      </a-tooltip>
      <a-tooltip placement="topRight" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>TR</t-button>
      </a-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <a-tooltip placement="leftTop" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>LT</t-button>
      </a-tooltip>
      <a-tooltip placement="left" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Left</t-button>
      </a-tooltip>
      <a-tooltip placement="leftBottom" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>LB</t-button>
      </a-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <a-tooltip placement="rightTop" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>RT</t-button>
      </a-tooltip>
      <a-tooltip placement="right" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Right</t-button>
      </a-tooltip>
      <a-tooltip placement="rightBottom" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>RB</t-button>
      </a-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-tooltip placement="bottomLeft" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>BL</t-button>
      </a-tooltip>
      <a-tooltip placement="bottom" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>Bottom</t-button>
      </a-tooltip>
      <a-tooltip placement="bottomRight" :arrow="mergedArrow">
        <template #title>
          <span>prompt text</span>
        </template>
        <t-button>BR</t-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
const buttonWidth = 70;

const arrow = ref<string>('show');

const options = [
  {
    label: 'Show',
    value: 'show',
  },
  {
    label: 'Hide',
    value: 'hide',
  },
  {
    label: 'Center',
    value: 'center',
  },
];
const mergedArrow = computed(() => {
  switch (arrow.value) {
    case 'show':
      return true;
    case 'hide':
      return false;
    case 'center':
    default:
      return { pointAtCenter: true };
  }
});
</script>
<style scoped>
:deep(#components-a-tooltip-demo-arrow) .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
