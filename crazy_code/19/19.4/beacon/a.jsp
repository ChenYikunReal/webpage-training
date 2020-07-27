<%--
��վ: <a href="http://www.crazyit.org">���Java����</a>
author yeeku.H.lee kongyeeku@163.com
version 1.0
Copyright (C), 2001-2016, yeeku.H.Lee
This program is protected by copyright laws.
Program Name:
Date: 
--%>

<%@ page contentType="text/html; charset=GBK" language="java" errorPage=""
  import="java.io.*"%>
<%
// ʹ��IO����ȡ�ͻ���Beacon���͵�����
BufferedReader br = new BufferedReader(
  new InputStreamReader(request.getInputStream(), "utf-8"));
System.out.println("���յ�������---" + br.readLine());
%>