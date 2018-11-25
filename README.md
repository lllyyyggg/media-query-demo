# `媒体查询用来实现响应式布局`

### `设备特性`

```
width	匹配浏览器宽度
height	匹配浏览器高度
aspect-ratio	匹配浏览器的宽度值和高度值的比例
device-width	匹配设备分辨率的宽度值
device-height	匹配设备分辨率的高度值
device-aspect-ratio	匹配设备分辨率的宽度值与高度值的比例
color	匹配设备使用多少位的色深,比如真彩色是32,如果不是彩色设备则为 0
color-index	匹配色彩表中的颜色数
monochrome	匹配单色帧缓冲器中每像素的位(bit)数,如果不是单色设备,这个数值为 0
resolution	匹配设备的物理分辨率
scan	匹配设备的扫描方式,其中 progressive 代表逐行扫描, interlace 代表隔行扫描
grid	匹配设备是否基于栅格,1代表基于栅格,0代表其他类型
```


###### `通过浏览器的大小来改变文字的大小。`

```
@media screen and (min-width:321px) and (max-width:375px){
html{font-size:11px}}
@media screen and (min-width:376px) and (max-width:414px){
html{font-size:12px}}
@media screen and (min-width:415px) and (max-width:639px){
html{font-size:15px}}
@media screen and (min-width:640px) and (max-width:719px){
html{font-size:20px}}
@media screen and (min-width:720px) and (max-width:749px){
html{font-size:22.5px}}
@media screen and (min-width:750px) and (max-width:799px){
html{font-size:23.5px}}
@media screen and (min-width:800px)
{html{font-size:25px}}
```
大家可以看到,在代码中首先获取的设备类型是我们的屏幕。之后通过and设备特性来进行的文字大小修改。


###### `通过浏览器的大小来改变浏览器的布局`

```
<div className='container'>
    <div className='left'>
         Left
    </div>
    <div className='right'>
         Right
    </div>
</div>
```       

```
@media screen and (min-width: 1000px) {
  .left {
    border: solid 1px black;
    width: 49.8%;
    float: left;
  }
  
  .right {
    border: solid 1px blue;
    width: 49.8%;
    float: left;
  }
}

@media screen and (max-width: 999px) {
  .left {
    border: solid 1px green;
    
    
  }
  
  .right {
    border: solid 1px red;
    
    
  }
}
```

