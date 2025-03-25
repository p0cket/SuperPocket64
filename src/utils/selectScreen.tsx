import React from "react"
import MidSection from "../components/MidSection"
import Projects from "../components/Projects"
import DebounceExample from "../components/Projects/DebounceExample"
import { SelectScreenPayload } from "../types"

// filepath: /Users/pocket/code2/portfolio/superpocket64/src/utils/selectScreen.ts

/**
 * Function to select which component to render based on the current screen state
 * @returns - The appropriate React component(s) for the selected screen
 */

export const selectScreen = ({
  screen,
  setScreen,
  data,
}: SelectScreenPayload): React.ReactNode => {
  switch (screen) {
    case "home":
      return (
        <>
          <MidSection />
          <Projects screen={screen} setScreen={setScreen} data={data} />
        </>
      )
    case "debounce":
      return <DebounceExample />
    case "main":
      return (
        <>
          <MidSection />
        </>
      )
    default:
      // Fallback to home if the screen doesn't match any known values
      return (
        <>
          <MidSection />
          <Projects screen={screen} setScreen={setScreen} data={data} />
        </>
      )
  }
}
