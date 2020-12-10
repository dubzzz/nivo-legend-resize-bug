# nivo-legend-resize-bug

**Problem:**

Legend and chart are not synced on resize

**Details:**

In the attached reproduction scenario, whenever resizing the windows, the chart is supposed to ajust itself and feel the whole window.

In development bundle - _`yarn start`_ - everything works properly.

In production bundle - _`yarn build && npm serve -s build`_ - when resizing the chart is properly resized but the legend does not follow.
