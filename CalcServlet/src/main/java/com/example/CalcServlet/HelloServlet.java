package com.example.CalcServlet;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet({"/","/calcValues"})
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Simple Calculator Lab!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        // Hello
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>" + message + "</h1>");
        out.println("<h1>" + message + "</h1>");
        out.println("</body></html>");
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int resultSum=0;
        int resultProd=0;
        try {
            String sumFirstNumber=request.getParameter("sumFirstNumber");
            String sumSecondNumber=request.getParameter("sumSecondNumber");

            resultSum= Integer.parseInt(sumFirstNumber)+Integer.parseInt(sumSecondNumber);
        }
        catch (NumberFormatException e)
        {
            resultSum = 0;
        }
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1> the result is</h1>");
        out.println("<h1>" + resultSum + "</h1>");
        out.println("</body></html>");

    }
    public void destroy() {
    }
}