# StudyFlow

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![LocalStorage](https://img.shields.io/badge/LocalStorage-ff9800?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-Personal_Use-blue?style=for-the-badge)](#版權聲明)

StudyFlow 是一個學習效率管理系統，幫助使用者管理學習任務、專注時間以及學習統計。

本專案使用 JavaScript 開發，並結合 UI / UX 設計思考，打造一個簡單且高效率的學習管理工具。

---

# 專案網址

---

# 專案簡介

StudyFlow 是專為學生與自學者設計的學習效率工具，提供：

- 建立每日學習任務
- 使用番茄鐘專注學習
- 查看學習時間統計
- 追蹤每日學習進度

主要用於練習：

- JavaScript DOM 操作與事件處理
- LocalStorage 資料管理
- 前端專案結構設計
- UI / UX 設計思考

---

# 核心功能

## Task Management

- 新增學習任務
- 編輯任務
- 刪除任務
- 標記完成

## Pomodoro Timer

- 25分鐘專注計時
- 5分鐘休息提醒
- 自動記錄專注時間

## Learning Statistics

- 顯示每日完成任務數
- 統計每週學習進度

## Dashboard

- 今日任務列表
- 今日學習時間顯示
- 本週學習統計概覽

---

# UI / UX 設計重點

- 清晰的 Dashboard 介面
- 即時視覺回饋
- 簡潔操作流程
- 明確資訊層級

設計原則：

- Minimal UI
- 8pt Spacing System
- 清楚資訊架構

---

# 技術使用

Frontend

- HTML5
- CSS3
- JavaScript (ES6)

Data Storage

- LocalStorage

---

# 專案結構

```
studyflow/
│
├── index.html # 首頁 / 導航頁
├── dashboard.html # 儀表板頁面
├── tasks.html # 任務管理頁面
│
├── css/
│ └── style.css # 全站共用 CSS 樣式
│
├── js/
│ ├── modules/ # 功能模組
│ │ ├── taskManager.js # 任務管理邏輯
│ │ └── pomodoroTimer.js # 番茄鐘模組
│ │
│ ├── analytics/ # 統計模組
│ │ └── statistics.js # 完成任務與學習時間統計
│ │
│ └── utils/ # 工具函式
│ └── storage.js # LocalStorage 封裝
│
├── assets/
│ └── icons/ # 圖示資源
│
├── README.md # 專案說明文件
└── .gitattributes # GitHub 語言統計設定
```

---

# 安裝與啟動

1. Clone repository

```
git clone https://github.com/tinachen0326/studyflow.git
```

2. 進入專案

```
cd studyflow
```

3. 開啟專案
   直接使用瀏覽器開啟 index.html

---

# 學習重點

- JavaScript DOM 操作
- 事件處理
- LocalStorage 資料管理
- 前端專案結構設計
- UI / UX 設計思考
- GitHub 專案管理

---

# 未來優化

- 任務分類（Subject）
- 拖曳排序（Drag & Drop）
- Dark Mode
- PWA 支援
- Vue 版本重構
- 後端 API 整合

---

## 版權聲明

此專案僅供個人學習與紀錄使用，無授權任何學習教材用途與商業用途。

## 致謝

感謝所有為這個專案提供建議和協助的人。
