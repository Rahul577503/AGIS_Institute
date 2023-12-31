"use client";
import React, { useState, useEffect } from "react";
import { quizData } from "@/constants/quizData";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  const handleAnswerSelection = (
    questionIndex: number,
    selectedOption: number
  ) => {
    if (selectedOptionIndex === selectedOption) {
      setSelectedOptionIndex(null); // Reset if clicked again
    } else {
      setSelectedOptionIndex(selectedOption);
    }

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    const handleTimer = () => {
      if (startQuiz && !showResults) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              handleEndQuiz();
              return prevTime;
            }
          });
        }, 1000);
      }
    };

    handleTimer();

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startQuiz, showResults]);

  const handleStartQuiz = () => {
    if (selectedCategory && selectedLevel && selectedType) {
      setStartQuiz(true);
    } else {
      alert("Please select category, level, and type.");
    }
  };

  const handleEndQuiz = () => {
    let score = 0;
    const selectedQuiz = quizData.find(
      (quiz) =>
        quiz.category === selectedCategory &&
        quiz.level === selectedLevel &&
        quiz.type === selectedType
    );

    if (selectedQuiz) {
      selectedQuiz.questions.forEach((question, index) => {
        console.log("Question:", question.question);
        console.log("Selected Answer:", selectedAnswers[index]);
        console.log("Correct Answer Index:", question.correctAnswer);

        // Adjusting for indexing difference
        if (question.correctAnswer === selectedAnswers[index] + 1) {
          score += 1;
        }
      });
    }

    setMarks(score);
    setShowResults(true);
    alert(`Your score: ${score}`);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleReset = () => {
    // Reset state values
    setSelectedCategory("");
    setSelectedLevel("");
    setSelectedType("");
    setStartQuiz(false);
    setCurrentQuestion(0);
    setShowResults(false);
    setMarks(0);
    setTimeLeft(300);
    setSelectedAnswers([]);
    setSelectedOptionIndex(null);
  };

  const renderQuiz = () => {
    if (startQuiz && selectedType === "MCQ") {
      const currentQuiz = quizData.find(
        (quiz) =>
          quiz.category === selectedCategory &&
          quiz.level === selectedLevel &&
          quiz.type === selectedType
      );

      if (currentQuiz) {
        const currentQuestionData = currentQuiz.questions[currentQuestion];
        return (
          <Box
            key={currentQuestion}
            sx={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              backgroundColor: "#f3f3f3",
              boxShadow: "0px 4px 10px rgba(233,233,233,0.643)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              {currentQuestionData.question}
            </Typography>
            {/* Rendering answer options in a 2x2 grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {currentQuestionData.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    backgroundColor:
                      selectedOptionIndex === index ? "blue" : "transparent",
                    color: selectedOptionIndex === index ? "white" : "black",
                    minWidth: "200px",
                    height: "100px",
                    padding: "10px",
                    textAlign: "center",
                    lineHeight: "1.5",
                  }}
                  onClick={() => handleAnswerSelection(currentQuestion, index)}
                >
                  {option}
                </Button>
              ))}
            </Box>
            <Box mt={2}>
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                sx={{ marginRight: "8px" }}
              >
                Previous
              </Button>
              <Button
                onClick={handleNextQuestion}
                disabled={currentQuestion === currentQuiz.questions.length - 1}
                sx={{ marginRight: "8px" }}
              >
                Next
              </Button>
              {currentQuestion === currentQuiz.questions.length - 1 && (
                <Button
                  onClick={handleEndQuiz}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        );
      }
    } else if (startQuiz && selectedType !== "") {
      return (
        <Box>
          <Button
            onClick={handleEndQuiz}
            variant="contained"
            color="primary"
            sx={{ width: "100%", marginTop: "1rem" }}
          >
            Submit
          </Button>
        </Box>
      );
    }
    return null;
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {!startQuiz && (
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            minWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: isSmallScreen ? "row" : "column",
            border: "1px solid #ccc",
            minHeight: "15rem",
            backgroundColor: "#f1f5f9",
            boxShadow: "0px 4px 10px rgba(233,233,233,0.643)",
          }}
        >
          <Box sx={{ margin: "1rem", "& > *": { margin: "1rem" } }}>
            {/* Dropdowns displayed in a column */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Select Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as string)}
              >
                {/* Populate categories dynamically */}
                {quizData.map((quiz) => (
                  <MenuItem key={quiz.category} value={quiz.category}>
                    {quiz.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Level Dropdown */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Select Level</InputLabel>
              <Select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as string)}
              >
                {/* Populate levels dynamically based on selected category */}
                {quizData
                  .filter((quiz) => quiz.category === selectedCategory)
                  .map((quiz) => (
                    <MenuItem key={quiz.level} value={quiz.level}>
                      {quiz.level}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Type Dropdown */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Select Type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as string)}
              >
                {/* Populate types dynamically based on selected category and level */}
                {quizData
                  .filter(
                    (quiz) =>
                      quiz.category === selectedCategory &&
                      quiz.level === selectedLevel
                  )
                  .map((quiz) => (
                    <MenuItem key={quiz.type} value={quiz.type}>
                      {quiz.type}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button
              onClick={handleStartQuiz}
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
            >
              Start Test
            </Button>
          </Box>
        </Box>
      )}

      {/* Render Quiz or Show Results */}
      {showResults ? (
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h6">Your score: {marks}</Typography>
          {/* Restart Quiz Button */}
          <Button
            onClick={handleReset}
            variant="contained"
            color="secondary"
            sx={{ width: "100%", marginTop: "20px" }}
          >
            Restart Quiz
          </Button>
        </Box>
      ) : (
        renderQuiz()
      )}

      {/* Timer */}
      {startQuiz && (
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            backgroundColor: "blue",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="body1">
            Time Left: {Math.floor(timeLeft / 60)}:
            {("0" + (timeLeft % 60)).slice(-2)}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default QuizPage;
