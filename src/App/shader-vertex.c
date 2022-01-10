attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_matrix;

varying vec4 v_color;

void main()
{
    vec4 temp = u_matrix * a_position;

    // 表示眼睛距离vec4(0.0,0.0,1.0)的距离
    float dist = 2.0;

    // 使用投影直接计算
    // 此处要注意z轴承显示和实际的方向是相反的
    gl_Position = vec4((dist + 1.0) * temp.x / (dist + temp.z), (dist + 1.0) * temp.y / (dist + temp.z), temp.z, 1.0);

    v_color = a_color;
}
