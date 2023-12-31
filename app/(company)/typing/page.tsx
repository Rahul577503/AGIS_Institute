"use client";
import { getTime } from "@/lib/getTime";
import { useKeyPress } from "@/lib/onKey";
import { makeWords } from "@/lib/Words";
import { Box, Container,Input } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import styles from "../../../styles/home.module.css";
import { Wrapper } from "@/components/Wrapper/Wrapper";

let initialWords = makeWords();

interface OutgoingWordProps {
  text: string;
  isWrong?: boolean;
}

const TypeWriter = ({}) => {
  const [placeholder, setPlaceHolder] = useState("_");
  const [input, setInput] = useState("");
  const [targetIndex, setTargetIndex] = useState(0);
  const [target, setTarget] = useState(initialWords[targetIndex]);
  const [outgoing, setOutGoing] = useState<Array<OutgoingWordProps>>([]);
  const [inputStyles, setInputStyles] = useState<CSSProperties>();
  const [startTime, setStartTime] = useState(0);
  const [words, setWords] = useState(initialWords);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [inputCounter, setInputCounter] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [upcoming, setUpcoming] = useState(
    initialWords.slice(targetIndex + 1, initialWords.length)
  );
  const [blockInputs, setBlockInputs] = useState(false);
  const [wordCountInput, setWordCountInput] = useState("36");

  useEffect(() => {
    if (!target) {
      return setInputStyles({
        background: "#16A085",
      });
    }

    if (input !== target.slice(0, input.length)) {
      setInputStyles({
        background: "#ff1d15aa",
        color: "white",
      });
    } else {
      setInputStyles({
        background: "#eee",
      });
    }
    if (inputCounter > 0)
      setAccuracy(
        Math.floor(((inputCounter - errorCount) / inputCounter) * 100)
      );
  }, [input, errorCount, target, inputCounter]);

  useEffect(() => {
    if (parseInt(wordCountInput) >= 10) {
      setWords(makeWords(parseInt(wordCountInput)));
    }
  }, [wordCountInput]);

  useEffect(() => {
    setInput("");
    setTargetIndex(0);
    setTarget(words[0]);
    setOutGoing([]);
    setStartTime(0);
    setWordCount(0);
    setCharCount(0);
    setInputCounter(0);
    setErrorCount(0);
    setAccuracy(0);
    setWpm(0);
    setUpcoming(words.slice(1, words.length));
  }, [words]);

  useKeyPress((key: string) => {
    if (inputCounter === words.length || blockInputs === true) return;
    setPlaceHolder("");

    if (!startTime) {
      setStartTime(getTime());
    }

    if (key === " " && input.length > 0) {
      setCharCount(charCount + input.length);
      setInputCounter(inputCounter + 1);
      const durationInMinutes = (getTime() - startTime) / 60000.0;
      if (input === target) {
        setWordCount(Math.floor((charCount + input.length) / 5));
        setWpm(parseInt(((wordCount + 1) / durationInMinutes).toFixed(2)));
      } else {
        setWpm(parseInt((wordCount / durationInMinutes).toFixed(2)));
      }
      setInput("");
      setTargetIndex(targetIndex + 1);
      setTarget(words[targetIndex + 1]);
      setUpcoming(words.slice(targetIndex + 2, words.length));
      setOutGoing([
        ...outgoing,
        { text: target, isWrong: input !== target ? true : false },
      ]);
      setErrorCount(input !== target ? errorCount + 1 : errorCount);

      return;
    }

    if (key === "Backspace") {
      setInput(input.slice(0, -1));
    }

    if (input.length <= 50 && key !== "Backspace" && key !== " ")
      setInput(input + key);
  });

  return (
    
      <Container maxWidth="md" className={styles.container}>
        <Wrapper>
        <Box className={styles.flex}>
          <Box className={styles.wpmContainer}>
            wpm: {wpm} acc: {accuracy}%
          </Box>

          <Box className={styles.wordCountContainer}>
            word count:{" "}
            <Input
              className={styles.wordCountInput}
              onKeyDown={(e) => {
                if (e.key === "Backspace")
                  return setWordCountInput(wordCountInput.slice(0, -1));
                if (parseInt(wordCountInput + e.key) < 100)
                  return setWordCountInput(
                    isNaN(+e.key) || e.key === " "
                      ? wordCountInput
                      : wordCountInput + e.key
                  );
              }}
              onFocus={() => {
                setBlockInputs(true);
                wordCountInput ?? undefined;
              }}
              onBlur={() => {
                setBlockInputs(false);
              }}
              onChange={(e) => {
                setWordCountInput(e.target.value);
              }}
              value={wordCountInput}
            />
          </Box>

          <Box
            className={styles.resetButton}
            onClick={() => {
              setWords(makeWords(parseInt(wordCountInput)));
            }}
          >
            reset
          </Box>
        </Box>
        <Box className={styles.wordsContainer}>
          {outgoing?.map((word, key) => {
            if (word.text.length > 0) {
              return (
                <Box
                  className={word.isWrong ? styles.isWrong : styles.isRight}
                  key={key}
                >
                  {word.text}
                </Box>
              );
            } else return null;
          })}
          <Box className={styles.target}>{target}</Box>
          {upcoming.map((word, key) => (
            <Box className={styles.word} key={key}>
              {word}
            </Box>
          ))}
        </Box>

        <Box className={styles.flex}>
          <Box style={inputStyles} className={styles.inputContainer}>
            {input ? input : "Start typing here..."}
          </Box>
        </Box>
       </Wrapper>
      </Container>
  );
};

export default TypeWriter;
