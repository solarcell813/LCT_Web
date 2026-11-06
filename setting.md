# 網站格式設定

## 色彩（定義於各頁 `:root`）
| 變數 | 色碼 | 用途 |
|---|---|---|
| `--teal` | #294752 | 主色、標題、深色區塊背景 |
| `--rose` | #A8535C | 強調色、eyebrow 標籤、選中狀態 |
| `--tuscany` | #C9A84C | 分隔線、年份、深色區塊上的強調 |
| `--off` | #F6F4F1 | 交錯區塊背景 |
| `--light` | #EBF0F2 | placeholder 背景 |
| `--muted` | #6b8a92 | 次要文字 |
| `--border` | #d4e0e4 | 邊框 |

## 字體
- 標題：`GFS Didot`（`--font-d`）
- 內文：`Times New Roman`（`--font-b`）

## Activities 頁面區塊
| 編號 | id | 標題 | 背景 |
|---|---|---|---|
| 01 | `outings` | Outings & Gatherings | 白 |
| 02 | `exchange` | International Student Exchange | `--off` |
| 03 | `visits` | International Visits（出訪國外機構） | 白 |
| 04 | `conferences` | Conferences & Symposia | `--teal` |

- 新增區塊時，記得同步更新頂部 `.act-nav` 分頁與底部 script 的區塊 id 陣列。
- International Visits 卡片（`.visit-card`）：4:3 封面照 → 城市／國家（rose 小字）→ 參訪機構（Didot 20px）→（參訪目的，有特別寫才放）→ 底部日期（tuscany）。桌機 3 欄，手機 1 欄。點擊開啟與交換生共用的照片 modal，資料在 script 的 `VISIT_DATA`。
- 每次出訪一個資料夾：`assets/International Visits/YYYY-MM-機構名/`，檔名以 `封面_` 開頭的那張當卡片封面。

## assets 資料夾結構
- `assets/member/`：`Principal Investigator.jpg`、`PhD/`、`Master/`、`Undergraduate/`、`Past Members/`（Team 頁徽章：Ph.D. 用 teal、M.S. 用 rose、Undergrad 用 tuscany）
- `assets/Outings & Gatherings/`、`assets/International Student Exchange/`、`assets/International Visits/`、`assets/Conferences & Symposia/`：對應 Activities 各區塊
- `assets/instrument/`：儀器照片
- HTML 中路徑的空白寫成 `%20`、`&` 寫成 `%26`、`'` 寫成 `%27`
- 手機版 `.act-nav` 分頁可左右滑動（2026-11-01 新增）。
