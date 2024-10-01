import React, { useState, useEffect } from 'react';
import { questions as initialQuestions } from '../data/questions';
import { Button, Typography, Box, RadioGroup, FormControlLabel, Radio, Fade, Grow, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Shuffle questions when the component mounts and select 15 random questions
  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).slice(0, 15); // Take only the first 15 questions
    setQuestions(shuffledQuestions);
    console.log(shuffledQuestions);
  }, []);

  const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    const correctAnswer = currentQuestion.correctAnswer;
    const userAnswer = selectedAnswer;

    if (userAnswer === correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(null);
      // Stop any ongoing speech when moving to the next question
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setQuestions(shuffleArray(initialQuestions).slice(0, 15));
    // Stop any ongoing speech when restarting the quiz
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Function to speak the explanation
  const speakExplanation = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentQuestion.explanation);

      // Customize speech attributes (optional)
      utterance.volume = 0.7; // Set volume (0 to 1)
      utterance.rate = 0.9; // Set rate (0.1 to 10)
      utterance.pitch = 1; // Set pitch (0 to 2)

      // Function to set the voice and speak
      const setVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          utterance.voice = voices.find((voice) => voice.name === 'Samantha') || voices.find((voice) => voice.lang === 'en-US');
        }
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      };

      // Check if voices are already loaded
      if (window.speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
      } else {
        // Add event listener for voiceschanged event
        window.speechSynthesis.onvoiceschanged = () => {
          setVoiceAndSpeak();
        };
      }

      // Event listeners to update state when speaking ends or is canceled
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  // Function to stop speaking
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (quizCompleted) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Reps Complete!
        </Typography>
        <Typography variant="h6">
          You scored {score} out of {questions.length}.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRestart} sx={{ mt: 3 }}>
          Begin Next Set
        </Button>
      </Box>
    );
  }

  if (!currentQuestion) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        position="absolute"
        top={{ xs: 96, sm: 16 }} // Move down on mobile screens
        right={{ xs: 8, sm: 16 }} // Adjust right margin on mobile screens
        p={{ xs: 1, sm: 2 }} // Smaller padding on mobile screens
        bgcolor="primary.main"
        color="white"
        borderRadius={4}
      >
        <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>
          Score: {score} / {questions.length}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 108px)',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            fontFamily: 'monospace',
            padding: '20px',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
          }}
        >
          <Typography variant="h5" gutterBottom>
            {currentQuestion.question}
          </Typography>
          <RadioGroup name="quiz-options" value={selectedAnswer !== null ? selectedAnswer.toString() : ''} onChange={handleAnswerSelect}>
            {currentQuestion.options.map((option, index) => (
              <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={option} />
            ))}
          </RadioGroup>

          {/* Submit Button */}
          {!showExplanation && (
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={selectedAnswer === null} sx={{ mt: 2 }}>
              Submit
            </Button>
          )}

          {/* Feedback and Explanation */}
          {showExplanation && (
            <Box mt={3}>
              <Grow in={true} timeout={500}>
                <Typography variant="h6" color={isCorrect ? 'success.main' : 'error.main'}>
                  {isCorrect ? 'Correct!' : 'Wrong!'}
                </Typography>
              </Grow>

              <Fade in={true} timeout={1000}>
                <Box display="flex" alignItems="center" mt={2}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography variant="body1">
                        Explanation{' '}
                        <IconButton onClick={isSpeaking ? stopSpeaking : speakExplanation} color="primary" aria-label="toggle speaker">
                          {isSpeaking ? <VolumeOffIcon /> : <VolumeUpIcon />}
                        </IconButton>
                        :
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }} display="flex" justifyContent="flex-end">
                      {currentQuestion.explanation}
                    </Grid>
                  </Grid>
                </Box>
              </Fade>

              <Button variant="contained" color="primary" onClick={handleNextQuestion} sx={{ mt: 2 }}>
                {currentQuestionIndex + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Quiz;
