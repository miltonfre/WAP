package com.example.CalcServlet;

public class Quiz {
    private String[] questionList;
    static String[] answers;
    private int currentQuestion;
    private int score;

    public Quiz(){
        currentQuestion=0;
        score=0;
        this.questionList = new String[]{
                "3,1,4,1,5", //pi
                "1,1,2,3,5", //fibonacci
                "1,4,9,16,25", //squares
                "2,5,3,7,11", //primer
                "1,2,4,8,12", //power of 2
        };
        answers= new String[]{"9", "8", "36", "13", "32"};
    }
    public void calcScore(String answer){
        int temp = currentQuestion ;
        if( checkAnswer(answer)) this.score++;
    }
    public int getScore(){
        return this.score;
    }
    private boolean checkAnswer(String answer){
        int temp = currentQuestion;
        return this.answers[temp]==answer;
    }
    public String getNextQuestion(){
        if(currentQuestion >= questionList.length){
            return null;
        }else{
            return this.questionList[currentQuestion++];
        }
    }

    public int getTotalScore(){
        return this.questionList.length;
    }

}
