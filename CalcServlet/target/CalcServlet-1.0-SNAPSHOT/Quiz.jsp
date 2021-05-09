<%@ page import="java.io.IOException" %>
<%@ page import="com.example.CalcServlet.Quiz" %>
<%@ page import="java.io.PrintWriter" %><%--
  Created by IntelliJ IDEA.
  User: Usuario
  Date: 9/05/2021
  Time: 11:19 a. m.
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%!
    void loadData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        Quiz quiz;
        if(session.getAttribute("quiz") ==  null){
            quiz =  new Quiz();
        }else{
            String answer = request.getParameter("answer");
            quiz = (Quiz)session.getAttribute("quiz");
            quiz.calcScore(answer);
        }
        session.setAttribute("quiz",quiz);

        String sequence= quiz.getNextQuestion();
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<form action='QuizServlet' method=\"post\">" +
                "<div><h1>The Number Quiz</h1></div>"+
                "<div>your current score is:"+quiz.getScore() +"</div>"+
                "<div>Guess the next number in the sequence</div>"+
                sequence +
                "  <div> your answer:" +
                "<input type=\"text\" required id=\"answer\" "+
                "           name=\"answer\" >"+
                "    <button type=\"submit\" class=\"btn btn-success submit-margin\">Submit</button>\n" +
                "</form>");
    }
%>

<h1>The number Quiz</h1>
Your current score is 0

Guess the next number in the sequence
<%loadData(request,response);%>
3,1,4,1,5
</body>
</html>
