## 特点

这里我们讨论下 Viser 和 G2 的差异之处，这里我们以 viser-react 举例，以便于您的理解。

#### dataKey 字段映射

对于字段映射的方式，viser 使用 `dataKey` 的方式来设置，与其它属性并列，比如在设置 `scale` 时：

```js
// G2
chart.scale({
  x: {
    sync: true
  },
  y: {
    sync: true
  }
});

// Viser-react
const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];
```

其它的类似于 Legend, Axis 等字段映射使用同样的方式。但在 Gemo 中不是对单个字段映射的处理方式不同。因为 Gemo 的设置往往非常复杂，在 g2 中也是不定参数，不定形式，因此使用数组的方式来表达。比如 label 属性：

```js
// G2
nodeView.polygon()
.position('x*y')
.color('id')
.label('name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c'
  }
});

// Viser-react
const label = [
  'name', {
    labelEmit: true,
    textStyle: {
      fill: '#8c8c8c'
    },
  }
];
<Polygon position='x*y' color='id' label={label} />
```

### Series 中 Gemo 快速类型

参数 Series 用于表示 G2 中 `gemo` 的相关内容。我们直接使用了具体的名称来表示组件，例如 bar 和 line 等。这样方便语义化的使用，我们提供所有的类型有 Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, JitterPoint, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey。

具体举例，比如：

```js
// G2
chart.line().position('year*value');

// Viser-react
<Line position="year*value" />
```

### Coord

参数 Coord 用于表示 G2 中 coord 的相关内容。但是我们提供了 `direction` 这一优化后的参数用来展现 G2 中的 `transpose`, `reflect` 和 `scale` 这几个属性。这里提供对应方位 8 个位置，分别有 BL, BR, LT, LB, RB, RT, TL, TR。B 代表 bottom, T 代表 top，L 代表 left，R 代表 right。组合代表排布的初始位置。

具体举例，比如：

```js
// G2
chart.coord().transpose().scale(1, -1);

// Viser-react
<Coord type="rect" direction="LT" />
```

### Formatter 格式化方法

我们使用了 `d3-format` 来增强 `label` 的回调函数能力，也就是说简单场景下的数据格式化，可以直接用格式化表达式来完成。

```js
// G2
chart.scale({
  percent: {
    min: 0,
    formatter(val) {
      return (val * 100).toFixed(2) + '%';
    }
  }
});

// Viser-react
const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];
```