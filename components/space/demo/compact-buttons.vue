<docs>
---
order: 7
title:
  zh-CN: Button 紧凑布局
  en-US: Button Compact Mode
---

## zh-CN

Button 组件紧凑排列的示例。

## en-US

Button component compact example.

</docs>

<template>
  <div>
    <a-space-compact block>
      <a-tooltip title="Like">
        <t-button>
          <LikeOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Comment">
        <t-button>
          <CommentOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Star">
        <t-button>
          <StarOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Heart">
        <t-button>
          <HeartOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Share">
        <t-button>
          <ShareAltOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Download">
        <t-button>
          <DownloadOutlined />
        </t-button>
      </a-tooltip>
      <a-dropdown placement="bottomRight" :trigger="['click']">
        <t-button>
          <EllipsisOutlined />
        </t-button>

        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-space-compact>
    <br />
    <a-space-compact block>
      <t-button type="primary">Button 1</t-button>
      <t-button type="primary">Button 2</t-button>
      <t-button type="primary">Button 3</t-button>
      <t-button type="primary">Button 4</t-button>
      <a-tooltip title="Tooltip">
        <t-button type="primary" disabled>
          <DownloadOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Tooltip">
        <t-button type="primary" disabled>
          <DownloadOutlined />
        </t-button>
      </a-tooltip>
    </a-space-compact>
    <br />
    <a-space-compact block>
      <t-button>Button 1</t-button>
      <t-button>Button 2</t-button>
      <t-button>Button 3</t-button>
      <a-tooltip title="Tooltip">
        <t-button disabled>
          <DownloadOutlined />
        </t-button>
      </a-tooltip>
      <a-tooltip title="Tooltip">
        <t-button>
          <DownloadOutlined />
        </t-button>
      </a-tooltip>
      <t-button type="primary">Button 4</t-button>
      <a-dropdown placement="bottomRight" :trigger="['click']">
        <t-button type="primary">
          <EllipsisOutlined />
        </t-button>

        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-space-compact>
  </div>
</template>

<script lang="ts" setup>
import {
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  CommentOutlined,
  StarOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';
</script>
