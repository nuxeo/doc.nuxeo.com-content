---
title: Color
description: Design color usage
review:
  comment: ''
  date: ''
  status: ok
tree_item_index: 200
toc: true
---

## Colors anatomy

The core Blue family serves as the primary action, guiding users on their journey.

![Blue Family]({{file name='img_3.png'}})

Neutral grays provide a backdrop of light and dark themes.

![Gray Family]({{file name='img_4.png'}})

Extended colors are used sparingly for emphasis, impact, and functional alerts.

![Extended Family]({{file name='img_5.png'}})

## Accessibility

The color families in our palette contain ten values from 10 to 100. White and Black sit outside those values. Black text is WCAG AA accessible on colors ranging from 10 to 50. White text is accessible on colors from 60 to 100.

![]({{file name='img_6.png'}})

## Interaction states

### Hover

The hover state is one full step lighter for values between 100 and 70, and one full step darker for values between 60 and 10. For example, the Blue 60 hover state is Blue 70. The exception is that White shares the same hover state as Gray 10, and Black shares the same hover state as Gray 100.

### Active

The active state is two full steps lighter for values between 100 and 70, and two full steps darker for values between 60 and 10. For example, the Blue 60 active state is Blue 80. The exception is that White shares the same active state as Gray 10, and Black shares the same active state as Gray 100.

### Focus

The focus state usually appears as a Blue 60 border in the light theme and as a White border in the dark theme.

### Disabled

Disabled components are unavailable for interaction, so they don’t receive hover or focus and are not subject to WC3 contrast compliance standards. For the dark themes, disabled values are two full steps lighter than their respective background. For light themes, they are two full steps darker. The exception is that the White theme disabled value is Gray 30.

## Color palettes

### Blue and Gray

