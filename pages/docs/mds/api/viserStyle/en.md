# Style

Common styles, similar to CSS, do not elaborate.

# API

### Text style

```
interface ITextStyle {
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: number | string;
  textAlign?: string;
  fill?: string;
  lineHeight?: number;
  textBaseline?: string;
  rotate?: number;
  shadowBlur?: number;
  shadowColor?: string;
}
```

### Line style

```
interface ILineStyle {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  lineHeight?: number;
  lineDash?: number[];
  length?: number;
  textAlign?: string;
}
```
