# Obj文件描述

Obj文件可以是ASCII的编码(.obj)方式也可以是二进制格式(.mod)，以ASCII格式存储的obj文件必须用.obj作为文件拓展名。

```python
# Blender v2.83.1 OBJ File: ''
# www.blender.org
mtllib cube.mtl #这里是引用了一个外部材质文件cube.mtl
o Cube #指定了模型名称
v 1.000000 1.000000 -1.000000 #开始按照如下格式定义顶点坐标，v x y z [w], 共计定义了立方体的八个顶点坐标
v 1.000000 -1.000000 -1.000000
v 1.000000 1.000000 1.000000
v 1.000000 -1.000000 1.000000
v -1.000000 1.000000 -1.000000
v -1.000000 -1.000000 -1.000000
v -1.000000 1.000000 1.000000
v -1.000000 -1.000000 1.000000
vt 0.625000 0.500000
vt 0.875000 0.500000
vt 0.875000 0.750000
vt 0.625000 0.750000
vt 0.375000 0.750000
vt 0.625000 1.000000
vt 0.375000 1.000000
vt 0.375000 0.000000
vt 0.625000 0.000000
vt 0.625000 0.250000
vt 0.375000 0.250000
vt 0.125000 0.500000
vt 0.375000 0.500000
vt 0.125000 0.750000
vn 0.0000 1.0000 0.0000
vn 0.0000 0.0000 1.0000
vn -1.0000 0.0000 0.0000
vn 0.0000 -1.0000 0.0000
vn 1.0000 0.0000 0.0000
vn 0.0000 0.0000 -1.0000
usemtl Material #指定使用外部材质文件中某一个材质, 格式为usemtl 材质名称(比如这里，就是用了cube.mtl里面定义的那个材质)
s off
f 1/1/1 5/2/1 7/3/1 3/4/1 #开始定义材质1的表面 f v1//vn1  v2//vn2   v3//vn3   v4//vn4, 这里是我之前定义的顶点索引值
f 4/5/2 3/4/2 7/6/2 8/7/2 #其中vn1, vn2, vn3, vn4是法线向量的索引值， 这个顶点索引和法线向量的索引值都是从1开始的哈
f 8/8/3 7/9/3 5/10/3 6/11/3
f 6/12/4 2/13/4 4/5/4 8/14/4
f 2/13/5 1/1/5 3/4/5 4/5/5
f 6/11/6 5/10/6 1/1/6 2/13/6
```

