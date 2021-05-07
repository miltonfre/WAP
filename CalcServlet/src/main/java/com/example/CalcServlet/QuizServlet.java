package com.example.CalcServlet;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "QuizServlet", value = "/QuizServlet")
public class QuizServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.loadData(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.loadData(request,response);

    }


    private void loadData(HttpServletRequest request, HttpServletResponse response) throws IOException {
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
}
