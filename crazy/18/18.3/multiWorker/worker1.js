onmessage = function(event)
{
  // ��������ȡ������
  var data = JSON.parse(event.data);
  // ȡ��start����
  var start = data.start;
  // ȡ��end����
  var end = data.end;
  var result = "";
  search:
  for (var n = start; n <= end; n++)
  {
    for (var i = 2; i <= Math.sqrt(n); i ++)
    {
      // �������n������Ϊ0����ʼ�ж���һ�����֡�
      if (n % i == 0)
      {
        continue search;
      }
    }
    // �Ѽ��ҵ�������
    result += (n + ",");
  }
  // ����Ҫ���������ݴ���������Worker�̵߳������ű���
  postMessage(result);
}