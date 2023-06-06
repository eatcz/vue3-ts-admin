pdf chushihua 


```typescript
import {
  PdfjsDistConfigType,
  pdfPreviewBuilder,
  PdfPreviewConfig,
} from '@pzy915/pdf-preview'

export const baseUrl = '/pdf-preview-wk/'
const pdfjsDistRes = 'pdfjs-dist-res'
const workerSrc = `${baseUrl}${pdfjsDistRes}/build/pdf.worker.min.js`
const cMapUrl = `${baseUrl}${pdfjsDistRes}/cmaps`

const pdfjsDistConfig: PdfjsDistConfigType = {
  workerSrc,
  cMapUrl,
}

const pdfPreview = pdfPreviewBuilder(pdfjsDistConfig)
```


```
/**
 * 更新缩放比的方法. 当设置了强制宽度时, 调用该方法无效
 *
 * @param   {number}  scale  缩放比. 最小值0.5
 *
 * @return  {number}         当前实际的缩放比. 当设置了强制宽度时, 返回值永远为1
 */
export type UpdateScaleMethod = (scale: number) => number


```


```
export interface PdfPreviewConfig {
  /**
   * 初始化完成之后立刻渲染第一页. 默认:true
   * 该属性用于连续渲染
   */
  inintedRender?: boolean
  /**
   * pdf地址
   */
  pdfUrl: string
  /**
   * 承载显示pdf内容的html元素
   */
  pdfRenderContainerDom: HTMLElement
  /**
   * 缩放比例. 1表示100%, 0.5表示50%, 1.5表示150%. 最低0.5, 最高不限制. 不填默认为: 1.5
   */
  scale?: number
  /**
   * 强制保持pdf每页宽度为width指定的宽度(原本页宽大于width的会收缩,否则会拉伸), 设置了width之后, scale设置将无效
   */
  width?: number
  /**
   * 是否携带凭证(cookie信息). 不填表示false
   */
  withCredentials?: boolean
  /**
   * 自定义请求头. 可选
   */
  httpHeaders?: Record<string, unknown>
  /**
   * 每页pdf渲染完毕之后的自定义回调函数。会在每页pdf渲染完成之后插入界面之前进行调用
   *
   * @param   {PdfCanvasInfoType}  pdfPageCanvasInfo  当前页pdf渲染完毕后的canvas信息
   *
   */
  pdfPageRenderCall?: (pdfPageCanvasInfo: PdfCanvasInfoType) => void
}


```

```
interface PdfCanvasInfoType {
  /**
   * 当前页pdf渲染完毕后的canvas
   */
  pdfPageCanvas: HTMLCanvasElement
  /**
   * pdfPageCanvas的宽度
   */
  width: number
  /**
   * pdfPageCanvas的高度
   */
  height: number
}


```


```vue
<!--

@file: Demo04.vue
@author: pan
-->
<script lang="ts">
export default {
  name: 'Demo04',
}
</script>
<script setup lang="ts">
import { UpdateScaleMethod } from '@pzy915/pdf-preview'
import { onMounted, ref } from 'vue'
import { baseUrl, loadPdfAndRender } from './PdfUtil'

const pdfPreviewRef = ref<HTMLDivElement>()
const pdfUrl = `${baseUrl}测试.pdf`
const updateScaleMethod = ref<UpdateScaleMethod>()

async function pdfOperatorInit() {
  if (!pdfPreviewRef.value) return
  updateScaleMethod.value = await loadPdfAndRender({
    pdfUrl,
    width: 500,
    pdfRenderContainerDom: pdfPreviewRef.value,
  })
}

onMounted(() => {
  pdfOperatorInit()
})
</script>

<template>
  <div class="pdfPreview">
    <div class="centerPanel">
      <div ref="pdfPreviewRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pdfPreview {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  .mb10 {
    margin-bottom: 10px;
  }
  .centerPanel {
    flex: 1;
    height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

<style lang="scss">
.pdfPreviewCanvas {
  margin-bottom: 10px;
}
</style>


```



