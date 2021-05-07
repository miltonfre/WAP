package com.example.CalcServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet({"/calcValuesImproved"})
public class CalcImprovedServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Simple Calculator Lab!";
    }

    //public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    //}
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        int resultSum=0;
        int resultProd=0;
        String sumFirstNumber=request.getParameter("sumFirstNumber");
        String sumSecondNumber=request.getParameter("sumSecondNumber");
        String mulFirstNumber=request.getParameter("mulFirstNumber");
        String mulSecondNumber=request.getParameter("mulSecondNumber");
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();




        try {
            resultSum= Integer.parseInt(sumFirstNumber)+Integer.parseInt(sumSecondNumber);
            resultProd= Integer.parseInt(mulFirstNumber)*Integer.parseInt(mulSecondNumber);
        }
        catch (NumberFormatException e)
        {
            resultSum = 0;
            resultProd=0;
        }
        out.println("<form action='calcValuesImproved' method=\"post\">" +
                "<form action=\"calcValuesImproved\" method=\"post\">\n" +
                "  <div>" +
                "<input type=\"text\" required id=\"sumFirstNumber\" placeholder=\"Enter First Number\"\n" +
                "           name=\"sumFirstNumber\" value=\""+sumFirstNumber+"\"/> <label>+</label>\n" +
                "        <input type=\"text\" required id=\"sumSecondNumber\" placeholder=\"Enter Second Number\"\n" +
                "               name=\"sumSecondNumber\" value=\""+sumSecondNumber+"\"/>" +
                "<label>=</label>\n" +
                "    <input type=\"text\"  id=\"resultSum\" disabled\n" +
                "           name=\"resultSum\"  value=\""+resultSum+"\"/>\n" +
                "    </div>\n" +
                "    <div>\n" +
                "        <input type=\"text\" required id=\"mulFirstNumber\" placeholder=\"Enter First Number\"\n" +
                "               name=\"mulFirstNumber\" value=\""+mulFirstNumber+"\"/>\n" +
                "        <label>*</label>\n" +
                "        <input type=\"text\" required id=\"mulSecondNumber\" placeholder=\"Enter Second Number\"\n" +
                "               name=\"mulSecondNumber\" value=\""+mulSecondNumber+"\"/>\n" +
                "    <label>=</label>\n" +
                "    <input type=\"text\"  id=\"resultProd\" disabled" +
                "           name=\"resultProd\" value=\""+resultProd+"\"/></div>\n" +
                "    <button type=\"submit\" class=\"btn btn-success submit-margin\">Submit</button>\n" +
                "</form>");
    }
    public void destroy() {
    }
}