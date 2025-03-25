import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CodeBlock, dracula } from "react-code-blocks"

const explainationStr = `function debounce(func, delay) {
    let timer;
    // Return a new function that wraps 'func'
    return function(...args) {
        // Clear any existing timer
        clearTimeout(timer);
        // Create a new timer
        timer = setTimeout(() => {
            // Call 'func' after 'delay' ms of no new calls
            func.apply(this, args);
        }, delay);
    };
}

// Example Usage:
function logMessage(msg) {
    console.log("Logging:", msg);
}

// Wrap 'logMessage' in a debouncer:
const debouncedLogMessage = debounce(logMessage, 500);

// Now if we call 'debouncedLogMessage("Hello")' multiple times quickly,
// 'logMessage' will only run once there has been 500ms with no extra calls.`
/**
 * Custom hook to debounce a value.
 * @param {string} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {any} - The debounced value.
 */
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default function DebounceExample() {
  const [inputValue, setInputValue] = useState("")
  const delay = 1000 // ms
  const debouncedValue = useDebounce(inputValue, delay)
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    setTimeLeft(delay)

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 50
        return next < 0 ? 0 : next
      })
    }, 50)

    return () => clearInterval(intervalId)
  }, [inputValue, delay])

  const elapsedRatio = 1 - timeLeft / delay
  const progressWidth = elapsedRatio * 100

  return (
    <div className="p-4 flex flex-col gap-4 items-start dark:bg-gray-900">
      <motion.h1
        className="text-2xl font-bold dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Debounce Hook Demo (Interactive)
      </motion.h1>

      <label htmlFor="debounce-input" className="text-lg dark:text-white">
        Type something:
      </label>
      <input
        id="debounce-input"
        type="text"
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-2xl shadow-md focus:outline-none focus:ring dark:bg-gray-800 dark:text-white"
        placeholder="Start typing..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-500 dark:bg-green-400"
          animate={{ width: `${progressWidth}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      {/* this below should be text align left */}
      <div className="flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300 text-left">
        <p>Immediate Value: {inputValue}</p>
        <p>Debounced Value: {debouncedValue}</p>
        <p>Time Left: {timeLeft}ms</p>
      </div>

      <motion.div
        className="rounded-2xl bg-blue-50 dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 shadow-sm w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="mb-2 font-bold">What is a Debouncer?</h2>
        <p className="text-sm mb-2">
          A <strong>debouncer</strong> ensures that a function (or some update)
          only executes after a certain period of inactivity. If another event
          (like a keystroke) happens during that wait period, the timer resets.
          This prevents the function from being called too frequently.
        </p>
        <p className="mb-2 font-bold">How to Use It (in Plain JavaScript):</p>
        {/* <pre className="bg-white dark:bg-gray-900 p-3 rounded-md text-xs font-mono dark:text-gray-300">
          {`function debounce(func, delay) {
    let timer;
    // Return a new function that wraps 'func'
    return function(...args) {
        // Clear any existing timer
        clearTimeout(timer);
        // Create a new timer
        timer = setTimeout(() => {
            // Call 'func' after 'delay' ms of no new calls
            func.apply(this, args);
        }, delay);
    };
}

// Example Usage:
function logMessage(msg) {
    console.log("Logging:", msg);
}

// Wrap 'logMessage' in a debouncer:
const debouncedLogMessage = debounce(logMessage, 500);

// Now if we call 'debouncedLogMessage("Hello")' multiple times quickly,
// 'logMessage' will only run once there has been 500ms with no extra calls.
`}
        </pre>
         */}
        <CodeBlock
          text={explainationStr}
          language="javascript"
          showLineNumbers={true}
          theme={dracula}
          //   codeBlock
          customStyle={{
            borderRadius: "0.375rem",
            fontSize: "0.75rem",
            fontFamily: "monospace",
            textAlign: "left",
          }}
        />
        <p className="mt-2 text-sm">
          Here we have a{" "}
          <code className="dark:bg-gray-700 dark:text-gray-300 px-1 rounded">
            debounce
          </code>{" "}
          function that accepts the original function (
          <code className="dark:bg-gray-700 dark:text-gray-300 px-1 rounded">
            func
          </code>
          ) and a{" "}
          <code className="dark:bg-gray-700 dark:text-gray-300 px-1 rounded">
            delay
          </code>{" "}
          in milliseconds. Any rapid calls within the delay period will reset
          the timer, ensuring{" "}
          <code className="dark:bg-gray-700 dark:text-gray-300 px-1 rounded">
            func
          </code>{" "}
          only runs once after the user (or any process) stops triggering it.
        </p>
        <p className="mt-4 font-bold">How Each Part Works:</p>
        <ul className="list-disc list-inside text-sm">
          <li>
            <strong>timer variable</strong>: A reference to the current timeout.
          </li>
          <li>
            <strong>clearTimeout(timer)</strong>: If the function is called
            again before the wait finishes, cancel the previous timer.
          </li>
          <li>
            <strong>setTimeout(...)</strong>: Schedule the original function to
            run after the specified delay.
          </li>
          <li>
            <strong>func.apply(this, args)</strong>: Executes the original
            function with the correct context (
            <code className="dark:bg-gray-700 dark:text-gray-300 px-1 rounded">
              this
            </code>
            ) and arguments.
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
