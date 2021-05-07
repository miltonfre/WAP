package com.example.CalcServlet;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet({"/calcValues"})
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Simple Calculator Lab!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
       /* response.setContentType("text/html");

        // Hello
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>" + message + "</h1>");
        out.println("</body></html>");*/
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int resultSum=0;
        int resultProd=0;
        String sumFirstNumber=request.getParameter("sumFirstNumber");
        String sumSecondNumber=request.getParameter("sumSecondNumber");
        String mulFirstNumber=request.getParameter("mulFirstNumber");
        String mulSecondNumber=request.getParameter("mulSecondNumber");

        try {
            resultSum= Integer.parseInt(sumFirstNumber)+Integer.parseInt(sumSecondNumber);
            resultProd= Integer.parseInt(mulFirstNumber)*Integer.parseInt(mulSecondNumber);
        }
        catch (NumberFormatException e)
        {
            resultSum = 0;
            resultSum=0;
        }
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1> the result is</h1>");
        out.println("<h4>" +sumFirstNumber +" + " +sumSecondNumber +":"+ resultSum + "</h4>");
        out.println("<br/><h4>" +mulFirstNumber +" * " +mulSecondNumber +":"+ resultProd + "</h4>");
        out.println("</body></html>");

    }
    public void destroy() {
    }
}