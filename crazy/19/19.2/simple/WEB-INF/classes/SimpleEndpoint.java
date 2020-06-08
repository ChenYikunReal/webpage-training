package org.fkjava.web;

import javax.websocket.*;
import javax.websocket.server.*;
/**
 * Description:
 * <br/>��վ: <a href="http://www.crazyit.org">���Java����</a>
 * <br/>Copyright (C), 2001-2018, Yeeku.H.Lee
 * <br/>This program is protected by copyright laws.
 * <br/>Program Name:
 * <br/>Date:
 * @author Yeeku.H.Lee kongyeeku@163.com
 * @version 1.0
 */
// @ServerEndpointע�����ε��ཫ��ΪWebSocket�ķ����
@ServerEndpoint(value="/simpleSocket")
public class SimpleEndpoint
{
  @OnOpen // ��ע�����εķ�������ͻ�������ʱ������
  public void start(Session session)
  {
    System.out.println("�ͻ������ӽ����ˣ�session id:"
      + session.getId());
  }
  @OnMessage // ��ע�����εķ�������ͻ�����Ϣ����ʱ������
  public void message(String message, Session session)
    throws Exception
  {
    System.out.println("���յ���Ϣ��:" + message);
    RemoteEndpoint.Basic remote = session.getBasicRemote();
    remote.sendText("�յ����յ�����ӭ����WebSocket�����磡");
  }

  @OnClose // ��ע�����εķ�������ͻ������ӹر�ʱ������
  public void end(Session session, CloseReason closeReason)
  {
    System.out.println("�ͻ������ӹر��ˣ�session id:"
      + session.getId());
  }

  @OnError // ��ע�����εķ�������ͻ��˳���ʱ������
  public void error(Session session, Throwable throwable)
  {
    System.err.println("�ͻ������ӳ����ˣ�session id:"
      + session.getId());
  }
}