## pdfUtils.js

```javascript
import {
  PdfjsDistConfigType,
  pdfPreviewBuilder,
  PdfPreviewConfig,
} from '@pzy915/pdf-preview'

export const baseUrl = '/pdf-preview-wk/'
const pdfjsDistRes = 'pdfjs-dist-res'
const workerSrc = `${baseUrl}${pdfjsDistRes}/build/pdf.worker.js`
const cMapUrl = `${baseUrl}${pdfjsDistRes}/cmaps/`

const pdfjsDistConfig: PdfjsDistConfigType = {
  workerSrc,
  cMapUrl,
}

const pdfPreview = pdfPreviewBuilder(pdfjsDistConfig)

/**
 * 加载pdf文件，并完整渲染
 *
 * @param pdfUrl pdf地址
 * @param scale 缩放比
 * @param pdfRenderContainerDom 渲染pdf的容器dom节点
 */
export function loadPdfAndRender(pdfConfig: PdfPreviewConfig) {
  return pdfPreview.loadPdfAndRender(pdfConfig)
}

/**
 * 获取pdf预览的操作信息
 *
 * @param pdfConfig pdf预览配置信息
 */
export function loadPdfDocOperateInfo(pdfConfig: PdfPreviewConfig) {
  return pdfPreview.loadPdfDocOperateInfo(pdfConfig)
}

/**
 * 绘制水印, 并返回水印的canvas
 *
 * @return  {HTMLCanvasElement}  水印的canvas
 */
export function drawWatermark() {
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200

  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.rotate((-18 * Math.PI) / 180)
  ctx.font = '14px Vedana'
  ctx.fillStyle = '#ffccc7'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText('大王我是张飞呀', 0, 50)

  return canvas
}



```



```vue
<!--

@author: pan
-->
<script lang="ts">
export default {
  name: 'Demo03',
}
</script>
<script setup lang="ts">
import { UpdateScaleMethod } from '@pzy915/pdf-preview'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { baseUrl, loadPdfAndRender } from './PdfUtil'

const pdfPreviewRef = ref<HTMLDivElement>()
const scale = ref<number>(1)
const updateScaleMethod = ref<UpdateScaleMethod>()

async function pdfOperatorInit() {
  if (!pdfPreviewRef.value) return
  const res = await axios.get(
    'http://192.168.31.200:3000/v1/test/download-pdf',
    { responseType: 'blob' }
  )

  const flowData = res.data
  let blob = new Blob([flowData], { type: 'application/pdf' }) //文件流转为blob
  const buffer = await blob.arrayBuffer()

  updateScaleMethod.value = await loadPdfAndRender({
    data: new Uint8Array(buffer),
    scale: scale.value,
    pdfRenderContainerDom: pdfPreviewRef.value,
  })
}

function onChangeScale(scalePlusVal: number) {
  if (!updateScaleMethod.value) return
  scale.value += scalePlusVal
  scale.value = updateScaleMethod.value(scale.value)
}

onMounted(() => {
  pdfOperatorInit()
})
</script>

<template>
  <div class="pdfPreview">
    <div class="topPanel">
      <div class="mb10">
        <el-button size="small" @click="onChangeScale(0.5)">放大</el-button>
        <el-button size="small" @click="onChangeScale(-0.5)">缩小</el-button>
      </div>
      <div>当前缩放比:{{ scale }}</div>
    </div>
    <div class="centerPanel">
      <div ref="pdfPreviewRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pdfPreview {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  .mb10 {
    margin-bottom: 10px;
  }
  .topPanel {
    height: 100px;
    flex-shrink: 0;
  }
  .centerPanel {
    flex: 1;
    height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

<style lang="scss">
.pdfPreviewCanvas {
  margin-bottom: 10px;
}
</style>


```