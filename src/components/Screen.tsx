import React from "react"
import { selectScreen } from "../utils/selectScreen"
import { SelectScreenPayload } from "../types"

function Screen({ screen, setScreen, data }: SelectScreenPayload) {
  // Screen component to render different screens based on the selected screen
  // This component will use the screen prop to determine which screen to render
  // and the setScreen function to change the screen when needed
  // The data prop can be used to pass any additional data needed for the screen
  return <>{selectScreen({ screen, setScreen, data })}</>
}

export default Screen