| Blue     |           |                                        |     | Gray     |           |                                        |
| -------- | --------- | -------------------------------------- | --- | -------- | --------- | -------------------------------------- |
| Blue 100 | `#001433` | ![#001433]({{file name='img_7.png'}})  |     | Gray 100 | `#161616` | ![#161616]({{file name='img_8.png'}})  |
| Blue 90  | `#002255` | ![#002255]({{file name='img_9.png'}})  |     | Gray 90  | `#262626` | ![#262626]({{file name='img_10.png'}}) |
| Blue 80  | `#003D99` | ![#003D99]({{file name='img_11.png'}}) |     | Gray 80  | `#393939` | ![#393939]({{file name='img_12.png'}}) |
| Blue 70  | `#0052CC` | ![#0052CC]({{file name='img_13.png'}}) |     | Gray 70  | `#525252` | ![#525252]({{file name='img_14.png'}}) |
| Blue 60  | `#0066ff` | ![#0066ff]({{file name='img_15.png'}}) |     | Gray 60  | `#6F6F6F` | ![#6F6F6F]({{file name='img_16.png'}}) |
| Blue 50  | `#448FFF` | ![#448FFF]({{file name='img_17.png'}}) |     | Gray 50  | `#8D8D8D` | ![#8D8D8D]({{file name='img_18.png'}}) |
| Blue 40  | `#66A3FF` | ![#66A3FF]({{file name='img_19.png'}}) |     | Gray 40  | `#A8A8A8` | ![#A8A8A8]({{file name='img_20.png'}}) |
| Blue 30  | `#99C2FF` | ![#99C2FF]({{file name='img_21.png'}}) |     | Gray 30  | `#C6C6C6` | ![#C6C6C6]({{file name='img_22.png'}}) |
| Blue 20  | `#CCE0FF` | ![#CCE0FF]({{file name='img_23.png'}}) |     | Gray 20  | `#E0E0E0` | ![#E0E0E0]({{file name='img_24.png'}}) |
| Blue 10  | `#EEF5FF` | ![#EEF5FF]({{file name='img_25.png'}}) |     | Gray 10  | `#F4F4F4` | ![#F4F4F4]({{file name='img_26.png'}}) |

### Red and Green

| Red     |           |                                        |     | Green     |           |                                        |
| ------- | --------- | -------------------------------------- | --- | --------- | --------- | -------------------------------------- |
| Red 100 | `#2D0709` | ![#2D0709]({{file name='img_27.png'}}) |     | Green 100 | `#071908` | ![#071908]({{file name='img_28.png'}}) |
| Red 90  | `#520408` | ![#520408]({{file name='img_29.png'}}) |     | Green 90  | `#022D0D` | ![#022D0D]({{file name='img_30.png'}}) |
| Red 80  | `#750E13` | ![#750E13]({{file name='img_31.png'}}) |     | Green 80  | `#044317` | ![#044317]({{file name='img_32.png'}}) |
| Red 70  | `#A2191F` | ![#A2191F]({{file name='img_33.png'}}) |     | Green 70  | `#0E6027` | ![#0E6027]({{file name='img_34.png'}}) |
| Red 60  | `#DA1E28` | ![#DA1E28]({{file name='img_35.png'}}) |     | Green 60  | `#198038` | ![#198038]({{file name='img_36.png'}}) |
| Red 50  | `#FA4D56` | ![#FA4D56]({{file name='img_37.png'}}) |     | Green 50  | `#24A148` | ![#24A148]({{file name='img_38.png'}}) |
| Red 40  | `#FF8389` | ![#FF8389]({{file name='img_39.png'}}) |     | Green 40  | `#42BE65` | ![#42BE65]({{file name='img_40.png'}}) |
| Red 30  | `#FFB3B8` | ![#FFB3B8]({{file name='img_41.png'}}) |     | Green 30  | `#6FDC8C` | ![#6FDC8C]({{file name='img_42.png'}}) |
| Red 20  | `#FFD7D9` | ![#FFD7D9]({{file name='img_43.png'}}) |     | Green 20  | `#A7F0BA` | ![#A7F0BA]({{file name='img_44.png'}}) |
| Red 10  | `#FFF1F1` | ![#FFF1F1]({{file name='img_45.png'}}) |     | Green 10  | `#DEFBE6` | ![#DEFBE6]({{file name='img_46.png'}}) |

### Purple and Others

| Purple     |           |                                        |     | Others |           |                                        |
| ---------- | --------- | -------------------------------------- | --- | ------ | --------- | -------------------------------------- |
| Purple 100 | `#1B0F30` | ![#1B0F30]({{file name='img_47.png'}}) |     | Yellow | `#F1C21B` | ![#F1C21B]({{file name='img_48.png'}}) |
| Purple 90  | `#520408` | ![#520408]({{file name='img_49.png'}}) |     | Black  | `#000000` | ![#000000]({{file name='img_50.png'}}) |
| Purple 80  | `#750E13` | ![#750E13]({{file name='img_51.png'}}) |     | White  | `#ffffff` | ![#ffffff]({{file name='img_52.png'}}) |
| Purple 70  | `#A2191F` | ![#A2191F]({{file name='img_53.png'}}) |     |        |           |                                        |
| Purple 60  | `#DA1E28` | ![#DA1E28]({{file name='img_54.png'}}) |     |        |           |                                        |
| Purple 50  | `#FA4D56` | ![#FA4D56]({{file name='img_55.png'}}) |     |        |           |                                        |
| Purple 40  | `#FF8389` | ![#FF8389]({{file name='img_56.png'}}) |     |        |           |                                        |
| Purple 30  | `#FFB3B8` | ![#FFB3B8]({{file name='img_57.png'}}) |     |        |           |                                        |
| Purple 20  | `#E8DAFF` | ![#E8DAFF]({{file name='img_58.png'}}) |     |        |           |                                        |
| Purple 10  | `#F6F2FF` | ![#F6F2FF]({{file name='img_59.png'}}) |     |        |           | &nbsp;                                 |
